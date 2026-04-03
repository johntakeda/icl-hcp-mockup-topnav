import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import {
  useAnimatedNumber,
  ScrollReveal,
  StaggerGroup,
  EASE_OUT_EXPO,
} from "@/app/hooks/useAnimations";
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
  Pill,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Stethoscope,
  HandCoins,
  Landmark,
  PackageCheck,
  TrendingUp,
  Timer,
  DollarSign,
  BookOpen,
  FolderOpen,
} from "lucide-react";

/* ─── Anchor sections ─── */
const SECTIONS = [
  { id: "start-here", label: "Start Here" },
  { id: "here2assist", label: "Here2Assist®" },
  { id: "financial", label: "Financial Support" },
  { id: "coverage", label: "Coverage" },
  { id: "foundation-care", label: "Order" },
  { id: "pharmacist", label: "Pharmacists" },
  { id: "formulary-kit", label: "Formulary Kit" },
  { id: "contact", label: "Contact" },
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
          style={{ objectPosition: "center top" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(11,58,92,0.92) 0%, rgba(10,47,74,0.85) 50%, rgba(10,47,74,0.7) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pt-52 md:pt-60 lg:pt-72 pb-32 md:pb-40 lg:pb-48">
       
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
            className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[1.1] mb-5 max-w-[720px]"
          >
            Access &amp; Patient Support
          </motion.h1>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Btn variant="primary" onClick={() => scrollTo("start-here")}>Start Here</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("here2assist")}>Here2Assist®</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("foundation-care")}>Ordering</Btn>
          </motion.div>

          {/* Utility links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.45 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            <UtilLink>Prescribing Information</UtilLink>
            <UtilLink onClick={() => scrollTo("here2assist")}>Download Enrollment Form</UtilLink>
            <UtilLink onClick={() => scrollTo("contact")}>Contact Support</UtilLink>
          </motion.div>
        </div>
      </section>

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="h-0 w-full" aria-hidden="true" />

      {/* ─── 2 STICKY ANCHOR NAV ─── */}
      <div
        ref={navRef}
        className="sticky z-30 transition-all duration-300"
        style={{
          top: navStuck ? "52px" : "0px",
          backgroundColor: navStuck ? "#E5E7EB" : "#ffffff",
          borderBottom: navStuck ? "1px solid #D1D5DB" : "1px solid #E3E8EF",
          boxShadow: navStuck ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="relative max-w-[1200px] mx-auto">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onScroll={checkOverflow}
          >
            <nav className="flex items-end min-w-max px-6 md:px-10 lg:px-12 pt-1" aria-label="Page sections">
              {SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="whitespace-nowrap px-4 py-1.5 text-[13px] md:text-[14px] font-[600] rounded-t-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]"
                  style={
                    activeSection === id
                      ? {
                          color: navStuck ? "#ffffff" : "#ffffff",
                          backgroundColor: "#0B1A33",
                        }
                      : {
                          color: navStuck ? "#4B5563" : "rgba(27,36,48,0.6)",
                          backgroundColor: "transparent",
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
                  ? "linear-gradient(to right, transparent, #E5E7EB 70%)"
                  : "linear-gradient(to right, transparent, white 70%)",
              }}
            />
            <button
              onClick={scrollNavRight}
              className="absolute right-2 flex items-center gap-1 rounded-full pl-2.5 pr-1.5 py-1 cursor-pointer transition-colors"
              style={{
                backgroundColor: navStuck ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.9)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                animation: "nudge-right 1.5s ease-in-out infinite",
              }}
              aria-label="Scroll to see more menu items"
            >
              <span
                className="text-[10px] font-[500] whitespace-nowrap"
                style={{ color: navStuck ? "#4B5563" : "rgba(27,36,48,0.5)" }}
              >
                More
              </span>
              <ChevronRight size={14} className={navStuck ? "text-[#4B5563]" : "text-[#0A8F8A]"} />
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
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel>Getting Started</SectionLabel>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Start therapy fast: 3 steps for offices
            </h2>
            <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
              Follow these steps to help your patients begin ICLUSIG as quickly as possible.
            </p>
          </ScrollReveal>

          <div className="flex flex-col min-[1345px]:flex-row gap-10">
            {/* Stepper */}
            <StaggerGroup className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                num={1}
                icon={<ClipboardList size={28} />}
                title="Enroll in Here2Assist®"
                desc="Complete the enrollment form with your patient and fax it to Here2Assist."
                cta="Download Form"
                onCtaClick={() => scrollTo("here2assist")}
              />
              {/* CHANGE C: Updated Card 2 CTA and secondary text */}
              <StepCard
                num={2}
                icon={<ShieldCheck size={28} />}
                title="Use coverage, PA and appeals tools"
                desc="For PA/coverage questions, Field Reimbursement Directors (FRDs) can help offices navigate next steps."
                cta="Get access support"
                onCtaClick={() => {/* Opens Request form preselected to FRD */}}
              />
              <StepCard
                num={3}
                icon={<Truck size={28} />}
                title="Order / dispense correctly"
                desc="Send prescriptions to AcariaHealth or use Foundation Care / ICLUSIGDirect."
                cta="Ordering Info"
                onCtaClick={() => scrollTo("foundation-care")}
              />
            </StaggerGroup>

            {/* Need help card */}
            <div className="min-[1345px]:w-[280px] flex-shrink-0">
              <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6">
                <h3 className="text-[#0B3A5C] text-[16px] font-[700] mb-4">Need help?</h3>
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
      {/* CHANGE D: Enrollment moved to top, added FRD CTA and branding copy */}
      <section id="here2assist" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel>Program Overview</SectionLabel>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Takeda Oncology Here2Assist®
            </h2>
          </ScrollReveal>

          <p className="text-[#0A8F8A] text-[15px] font-[500] mb-10 max-w-[700px]">
            Here2Assist provides coverage support and financial support services; for access/reimbursement questions, connect with a Field Reimbursement Director (FRD).
          </p>

          {/* CHANGE D1: Enrollment steps moved to TOP */}
          <div className="bg-[#F5F7FA] border-2 border-[#0A8F8A]/30 rounded-lg p-6 md:p-8 mb-10">
            <h3 className="text-[#0B3A5C] text-[22px] font-[700] mb-5">Enrollment is simple</h3>
            <ol className="space-y-4 mb-6">
              <EnrollStep num={1} text="Download and print the Enrollment Form" />
              <EnrollStep num={2} text="Complete and sign with your patient" />
              <EnrollStep num={3} text="Fax form + insurance card + prescription to: 1-844-269-3038" />
            </ol>
            <div className="flex flex-wrap gap-3">
              <Btn variant="primary" icon={<Download size={16} />}>Download Enrollment Form</Btn>
              <Btn variant="secondary" onClick={() => {/* Opens Request form preselected to FRD */}}>Get access support</Btn>
            </div>
          </div>

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

          <div className="flex flex-wrap gap-3">
            <Btn variant="secondary" icon={<Copy size={16} />}>Copy fax number: 1-844-269-3038</Btn>
            <Btn variant="secondary" icon={<Phone size={16} />}>Call Here2Assist®</Btn>
          </div>
        </div>
      </section>

      {/* ─── 5 FINANCIAL SUPPORT (MOVED UP per Change E) ─── */}
      <section id="financial" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel>Here2Assist</SectionLabel>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Financial support pathways
            </h2>
            <p className="text-[#1B2430]/70 text-[16px] mb-6 max-w-[600px]">
              For eligible patients — multiple programs may help reduce out-of-pocket costs.
            </p>
          </ScrollReveal>

          {/* CHANGE F3: Affordability metric placeholder callout */}
          <ScrollReveal direction="none" duration={0.6}>
            <div className="bg-[#E8F5F4] border border-[#0A8F8A]/20 rounded-lg px-5 py-3 mb-10 flex items-center gap-3">
              <DollarSign size={18} className="text-[#0A8F8A] flex-shrink-0" />
              <div>
                <p className="text-[#1B2430] text-[15px] font-[600]">
                  ~90% of ICLUSIG patients pay $0-$1 out of pocket.*
                </p>
                <p className="text-[#1B2430]/50 text-[12px]">*Data on file; 2025.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* CHANGE F1/F2: Updated tiles */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Tile 1: Copay support — primary */}
            <FinanceCard
              icon={<HandCoins size={28} className="text-[#0A8F8A]" />}
              title="Copay support"
              desc="The Takeda Oncology Co-Pay Assistance Program may help eligible commercially insured patients pay as little as $0."
            />
            {/* Tile 2: Patient assistance — reduced prominence */}
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
              <span className="mb-4 block"><HeartHandshake size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Patient assistance</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-2 flex-1">
                Uninsured or underinsured patients may qualify for free medication through Takeda's patient assistance program.
              </p>

            </div>
            {/* Tile 3: Additional support options (replaces Independent foundations) */}
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
              <span className="mb-4 block"><Landmark size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Additional support options</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-5 flex-1">
                For guidance on available support pathways, contact a Field Reimbursement Director (FRD).
              </p>
              <Btn variant="primary" onClick={() => {/* Opens Request form preselected to FRD */}}>Get access support</Btn>
            </div>
          </StaggerGroup>

          <div className="flex flex-wrap gap-3">
            <Btn variant="primary" onClick={() => scrollTo("here2assist")}>Start Here2Assist Enrollment</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("contact")}>Speak With a Support Specialist</Btn>
          </div>
        </div>
      </section>

      {/* ─── 6 COVERAGE, PA & APPEALS (was section 5, now after Financial) ─── */}
      <section id="coverage" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel>Coverage Tools</SectionLabel>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Coverage, PA and appeals support
            </h2>
          </ScrollReveal>

          {/* CHANGE G2: Coverage confidence snapshot */}
          <div className="mb-12">
          
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
              <StatCard
                icon={<TrendingUp size={22} className="text-[#0A8F8A]" />}
                label="Approval Rate"
                numericValue={95}
                prefix=">"
                suffix="%"
                desc="of claims for ICLUSIG patients are covered by payers."
              />
              <StatCard
                icon={<Timer size={22} className="text-[#0A8F8A]" />}
                label="Speed to Therapy"
                numericValue={7}
                suffix=" days"
                desc="Over half of ICLUSIG new patients receive ICLUSIG in 7 days after Rx (industry average for specialty oral is 8-10 days)."
              />
              <StatCard
                icon={<DollarSign size={22} className="text-[#0A8F8A]" />}
                label="Out of Pocket Cost"
                numericValue={90}
                prefix="~"
                suffix="%"
                desc="of ICLUSIG patients pay $0-$1 out of pocket."
              />
            </StaggerGroup>
            <p className="text-[#1B2430]/50 text-[12px]">*Data on file; 2025.</p>
          </div>

          {/* Coverage resource cards — teal inverted */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* PA submission checklist */}
            <div className="bg-[#0A8F8A] rounded-lg p-5 flex flex-col h-full">
              <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center mb-4">
                <FileText size={20} className="text-white" />
              </div>
              <div className="flex-1 mb-4">
                <h4 className="text-white text-[15px] font-[700] mb-2">PA submission checklist</h4>
                <p className="text-white/80 text-[13px] leading-[1.5]">Use when submitting a prior authorization request</p>
              </div>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-white border border-white/40 rounded hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-auto">
                <Download size={14} /> Download
              </button>
            </div>
            {/* LMN template */}
            <div className="bg-[#0A8F8A] rounded-lg p-5 flex flex-col h-full">
              <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center mb-4">
                <FileText size={20} className="text-white" />
              </div>
              <div className="flex-1 mb-4">
                <h4 className="text-white text-[15px] font-[700] mb-2">Letter of medical necessity template</h4>
                <p className="text-white/80 text-[13px] leading-[1.5] mb-1">Use to support prior authorization and appeals</p>
                <p className="text-white/60 text-[12px]">Brand-agnostic tool hosted on Here2Assist.</p>
              </div>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-white border border-white/40 rounded hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-auto">
                <ExternalLink size={14} /> View on Here2Assist
              </button>
            </div>
            {/* Appeal letter template */}
            <div className="bg-[#0A8F8A] rounded-lg p-5 flex flex-col h-full">
              <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center mb-4">
                <FileText size={20} className="text-white" />
              </div>
              <div className="flex-1 mb-4">
                <h4 className="text-white text-[15px] font-[700] mb-2">Appeal letter template</h4>
                <p className="text-white/80 text-[13px] leading-[1.5] mb-1">Use to draft a formal appeal of a coverage denial</p>
                <p className="text-white/60 text-[12px]">Brand-agnostic tool hosted on Here2Assist.</p>
              </div>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-white border border-white/40 rounded hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-auto">
                <ExternalLink size={14} /> View on Here2Assist
              </button>
            </div>
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 7 FOUNDATION CARE & ORDERING ─── */}
      {/* CHANGE H4: Unified background color */}
      <section id="foundation-care" className="scroll-mt-14" style={{ background: "linear-gradient(135deg, #0B3A5C 0%, #0A2F4A 100%)" }}>
        {/* Navy callout band */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-14">
          <ScrollReveal>
            <SectionLabel light>Ordering &amp; Dispensing</SectionLabel>
            <h2 className="text-white text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-10">
              How to order ICLUSIG
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* AcariaHealth */}
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <div className="bg-white/10 px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  AcariaHealth
                </h3>
                <p className="text-white/70 text-[13px]">Integrated Specialty Pharmacy</p>
              </div>
              <div className="p-6">
                <p className="text-white font-[600] text-[15px] mb-4">ICLUSIG is available through an exclusive, integrated specialty pharmacy:</p>
                <ContactLineWhite icon={<Phone size={16} />} label="Phone" value="833-442-8911" />
                <p className="text-white/70 text-[13px] mt-1">www.acariahealth.com</p>
                <div className="mt-5 space-y-3">
                  <h4 className="text-white text-[15px] font-[600]">There are 2 ways to order ICLUSIG via the AcariaHealth Specialty Pharmacy:</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-white text-[15px]">Submit the ICLUSIG prescription to any AcariaHealth in your e-prescribing system</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-white text-[15px]">Complete the ICLUSIG Referral Form provided by AcariaHealth at <a href="https://www.acariahealth.com/referral_forms.html" target="_blank" rel="noopener noreferrer" className="text-[#0A8F8A] underline underline-offset-2 hover:text-[#0cc5be]">acariahealth.com/referral_forms</a> and fax to AcariaHealth as directed on the form</span>
                  </div>
                </div>
                <p className="text-white/70 text-[14px] mt-5 leading-[1.6]">
                  ICLUSIG can be filled through AcariaHealth. If your institution does not have medically integrated dispensing capabilities or chooses not to fill a ICLUSIG prescription through your medically integrated pharmacy, ICLUSIG may be ordered and filled through AcariaHealth. Sending an ICLUSIG prescription to a pharmacy that is either not your institution's medically integrated pharmacy or an alternate pharmacy may result in delay or nonfulfillment of the prescription.
                </p>
              </div>
            </div>

            {/* Foundation Care */}
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <div className="bg-white/10 px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  Foundation Care
                </h3>
                <p className="text-white/70 text-[13px]">An AcariaHealth Solution — ICLUSIGDirect Purchase Program</p>
              </div>
              <div className="p-6">
                <p className="text-white font-[600] text-[15px] mb-4">ICLUSIG may be purchased directly from our distribution partner:</p>
                <ContactLineWhite icon={<Phone size={16} />} label="Phone" value="833-291-2773" />
                <p className="text-white/70 text-[13px] mt-1">www.ICLUSIGDirect.com</p>
                <p className="text-white font-[600] text-[14px] mt-5 mb-5 leading-[1.6]">
                  ICLUSIG may be purchased directly from our distribution partner and dispensed through accounts that have a medically integrated pharmacy.
                </p>
                <p className="text-white font-[600] text-[14px] mb-6 leading-[1.6]">
                  If you need to set up an ICLUSIG Direct account, please use the below link to the application. Please contact Foundation Care directly at 833.291.2773 to place orders for ICLUSIG.
                </p>
                <a href="https://iclusigdirect.com/files/ICLUSIGdirect-CustomerApp_20240606v2Form.pdf" target="_blank" rel="noopener noreferrer">
                  <Btn variant="primary" icon={<ExternalLink size={14} />}>ICLUSIGDirect Application</Btn>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Btn variant="secondary-light" onClick={() => {/* Opens Request form preselected to FRD */}}>Contact a Field Reimbursement Director</Btn>
          </div>
        </div>
      </section>

      {/* ─── 8 TRANSITION OF CARE (HIDDEN) ─── */}

      {/* ─── 9 PHARMACISTS ─── */}
      {/* CHANGE J3: Title updated from "For pharmacists and pharmacy decision-makers (PHDMs)" */}
      <section id="pharmacist" className="bg-white scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel>Pharmacy Resources</SectionLabel>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Pharmacists
            </h2>
            {/* CHANGE J2: Purpose copy */}
            <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
              Resources to support dosing adjustments, access workflows, and procurement.
            </p>
          </ScrollReveal>

          {/* CHANGE J1: Updated cards with explicit resource links */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
              <span className="mb-4 block"><FolderOpen size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-3">Formulary kit</h3>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Summary sheet</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Billing/coding guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Product monograph</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Access Guide</span>
                </li>
              </ul>
              <Btn variant="secondary" onClick={() => scrollTo("formulary-kit")}>View Formulary Kit</Btn>
            </div>
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
              <span className="mb-4 block"><BookOpen size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-3">Dosing & adverse event resources</h3>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Dosing guides (CML + Ph+ ALL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#0A8F8A] mt-1 flex-shrink-0" />
                  <span className="text-[#1B2430]/70 text-[14px]">Adverse event management / dose adjustment resources</span>
                </li>
              </ul>
              <Btn variant="secondary">View Dosing Resources</Btn>
            </div>
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
              <span className="mb-4 block"><Stethoscope size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Request support</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-6 flex-1">Connect with a Takeda Oncology representative for personalized assistance with your pharmacy needs.</p>
              <Btn variant="secondary">Request Resources</Btn>
            </div>
          </StaggerGroup>
        </div>
      </section>

      {/* ─── FORMULARY KIT ─── */}
      <section id="formulary-kit" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
              Formulary Kit
            </h2>
            <p className="text-[#1B2430]/70 text-[16px] mb-2 max-w-[600px]">
              Download the resources below to support formulary decisions and ordering.
            </p>
            <a href="#" className="text-[#0A8F8A] text-[15px] font-[600] underline underline-offset-2 hover:text-[#088580] transition-colors mb-10 inline-block">
              Download all resources listed here
            </a>
          </ScrollReveal>

          <div className="flex flex-col gap-4 max-w-[600px]">
            <a href="#" className="flex items-center gap-4 bg-white border border-[#E3E8EF] rounded-lg p-5 hover:border-[#0A8F8A]/40 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-[#0A8F8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#1B2430] text-[15px] font-[700] group-hover:text-[#0A8F8A] transition-colors">Summary Sheet</h4>
                <p className="text-[#1B2430]/50 text-[13px]">PDF Download</p>
              </div>
              <ArrowRight size={16} className="text-[#0A8F8A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="flex items-center gap-4 bg-white border border-[#E3E8EF] rounded-lg p-5 hover:border-[#0A8F8A]/40 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-[#0A8F8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#1B2430] text-[15px] font-[700] group-hover:text-[#0A8F8A] transition-colors">Billing and Coding Guide</h4>
                <p className="text-[#1B2430]/50 text-[13px]">PDF Download</p>
              </div>
              <ArrowRight size={16} className="text-[#0A8F8A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="flex items-center gap-4 bg-white border border-[#E3E8EF] rounded-lg p-5 hover:border-[#0A8F8A]/40 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-[#0A8F8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#1B2430] text-[15px] font-[700] group-hover:text-[#0A8F8A] transition-colors">Product Monograph</h4>
                <p className="text-[#1B2430]/50 text-[13px]">PDF Download</p>
              </div>
              <ArrowRight size={16} className="text-[#0A8F8A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="flex items-center gap-4 bg-white border border-[#E3E8EF] rounded-lg p-5 hover:border-[#0A8F8A]/40 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-[#0A8F8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#1B2430] text-[15px] font-[700] group-hover:text-[#0A8F8A] transition-colors">Access Guide</h4>
                <p className="text-[#1B2430]/50 text-[13px]">PDF Download</p>
              </div>
              <ArrowRight size={16} className="text-[#0A8F8A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 10 CONTACT & DOWNLOADS ─── */}
      <section
        id="contact"
        className="scroll-mt-14"
        style={{ background: "linear-gradient(135deg, #0A2F4A 0%, #0B3A5C 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
          <ScrollReveal>
            <SectionLabel light>Get in Touch</SectionLabel>
            <h2 className="text-white text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-8">
              Contact support
            </h2>
          </ScrollReveal>

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
    <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
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
    <div className="flex items-start gap-4 p-4 bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg h-full">
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

/* ── Stat card (for Coverage confidence) ── */
function StatCard({
  icon,
  label,
  desc,
  numericValue,
  prefix = "",
  suffix = "",
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, display } = useAnimatedNumber({
    target: numericValue,
    prefix,
    suffix,
  });

  return (
    <div
      className="bg-white border border-[#E3E8EF] rounded-lg p-5 flex flex-col"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-[#1B2430]/50 text-[12px] font-[600] uppercase tracking-wide">{label}</span>
      </div>
      <p ref={ref} className="text-[#0B3A5C] text-[24px] font-[800] mb-1">{display}</p>
      <p className="text-[#1B2430]/60 text-[13px] leading-[1.5] flex-1">{desc}</p>
    </div>
  );
}

/* ── Finance card ── */
function FinanceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: React.ReactNode }) {
  return (
    <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col h-full">
      <span className="mb-4 block">{icon}</span>
      <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">{title}</h3>
      <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] flex-1">{desc}</p>
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
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
      <div className="border-t border-[#E3E8EF]" />
    </div>
  );
}
