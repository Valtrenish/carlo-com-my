import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
  favicon?: string;
}

const SITE_URL = "https://carlo.com.my";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/116df794-9a39-40a2-84c8-762940927f01/id-preview-2b1747dc--a28684e4-1f82-4deb-8316-50190d3a0a75.lovable.app-1772678296017.png";

const SEO = ({ title, description, canonical, jsonLd, noindex, favicon }: SEOProps) => {
  const fullUrl = `${SITE_URL}${canonical}`;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Carlo",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    sameAs: ["https://www.instagram.com/carlomalaysia"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Carlo",
    url: SITE_URL,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {favicon && <link rel="icon" href={favicon} type="image/png" />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
