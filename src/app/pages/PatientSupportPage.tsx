import { useState, useEffect, useRef, useCallback } from "react";
import heroImage from "@/imports/patient-image.jpg";
import {
  Phone,
  Printer,
  Clock,
  Download,
  Copy,
  FileText,
  ShieldCheck,
  Truck,
  HeartHandshake,
  ClipboardList,
  Building2,
  Pill,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Stethoscope,
  HandCoins,
  Landmark,
  PackageCheck,
} from "lucide-react";

/* ─── Anchor sections ─── */
const SECTIONS = [
  { id: "start-here", label: "Start Here" },
  { id: "here2assist", label: "Here2Assist®" },
  { id: "coverage", label: "Coverage, PA & Appeals" },
  { id: "financial", label: "Financial Support" },
  { id: "foundation-care", label: "Foundation Care® & Ordering" },
  { id: "transition", label: "Transition of Care" },
  { id: "pharmacist", label: "Pharmacist/PHDM Tools" },
  { id: "contact", label: "Contact & Downloads" },
] as const;

/* ─── Main page ─── */
export function PatientSupportPage() {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [navStuck, setNavStuck] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /* Check if the nav can scroll further right */
  const checkOverflow = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [checkOverflow]);

  /* Intersection observer to highlight active anchor tab */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Sticky detection — observe a sentinel above the nav, not the nav itself */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setNavStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollNavRight = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.6, behavior: "smooth" });
  }, []);

  return (
    <div className="flex-1 flex flex-col overflow-x-clip">
      {/* ─── 1 HERO ─── */}
      <section
        className="w-full relative"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Background image */}
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(11,58,92,0.92) 0%, rgba(10,47,74,0.85) 50%, rgba(10,47,74,0.7) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24">
          <p className="text-white/70 text-[13px] tracking-wide uppercase mb-4">For US Healthcare Professionals</p>
          <h1 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[1.1] mb-5 max-w-[720px]">
            Patient Support &amp; Access
      
          </h1>
          

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Btn variant="primary" onClick={() => scrollTo("here2assist")}>Enroll in Here2Assist®</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("coverage")}>Get Appeals Support Tools</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("foundation-care")}>Foundation Care® / Ordering</Btn>
          </div>

          {/* Utility links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <UtilLink>Prescribing Information</UtilLink>
            <UtilLink onClick={() => scrollTo("here2assist")}>Download Enrollment Form</UtilLink>
            <UtilLink onClick={() => scrollTo("contact")}>Contact Support</UtilLink>
          </div>
        </div>
      </section>

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="h-0 w-full" aria-hidden="true" />

      {/* ─── 2 STICKY ANCHOR NAV ─── */}
      <div
        ref={navRef}
        className="sticky top-0 z-30 transition-colors duration-300"
        style={{
          backgroundColor: navStuck ? "#0E1E38" : "#ffffff",
          borderBottom: navStuck ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E3E8EF",
          boxShadow: navStuck ? "0 2px 12px rgba(0,0,0,0.2)" : "none",
        }}
      >
        <div className="relative max-w-[1200px] mx-auto">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onScroll={checkOverflow}
          >
            <nav className="flex min-w-max px-6 md:px-10 lg:px-16" aria-label="Page sections">
              {SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="whitespace-nowrap px-4 py-3 text-[13px] md:text-[14px] font-[600] border-b-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]"
                  style={
                    activeSection === id
                      ? {
                          color: navStuck ? "#ffffff" : "#0A8F8A",
                          borderBottomColor: navStuck ? "#ffffff" : "#0A8F8A",
                        }
                      : {
                          color: navStuck ? "rgba(255,255,255,0.5)" : "rgba(27,36,48,0.6)",
                          borderBottomColor: "transparent",
                        }
                  }
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right fade + scroll hint */}
          <div
            className="absolute right-0 top-0 bottom-0 flex items-center transition-opacity duration-300"
            style={{ opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? "auto" : "none" }}
          >
            <div
              className="h-full w-20"
              style={{
                background: navStuck
                  ? "linear-gradient(to right, transparent, #0E1E38 70%)"
                  : "linear-gradient(to right, transparent, white 70%)",
              }}
            />
            <button
              onClick={scrollNavRight}
              className="absolute right-2 flex items-center gap-1 rounded-full pl-2.5 pr-1.5 py-1 cursor-pointer transition-colors"
              style={{
                backgroundColor: navStuck ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.9)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                animation: "nudge-right 1.5s ease-in-out infinite",
              }}
              aria-label="Scroll to see more menu items"
            >
              <span
                className="text-[10px] font-[500] whitespace-nowrap"
                style={{ color: navStuck ? "rgba(255,255,255,0.6)" : "rgba(27,36,48,0.5)" }}
              >
                More
              </span>
              <ChevronRight size={14} className={navStuck ? "text-white" : "text-[#0A8F8A]"} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nudge-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
      `}</style>

      {/* ─── 3 START HERE ─── */}
      <section id="start-here" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Getting Started</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Start therapy fast: 3 steps for offices
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            Follow these steps to help your patients begin ICLUSIG as quickly as possible.
          </p>

          <div className="flex flex-col min-[1345px]:flex-row gap-10">
            {/* Stepper */}
            <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                num={1}
                icon={<ClipboardList size={28} />}
                title="Enroll in Here2Assist®"
                desc="Complete the enrollment form with your patient and fax it to Here2Assist."
                cta="Download Form"
                onCtaClick={() => scrollTo("here2assist")}
              />
              <StepCard
                num={2}
                icon={<ShieldCheck size={28} />}
                title="Use coverage, PA and appeals tools"
                desc="Access tools for prior authorization, appeals, and benefit verification."
                cta="View Tools"
                onCtaClick={() => scrollTo("coverage")}
              />
              <StepCard
                num={3}
                icon={<Truck size={28} />}
                title="Order / dispense correctly"
                desc="Send prescriptions to AcariaHealth or use Foundation Care / ICLUSIGDirect."
                cta="Ordering Info"
                onCtaClick={() => scrollTo("foundation-care")}
              />
            </div>

            {/* Need help card */}
            <div className="min-[1345px]:w-[280px] flex-shrink-0">
              <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6">
                <h3 className="text-[#0B3A5C] text-[16px] font-[700] mb-4">Need help now?</h3>
                <div className="space-y-3 mb-5">
                  <ContactLine icon={<Phone size={16} />} label="Phone" value="1-844-HERE-2-ASSIST" />
                  <ContactLine icon={<Printer size={16} />} label="Fax" value="1-844-269-3038" />
                  <ContactLine icon={<Clock size={16} />} label="Hours" value="Mon–Fri 8am–8pm ET" />
                </div>
                <Btn variant="primary" full onClick={() => scrollTo("contact")}>Contact Support</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── 4 HERE2ASSIST ─── */}
      <section id="here2assist" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Program Overview</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Takeda Oncology Here2Assist®
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            A comprehensive support program to help appropriate patients access ICLUSIG.
          </p>

          {/* 4-item icon list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <IconListItem
              icon={<ShieldCheck size={22} className="text-[#0A8F8A]" />}
              text="Works with insurance to help patients get started"
            />
            <IconListItem
              icon={<HandCoins size={22} className="text-[#0A8F8A]" />}
              text="Identifies available financial assistance; provides information on ponatinib costs"
            />
            <IconListItem
              icon={<PackageCheck size={22} className="text-[#0A8F8A]" />}
              text="Identifies a specialty pharmacy to fill and ship prescriptions"
            />
            <IconListItem
              icon={<Phone size={22} className="text-[#0A8F8A]" />}
              text="Regular follow-up calls to patients"
            />
          </div>

          {/* Enrollment steps */}
          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 md:p-8 mb-8">
            <h3 className="text-[#0B3A5C] text-[20px] font-[700] mb-5">Enrollment is simple</h3>
            <ol className="space-y-4 mb-6">
              <EnrollStep num={1} text="Download and print the Enrollment Form" />
              <EnrollStep num={2} text="Complete and sign with your patient" />
              <EnrollStep num={3} text="Fax form + insurance card + prescription to: 1-844-269-3038" />
            </ol>
          </div>

          <div className="flex flex-wrap gap-3">
            <Btn variant="primary" icon={<Download size={16} />}>Download Enrollment Form</Btn>
            <Btn variant="secondary" icon={<Copy size={16} />}>Copy fax number: 1-844-269-3038</Btn>
            <Btn variant="secondary" icon={<Phone size={16} />}>Call Here2Assist®</Btn>
          </div>
        </div>
      </section>

      {/* ─── 5 COVERAGE, PA & APPEALS ─── */}
      <section id="coverage" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Coverage Tools</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Coverage, PA and appeals support
          </h2>
          <p className="text-[#0A8F8A] text-[18px] font-[600] mb-8">Appeals support tools</p>

          {/* Download tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-[1345px]:grid-cols-4 gap-5 mb-12">
            <DownloadTile
              title="PA submission checklist"
              desc="Use when submitting a prior authorization request"
            />
            <DownloadTile
              title="Peer-to-peer checklist"
              desc="Use to prepare for a peer-to-peer review call"
            />
            <DownloadTile
              title="Letter of medical necessity template"
              desc="Use to support prior authorization and appeals"
            />
            <DownloadTile
              title="Appeal letter template"
              desc="Use to draft a formal appeal of a coverage denial"
            />
          </div>

          {/* FAQ accordion */}
          <h3 className="text-[#1B2430] text-[20px] font-[700] mb-5">Frequently asked questions</h3>
          <div className="space-y-3">
            <AccordionItem q="What commonly causes delays?">
              Common causes include incomplete prior authorization forms, missing clinical documentation,
              or incorrect pharmacy routing. Ensure all required fields are completed and supporting
              documents are attached when submitting.
            </AccordionItem>
            <AccordionItem q="When should I submit an appeal?">
              Submit an appeal promptly after receiving a denial. Most payers allow 30–60 days.
              Use the appeal letter template and include all relevant clinical rationale and
              supporting literature.
            </AccordionItem>
            <AccordionItem q="Who do I contact for additional support?">
              Contact Here2Assist at 1-844-HERE-2-ASSIST (Mon–Fri 8am–8pm ET) for personalized
              guidance on coverage, PA, and appeals processes.
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* ─── 6 FINANCIAL SUPPORT ─── */}
      <section id="financial" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Financial Assistance</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Financial support pathways
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            For eligible patients — multiple programs may help reduce out-of-pocket costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <FinanceCard
              icon={<HandCoins size={28} className="text-[#0A8F8A]" />}
              title="Copay support"
              desc="Eligible commercially insured patients may pay as little as $0 per month. Terms and conditions apply."
            />
            <FinanceCard
              icon={<HeartHandshake size={28} className="text-[#0A8F8A]" />}
              title="Patient assistance"
              desc="Uninsured or underinsured patients may qualify for free medication through Takeda's patient assistance program."
            />
            <FinanceCard
              icon={<Landmark size={28} className="text-[#0A8F8A]" />}
              title="Independent foundations"
              desc="Here2Assist can help identify independent charitable foundations that may offer additional financial support."
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Btn variant="primary" onClick={() => scrollTo("here2assist")}>Start Here2Assist Enrollment</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("contact")}>Speak With a Support Specialist</Btn>
          </div>
        </div>
      </section>

      {/* ─── 7 FOUNDATION CARE & ORDERING ─── */}
      <section id="foundation-care" className="bg-white scroll-mt-14">
        {/* Navy callout band */}
        <div style={{ background: "linear-gradient(135deg, #0B3A5C 0%, #0A2F4A 100%)" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
            <SectionLabel light>Ordering &amp; Dispensing</SectionLabel>
            <h2 className="text-white text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Foundation Care® and ordering ICLUSIG
            </h2>
            <p className="text-white/80 text-[16px] mb-6 max-w-[600px]">
              Where to send the prescription — ordering and dispensing information.
            </p>
            <Btn variant="primary" onClick={() => scrollTo("foundation-care")}>View Ordering Instructions</Btn>
          </div>
        </div>

        {/* Two cards */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AcariaHealth */}
            <div className="border border-[#E3E8EF] rounded-lg overflow-hidden">
              <div className="bg-[#0B3A5C] px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  AcariaHealth
                </h3>
                <p className="text-white/70 text-[13px]">Exclusive integrated specialty pharmacy</p>
              </div>
              <div className="p-6">
                <ContactLine icon={<Phone size={16} />} label="Phone" value="833-442-8911" />
                <div className="mt-5 space-y-3">
                  <h4 className="text-[#1B2430] text-[15px] font-[600]">Two ways to order:</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1B2430] text-[15px]">E-prescribe to AcariaHealth</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1B2430] text-[15px]">Use referral form + fax as directed</span>
                  </div>
                </div>
                {/* Warning */}
                <div className="mt-6 bg-[#FFF8E1] border-l-4 border-[#F2C94C] rounded-r-lg p-4 flex gap-3">
                  <AlertTriangle size={20} className="text-[#c6a000] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1B2430] text-[13px] leading-[1.6]">
                    <span className="font-[700]">Important:</span> ICLUSIG must be filled through
                    AcariaHealth. Use of an alternate pharmacy may delay or result in nonfulfillment
                    of the prescription.
                  </p>
                </div>
              </div>
            </div>

            {/* Foundation Care */}
            <div className="border border-[#E3E8EF] rounded-lg overflow-hidden">
              <div className="bg-[#0A8F8A] px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  Foundation Care
                </h3>
                <p className="text-white/70 text-[13px]">ICLUSIGDirect Purchase Program</p>
              </div>
              <div className="p-6">
                <ContactLine icon={<Phone size={16} />} label="Phone" value="833-291-2773" />
                <p className="text-[#1B2430]/70 text-[14px] mt-5 mb-6 max-w-[400px]">
                  Distribution partner resources for purchasing and access. Contact Foundation Care
                  for information about ICLUSIGDirect and institutional ordering.
                </p>
                <Btn variant="primary">Request Foundation Care / ICLUSIGDirect Information</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8 TRANSITION OF CARE ─── */}
      <section id="transition" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Continuity Planning</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Transition of care
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            Inpatient to outpatient — ensure continuity of ICLUSIG therapy at discharge.
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: bullets */}
            <div className="flex-1 min-w-0">
              <ul className="space-y-4">
                <BulletItem icon={<ClipboardList size={20} />} text="Discharge checklist — ensure all documentation is complete before patient leaves" />
                <BulletItem icon={<FileText size={20} />} text="Discharge summary support — template for communicating treatment plan to outpatient providers" />
                <BulletItem icon={<Pill size={20} />} text="Outpatient dispensing steps — route the prescription to AcariaHealth before discharge" />
              </ul>
              <div className="mt-8">
                <Btn variant="secondary" icon={<Phone size={16} />} onClick={() => scrollTo("contact")}>
                  Contact Support for Inpatient Workflow Questions
                </Btn>
              </div>
            </div>

            {/* Right: download card */}
            <div className="lg:w-[320px] flex-shrink-0">
              <div className="bg-white border border-[#E3E8EF] rounded-lg p-6" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div className="w-12 h-12 rounded-lg bg-[#0A8F8A]/10 flex items-center justify-center mb-4">
                  <Download size={24} className="text-[#0A8F8A]" />
                </div>
                <h3 className="text-[#1B2430] text-[18px] font-[700] mb-2">
                  Transition-of-Care Toolkit
                </h3>
                <p className="text-[#1B2430]/60 text-[14px] mb-5">
                  Comprehensive guide for managing the inpatient-to-outpatient handoff for ICLUSIG patients.
                </p>
                <Btn variant="primary" full icon={<Download size={16} />}>Download</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9 PHARMACIST / PHDM TOOLS ─── */}
      <section id="pharmacist" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel>Pharmacy Resources</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            For pharmacists and pharmacy decision-makers (PHDMs)
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            Resources to support formulary decisions, procurement, and patient access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PharmCard
              icon={<ShieldCheck size={28} className="text-[#0A8F8A]" />}
              title="Appeals & coverage tools"
              desc="Access prior authorization templates, appeal letter guides, and peer-to-peer preparation checklists."
            />
            <PharmCard
              icon={<Building2 size={28} className="text-[#0A8F8A]" />}
              title="Ordering / procurement overview"
              desc="Foundation Care and AcariaHealth ordering pathways, formulary information, and distribution details."
            />
            <PharmCard
              icon={<Stethoscope size={28} className="text-[#0A8F8A]" />}
              title="Request support"
              desc="Connect with a Takeda Oncology representative for personalized assistance with your pharmacy needs."
            />
          </div>
        </div>
      </section>

      {/* ─── 10 CONTACT & DOWNLOADS ─── */}
      <section
        id="contact"
        className="scroll-mt-14"
        style={{ background: "linear-gradient(135deg, #0A2F4A 0%, #0B3A5C 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h2 className="text-white text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-8">
            Contact support
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            <Btn variant="primary" onClick={() => scrollTo("here2assist")}>Enroll in Here2Assist®</Btn>
            <Btn variant="secondary-light" onClick={() => scrollTo("here2assist")}>Download Enrollment Form</Btn>
          </div>

          <div className="space-y-4">
            <ContactLineWhite icon={<Phone size={18} />} label="Phone" value="1-844-HERE-2-ASSIST (1-844-437-3227)" />
            <ContactLineWhite icon={<Printer size={18} />} label="Fax" value="1-844-269-3038" />
            <ContactLineWhite icon={<Clock size={18} />} label="Hours" value="Monday–Friday 8:00 AM – 8:00 PM ET" />
          </div>

          <p className="text-white/50 text-[12px] mt-10">
            For US Healthcare Professionals only. ICLUSIG® is a registered trademark of
            Takeda Pharmaceutical Company Limited.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Shared sub-components (private to this page)
   ═══════════════════════════════════════════ */

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[12px] tracking-[0.12em] uppercase font-[600] mb-2 ${
        light ? "text-[#0A8F8A]" : "text-[#0A8F8A]"
      }`}
    >
      {children}
    </p>
  );
}

/* ── Buttons ── */
function Btn({
  children,
  variant,
  icon,
  full,
  onClick,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "secondary-light";
  icon?: React.ReactNode;
  full?: boolean;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-[14px] font-[600] rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]";

  const variants = {
    primary: "bg-[#0A8F8A] text-white hover:bg-[#088580] active:bg-[#077570]",
    secondary:
      "bg-white text-[#0B3A5C] border border-[#E3E8EF] hover:bg-[#F5F7FA] active:bg-[#E3E8EF]",
    "secondary-light":
      "bg-transparent text-white border border-white/40 hover:bg-white/10 active:bg-white/20",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${full ? "w-full" : ""}`}>
      {icon}
      {children}
    </button>
  );
}

function UtilLink({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href="#"
      onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
      className="text-white/70 text-[13px] underline underline-offset-2 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A] flex items-center gap-1"
    >
      {children}
      <ExternalLink size={12} />
    </a>
  );
}

/* ── Step card ── */
function StepCard({
  num,
  icon,
  title,
  desc,
  cta,
  onCtaClick,
}: {
  num: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  cta: string;
  onCtaClick?: () => void;
}) {
  return (
    <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-full bg-[#0A8F8A] text-white text-[14px] font-[700] flex items-center justify-center flex-shrink-0">
          {num}
        </span>
        <span className="text-[#0A8F8A]">{icon}</span>
      </div>
      <h3 className="text-[#1B2430] text-[16px] font-[700] mb-2">{title}</h3>
      <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-5 flex-1">{desc}</p>
      <button onClick={onCtaClick} className="text-[#0A8F8A] text-[14px] font-[600] flex items-center gap-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]">
        {cta} <ArrowRight size={14} />
      </button>
    </div>
  );
}

/* ── Contact line ── */
function ContactLine({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#0A8F8A]">{icon}</span>
      <div>
        <span className="text-[#1B2430]/50 text-[12px]">{label}</span>
        <p className="text-[#1B2430] text-[14px] font-[600]">{value}</p>
      </div>
    </div>
  );
}

function ContactLineWhite({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#0A8F8A]">{icon}</span>
      <div>
        <span className="text-white/50 text-[12px]">{label}</span>
        <p className="text-white text-[15px] font-[600]">{value}</p>
      </div>
    </div>
  );
}

/* ── Icon list item ── */
function IconListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg">
      <span className="mt-0.5 flex-shrink-0">{icon}</span>
      <p className="text-[#1B2430] text-[15px] leading-[1.6]">{text}</p>
    </div>
  );
}

/* ── Enroll step ── */
function EnrollStep({ num, text }: { num: number; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="w-7 h-7 rounded-full bg-[#0A8F8A] text-white text-[13px] font-[700] flex items-center justify-center flex-shrink-0 mt-0.5">
        {num}
      </span>
      <span className="text-[#1B2430] text-[15px] leading-[1.6]">{text}</span>
    </li>
  );
}

/* ── Download tile ── */
function DownloadTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="bg-white border border-[#E3E8EF] rounded-lg p-5 flex flex-col"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center mb-4">
        <FileText size={20} className="text-[#0A8F8A]" />
      </div>
      <h4 className="text-[#1B2430] text-[15px] font-[700] mb-2">{title}</h4>
      <p className="text-[#1B2430]/60 text-[13px] leading-[1.5] mb-5 flex-1">{desc}</p>
      <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-[#0A8F8A] border border-[#0A8F8A] rounded hover:bg-[#0A8F8A]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]">
        <Download size={14} /> Download
      </button>
    </div>
  );
}

/* ── Accordion item ── */
function AccordionItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-[#E3E8EF] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A8F8A]"
        aria-expanded={open}
      >
        <span className="text-[#1B2430] text-[15px] font-[600] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#0A8F8A] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-[#E3E8EF]">
          <p className="text-[#1B2430]/70 text-[14px] leading-[1.7] pt-4">{children}</p>
        </div>
      )}
    </div>
  );
}

/* ── Finance card ── */
function FinanceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="border border-[#E3E8EF] rounded-lg p-6">
      <span className="mb-4 block">{icon}</span>
      <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">{title}</h3>
      <p className="text-[#1B2430]/60 text-[14px] leading-[1.6]">{desc}</p>
    </div>
  );
}

/* ── Pharmacist card ── */
function PharmCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
      <span className="mb-4 block">{icon}</span>
      <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">{title}</h3>
      <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-6 flex-1">{desc}</p>
      <Btn variant="secondary">Request Resources</Btn>
    </div>
  );
}

/* ── Bullet item ── */
function BulletItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="text-[#0A8F8A] mt-0.5 flex-shrink-0">{icon}</span>
      <span className="text-[#1B2430] text-[15px] leading-[1.6]">{text}</span>
    </li>
  );
}

/* ── Divider ── */
function Divider() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="border-t border-[#E3E8EF]" />
    </div>
  );
}