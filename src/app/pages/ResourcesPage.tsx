import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

import cmlDosingGuide from "@/imports/pages/support/iclusig-cml-dosing-and-administration-guide-1.jpg";
import phallDosingGuide from "@/imports/pages/support/iclusig-1l-ph-all-dosing-and-administration-guide-1.jpg";
import productMonograph from "@/imports/pages/support/iclusig-product-monograph_cover.jpg";
import phallVisualAid from "@/imports/pages/support/clean-iclusig-ph-all-digital-visual-aid.jpg";
import billingGuide from "@/imports/pages/support/draft-iclusig-billing-and-coding-guide.jpg";
import enrollmentForm from "@/imports/pages/support/Takeda-Oncology-Here2Assist-Enrollment-Form.jpg";
import papApplication from "@/imports/pages/support/Patient-Assistance-Program-Application.jpg";
import patientBrochure from "@/imports/pages/support/Patient-Brochure.jpg";
import takedaBrochure from "@/imports/pages/support/takeda-oncology-patient-brochure.jpg";
import medicationCoverage from "@/imports/pages/support/guide-to-understanding-medication-coverage.jpg";
import coPayBrochure from "@/imports/pages/support/Co-Pay-Assistance-Brochure.jpg";
import accessGuide from "@/imports/pages/support/clean-iclusig-access-guide.jpg";
import letterOfNecessity from "@/imports/pages/support/Sample-Letter-of-Medical-Necessity.jpg";
import letterOfAppeal from "@/imports/pages/support/Sample-Letter-of-Appeal.jpg";

/* ------------------------------------------------------------------ */
/*  Types & data                                                       */
/* ------------------------------------------------------------------ */

interface ResourceItem {
  title: string;
  thumbnail: string;
  alt: string;
  pdfUrl: string;
}

const HCP_RESOURCES: ResourceItem[] = [
  {
    title: "Optimized Dosing Guide for CP-CML",
    thumbnail: cmlDosingGuide,
    alt: "Optimized Dosing Guide for CP-CML.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/iclusig_dosing_guide.pdf",
  },
  {
    title: "Dosing Guide for Newly Diagnosed Ph+ ALL",
    thumbnail: phallDosingGuide,
    alt: "Dosing Guide for Newly Diagnosed Ph+ ALL.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/phall_iclusig_dosing_guide.pdf",
  },
  {
    title: "Product Monograph for Newly Diagnosed Ph+ ALL",
    thumbnail: productMonograph,
    alt: "Product Monograph for Newly Diagnosed Ph+ ALL.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/iclusig-product-monograph-for-iclusig-in-newly-diagnosed-ph-all.pdf",
  },
  {
    title: "Summary Sheet for Newly Diagnosed Ph+ ALL",
    thumbnail: phallVisualAid,
    alt: "Summary Sheet for Newly Diagnosed Ph+ ALL.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/summary-sheet-for-iclusig-in-newly-diagnosed-ph-all.pdf",
  },
  {
    title: "Billing and Coding Guide for Newly Diagnosed Ph+ ALL",
    thumbnail: billingGuide,
    alt: "Billing and Coding Guide for Newly Diagnosed Ph+ ALL.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/iclusig-billing-and-coding-guide.pdf",
  },
];

const PATIENT_RESOURCES: ResourceItem[] = [
  {
    title: "Takeda Oncology Here2Assist Enrollment Form",
    thumbnail: enrollmentForm,
    alt: "Takeda Oncology Here2Assist\u00ae enrollment form.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/resources/Takeda_Oncology_Here2Assist_Enrollment_Form.pdf",
  },
  {
    title: "Patient Assistance Program Application",
    thumbnail: papApplication,
    alt: "Takeda Oncology Here2Assist\u00ae Patient Assistance Application.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/resources/Takeda_Oncology_Patient_Assistance_Program_Enrollment_Form.pdf",
  },
  {
    title: "Here2Assist Patient Brochure",
    thumbnail: patientBrochure,
    alt: "Takeda Oncology Here2Assist\u00ae Patient brochure.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/2024-01/Takeda_Oncology_Patient_Brochure.pdf",
  },
  {
    title: "Here2Assist Office Brochure",
    thumbnail: takedaBrochure,
    alt: "Takeda Oncology Here2Assist\u00ae office brochure.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/2024-02/Takeda_Oncology_Here2Assist_Office_Brochure.pdf",
  },
  {
    title: "Guide to Understanding Medication Coverage",
    thumbnail: medicationCoverage,
    alt: "Guide to understanding medication coverage.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/glossary_of_insurance_terms.pdf",
  },
  {
    title: "Co-Pay Assistance Brochure",
    thumbnail: coPayBrochure,
    alt: "Takeda Oncology copay assistance program.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/2024-03/Takeda_Oncology_Co-Pay_Assistance_Program_Brochure.pdf",
  },
  {
    title: "Access Guide",
    thumbnail: accessGuide,
    alt: "Access Guide.",
    pdfUrl:
      "https://test-iclusig-hcp-v2.pantheonsite.io/sites/default/files/resources/iclusig-access-guide.pdf",
  },
  {
    title: "Sample Letter of Medical Necessity",
    thumbnail: letterOfNecessity,
    alt: "Sample letter of medical necessity.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/2024-01/Sample_Letter_of_Medical_Necessity_Downloadable_Form.pdf",
  },
  {
    title: "Sample Letter of Appeal",
    thumbnail: letterOfAppeal,
    alt: "Sample letter of medical appeal.",
    pdfUrl:
      "https://www.here2assist.com/sites/default/files/2024-01/Sample_Letter_of_Appeal_Downloadable_Form.pdf",
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 lg:pt-40 px-4 md:px-16 xl:px-20"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
          ICLUSIG Patient Management Resources
        </h1>
        <p className="text-white/80 text-[15px] md:text-[17px] font-[600] leading-snug">
          Find a range of tools and resources for your office, staff, and patients
        </p>
      </div>
    </section>
  );
}

function AnchorNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full border-b border-[#E3E8EF] bg-white">
      <div className="px-4 md:px-16 xl:px-20">
        <div className="max-w-4xl flex flex-wrap gap-x-6 gap-y-1">
          <button
            onClick={() => scrollTo("hcp")}
            className="py-3 text-[14px] md:text-[15px] font-[600] text-[#237EBF] hover:text-[#003865] border-b-2 border-[#237EBF] transition-colors"
          >
            Healthcare Professional Resources
          </button>
          <button
            onClick={() => scrollTo("patient")}
            className="py-3 text-[14px] md:text-[15px] font-[600] text-[#374151] hover:text-[#237EBF] border-b-2 border-transparent transition-colors"
          >
            Patient Access Resources
          </button>
        </div>
      </div>
    </nav>
  );
}

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <div className="bg-white border border-[#E3E8EF] rounded-lg overflow-hidden flex flex-col">
      <div className="bg-[#F5F7FA] p-4 flex items-center justify-center">
        <img
          src={item.thumbnail}
          alt={item.alt}
          className="w-full max-w-[180px] h-auto"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] leading-snug mb-4 flex-1">
          {item.title}
        </h3>
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#237EBF] text-[13px] md:text-[14px] font-[600] hover:text-[#003865] transition-colors self-start"
        >
          Download the PDF
          <ChevronRight size={14} />
        </a>
      </div>
    </div>
  );
}

function CtaCard({
  title,
  linkText,
  href,
  navigate,
}: {
  title: string;
  linkText: string;
  href: string;
  navigate: (path: string) => void;
}) {
  return (
    <div className="bg-[#003865] rounded-lg p-6 flex flex-col justify-between min-h-[160px]">
      <h3 className="text-white text-[16px] md:text-[18px] font-[700] leading-snug mb-4">
        {title}
      </h3>
      <button
        onClick={() => navigate(href)}
        className="inline-flex items-center gap-2 text-white text-[14px] font-[600] border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors self-start"
      >
        {linkText}
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* Healthcare Professional Resources */}
      <section id="hcp" className="px-4 md:px-16 xl:px-20 py-8 md:py-12 scroll-mt-16">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[700] leading-snug mb-8">
            Healthcare Professional Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HCP_RESOURCES.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Patient Access Resources */}
      <section
        id="patient"
        className="px-4 md:px-16 xl:px-20 py-8 md:py-12 bg-[#F5F7FA] scroll-mt-16"
      >
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[700] leading-snug mb-8">
            Patient Access Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PATIENT_RESOURCES.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional resources callout */}
      <section className="px-4 md:px-16 xl:px-20 py-8 md:py-10">
        <div className="max-w-4xl">
          <p className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] leading-relaxed">
            Additional resources for your patients can be found on the{" "}
            <a
              href="https://www.iclusig.com/support/patient-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#237EBF] font-[700] underline hover:text-[#003865] transition-colors"
            >
              ICLUSIG patient website
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Learn about Takeda Oncology Here2Assist\u00ae patient support program"
            linkText="Here2Assist\u00ae"
            href="/support/here2assist"
            navigate={navigate}
          />
          <CtaCard
            title="Explore ICLUSIG patient support and access programs"
            linkText="Patient Support"
            href="/patient-support"
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
}
