import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What documents do I need to purchase a car?",
    answer: `Malaysian applicants:
• NRIC (Clear Front & Back Copy)
• Driving License
• Latest Payslip & Bank Statement*

Non-Malaysian applicants will need to contact us for a direct quote.
*3 Months (Salaried Employee), 6 Months (Self-employed, Commission Earners)`,
  },
  {
    question: "How will I know if I qualify for a loan?",
    answer:
      "Once you submit your application, our team will review your documents and get back to you within 2 working days with a pre-approval status. We work with multiple banks to ensure you get the best rates possible.",
  },
  {
    question: "Who can I contact after I get my car if I have questions?",
    answer:
      "Our customer service team is always ready to assist you. You can reach us via WhatsApp, email, or phone during business hours. We're committed to supporting you throughout your car ownership journey.",
  },
  {
    question: "Where are the cars coming from?",
    answer:
      "All our cars are sourced from authorized dealers and reputable sources in Malaysia. Each vehicle undergoes a thorough inspection to ensure quality and reliability before being listed on our platform.",
  },
  {
    question: "Why buy from Carlo?",
    answer:
      "Carlo offers a transparent, hassle-free car buying experience. We provide competitive pricing, flexible financing options, and excellent customer service. Our fully online process saves you time and ensures you get the best deal.",
  },
  {
    question: "What banks do you partner with for loan application?",
    answer:
      "We partner with major banks in Malaysia including Maybank, CIMB, Public Bank, Hong Leong Bank, RHB, and many others. This allows us to offer competitive rates and flexible terms tailored to your needs.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-carlo">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          FAQ
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;