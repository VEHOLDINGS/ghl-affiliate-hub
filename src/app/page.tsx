import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PricingTable } from "@/components/PricingTable";
import { ComparisonTable } from "@/components/ComparisonTable";
import { HowItWorks } from "@/components/HowItWorks";
import { AffiliateSection } from "@/components/AffiliateSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <Hero />
      <Benefits />
      <PricingTable />
      <ComparisonTable />
      <HowItWorks />
      <AffiliateSection />
      <Testimonials />
      <BlogTeaser />
      <Faq />
      <FinalCta />
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
    </>
  );
}
