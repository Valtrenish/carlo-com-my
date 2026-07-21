import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SALES_EMAIL = "sales@carlo.com.my";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { formData, summary } = await req.json();
    if (!formData || typeof formData !== "object") {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1. Persist submission so no answer is lost
    const { data: inserted, error: insertError } = await supabase
      .from("loan_applications")
      .insert({
        full_name: formData.fullName,
        nric_number: formData.nricNumber,
        mobile_number: formData.mobileNumber,
        email_address: formData.emailAddress,
        city: formData.city,
        state: formData.state,
        purpose: formData.purpose,
        refinance: formData.refinance,
        downpayment: formData.downpayment,
        loan_period: formData.loanPeriod,
        occupation: formData.occupation,
        service_length: formData.serviceLength,
        employer: formData.employer,
        declaration_agreed: !!formData.declarationAgreed,
        summary,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Insert failed", insertError);
      return new Response(
        JSON.stringify({ error: "Storage failed", details: insertError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Try to email sales via the built-in transactional email function (if scaffolded)
    let emailStatus: "sent" | "skipped" | "failed" = "skipped";
    try {
      const { error: emailError } = await supabase.functions.invoke(
        "send-transactional-email",
        {
          body: {
            templateName: "loan-application",
            recipientEmail: SALES_EMAIL,
            idempotencyKey: `loan-app-${inserted.id}`,
            templateData: {
              fullName: formData.fullName,
              mobileNumber: formData.mobileNumber,
              emailAddress: formData.emailAddress,
              summary,
            },
          },
        }
      );
      emailStatus = emailError ? "failed" : "sent";
      if (emailError) console.error("Email send failed", emailError);
    } catch (err) {
      console.error("Transactional email not configured yet:", err);
    }

    return new Response(
      JSON.stringify({ ok: true, id: inserted.id, email: emailStatus }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unhandled error", err);
    return new Response(
      JSON.stringify({ error: "Server error", details: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
