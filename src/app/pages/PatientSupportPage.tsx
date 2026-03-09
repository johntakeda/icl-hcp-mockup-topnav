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
  BarChart3,
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
  { id: "coverage", label: "Coverage, PA & Appeals" },
  { id: "foundation-care", label: "Ordering" },
  { id: "transition", label: "Transition of Care" },
  { id: "pharmacist", label: "Pharmacists" },
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
        <div className="relative z-10 px-6 md:px-16 xl:px-20 py-20 md:py-28 lg:pt-48 lg:pb-32">
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

      {/* ─── 2 FLOATING PILL SUB-NAV ─── */}
      <div
        ref={navRef}
        className="sticky top-14 lg:top-[88px] z-30 flex justify-end px-4 md:px-16 xl:px-20 py-3 pointer-events-none"
      >
        <div
          className="pointer-events-auto relative"
          style={{
            maxWidth: "calc(100vw - 32px)",
          }}
        >
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-0.5 px-2 py-1.5 overflow-x-auto scrollbar-hide transition-all duration-300"
            onScroll={checkOverflow}
            style={{
              background: navStuck
                ? "rgba(14, 30, 56, 0.92)"
                : "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: navStuck
                ? "1px solid rgba(255, 255, 255, 0.12)"
                : "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "16px",
              boxShadow: navStuck
                ? "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)"
                : "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <nav className="flex items-center gap-0.5 min-w-max" aria-label="Page sections">
              {SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`whitespace-nowrap px-3 xl:px-4 py-2 rounded-xl text-[13px] xl:text-[14px] font-[500] transition-all ${
                    activeSection === id
                      ? navStuck
                        ? "bg-white/[0.15]"
                        : "bg-black/[0.06]"
                      : navStuck
                        ? "hover:bg-white/[0.08]"
                        : "hover:bg-black/[0.03]"
                  }`}
                  style={{
                    color: navStuck
                      ? activeSection === id
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.55)"
                      : activeSection === id
                        ? "#0F1E38"
                        : "#6B7280",
                  }}
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
              className="h-full w-12 rounded-r-2xl"
              style={{
                background: navStuck
                  ? "linear-gradient(to right, transparent, rgba(14,30,56,0.95) 70%)"
                  : "linear-gradient(to right, transparent, rgba(255,255,255,0.9) 70%)",
              }}
            />
            <button
              onClick={scrollNavRight}
              className="absolute right-1 flex items-center gap-1 rounded-full pl-2 pr-1.5 py-1 cursor-pointer transition-colors"
              style={{
                backgroundColor: navStuck ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.05)",
                animation: "nudge-right 1.5s ease-in-out infinite",
              }}
              aria-label="Scroll to see more menu items"
            >
              <span
                className="text-[10px] font-[500] whitespace-nowrap"
                style={{ color: navStuck ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)" }}
              >
                More
              </span>
              <ChevronRight size={14} style={{ color: navStuck ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)" }} />
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
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
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
              {/* CHANGE C: Updated Card 2 CTA and secondary text */}
              <StepCard
                num={2}
                icon={<ShieldCheck size={28} />}
                title="Use coverage, PA and appeals tools"
                desc="For PA/coverage questions, FRDs can help offices navigate next steps."
                cta="Get access support now"
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
      {/* CHANGE D: Enrollment moved to top, added FRD CTA and branding copy */}
      <section id="here2assist" className="bg-white scroll-mt-14">
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
          <SectionLabel>Program Overview</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Takeda Oncology Here2Assist®
          </h2>

          <p className="text-[#0A8F8A] text-[15px] font-[500] mb-10 max-w-[700px]">
            Here2Assist provides coverage support and financial support services; for access/reimbursement questions, connect with an FRD.
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
              <Btn variant="secondary" onClick={() => {/* Opens Request form preselected to FRD */}}>Get access support now</Btn>
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
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
          <SectionLabel>Financial Assistance</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Financial support pathways
          </h2>
          <p className="text-[#1B2430]/70 text-[16px] mb-6 max-w-[600px]">
            For eligible patients — multiple programs may help reduce out-of-pocket costs.
          </p>

          {/* CHANGE F3: Affordability metric placeholder callout */}
          <div className="bg-[#E8F5F4] border border-[#0A8F8A]/20 rounded-lg px-5 py-3 mb-10 flex items-center gap-3">
            <DollarSign size={18} className="text-[#0A8F8A] flex-shrink-0" />
            <div>
              <p className="text-[#1B2430] text-[15px] font-[600]">
                Over [XX%] of patients pay [$x-$x] out of pocket. <span className="text-[#1B2430]/50 text-[13px] font-[400]">[PLACEHOLDER—pending PVA analytics + approval]</span>
              </p>
              <p className="text-[#1B2430]/40 text-[11px]">Placeholder data and text to be changed</p>
            </div>
          </div>

          {/* CHANGE F1/F2: Updated tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Tile 1: Copay support — primary */}
            <FinanceCard
              icon={<HandCoins size={28} className="text-[#0A8F8A]" />}
              title="Copay support"
              desc={<>Eligible commercially insured patients may pay as little as $0. <span className="text-[#1B2430]/40 text-[12px]">[PLACEHOLDER—final approved language required]</span></>}
            />
            {/* Tile 2: Patient assistance — reduced prominence */}
            <div className="border border-[#E3E8EF] rounded-lg p-6">
              <span className="mb-4 block"><HeartHandshake size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Patient assistance</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-2">
                Uninsured or underinsured patients may qualify for free medication through Takeda's patient assistance program.
              </p>
              <p className="text-[#1B2430]/40 text-[12px] italic">
                [PAP prominence to be aligned with hub strategy; keep high-level only]
              </p>
            </div>
            {/* Tile 3: Additional support options (replaces Independent foundations) */}
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
              <span className="mb-4 block"><Landmark size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Additional support options</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-5 flex-1">
                For guidance on available support pathways, contact an FRD.
              </p>
              <Btn variant="primary" onClick={() => {/* Opens Request form preselected to FRD */}}>Get access support now</Btn>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Btn variant="primary" onClick={() => scrollTo("here2assist")}>Start Here2Assist Enrollment</Btn>
            <Btn variant="secondary" onClick={() => scrollTo("contact")}>Speak With a Support Specialist</Btn>
          </div>
        </div>
      </section>

      {/* ─── 6 COVERAGE, PA & APPEALS (was section 5, now after Financial) ─── */}
      <section id="coverage" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
          <SectionLabel>Coverage Tools</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Coverage, PA and appeals support
          </h2>

          {/* CHANGE G2: Coverage confidence snapshot */}
          <div className="mb-12">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
              <StatCard
                icon={<TrendingUp size={22} className="text-[#0A8F8A]" />}
                label="Coverage success"
                value="~[8 out of 10 / XX%]"
                desc="ICLUSIG commercial new starts are ultimately covered."
              />
              <StatCard
                icon={<BarChart3 size={22} className="text-[#0A8F8A]" />}
                label="PA approval"
                value="[XX%]"
                desc="New patient PA approval rate."
              />
              <StatCard
                icon={<Timer size={22} className="text-[#0A8F8A]" />}
                label="Speed to therapy"
                value="[XX days]"
                desc="Time to first fill (target ≤ 10 days)."
              />
              <StatCard
                icon={<DollarSign size={22} className="text-[#0A8F8A]" />}
                label="Affordability"
                value="[XX%]"
                desc="Pay $0–$1 out of pocket."
              />
            </div>
            <p className="text-[#1B2430]/40 text-[12px] italic">Final metrics pending validation and approval.</p>
          </div>

          <p className="text-[#0A8F8A] text-[18px] font-[600] mb-8">Appeals support tools</p>

          {/* CHANGE G1/G3: Updated download tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-[1345px]:grid-cols-3 gap-5 mb-12">
            {/* PA submission checklist with disclaimer */}
            <div
              className="bg-white border border-[#E3E8EF] rounded-lg p-5 flex flex-col"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center mb-4">
                <FileText size={20} className="text-[#0A8F8A]" />
              </div>
              <h4 className="text-[#1B2430] text-[15px] font-[700] mb-2">PA submission checklist</h4>
              <p className="text-[#1B2430]/60 text-[13px] leading-[1.5] mb-2 flex-1">Use when submitting a prior authorization request</p>
              <p className="text-amber-600 text-[12px] font-[500] mb-4 italic">Placeholder, may remove</p>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-[#0A8F8A] border border-[#0A8F8A] rounded hover:bg-[#0A8F8A]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]">
                <Download size={14} /> Download
              </button>
            </div>
            {/* LMN template — brand-agnostic label */}
            <div
              className="bg-white border border-[#E3E8EF] rounded-lg p-5 flex flex-col"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center mb-4">
                <FileText size={20} className="text-[#0A8F8A]" />
              </div>
              <h4 className="text-[#1B2430] text-[15px] font-[700] mb-2">Letter of medical necessity template</h4>
              <p className="text-[#1B2430]/60 text-[13px] leading-[1.5] mb-1 flex-1">Use to support prior authorization and appeals</p>
              <p className="text-[#1B2430]/40 text-[12px] mb-4">Brand-agnostic tool hosted on Here2Assist.</p>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-[#0A8F8A] border border-[#0A8F8A] rounded hover:bg-[#0A8F8A]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]">
                <ExternalLink size={14} /> View on Here2Assist
              </button>
            </div>
            {/* Appeal letter template — brand-agnostic label */}
            <div
              className="bg-white border border-[#E3E8EF] rounded-lg p-5 flex flex-col"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded bg-[#0A8F8A]/10 flex items-center justify-center mb-4">
                <FileText size={20} className="text-[#0A8F8A]" />
              </div>
              <h4 className="text-[#1B2430] text-[15px] font-[700] mb-2">Appeal letter template</h4>
              <p className="text-[#1B2430]/60 text-[13px] leading-[1.5] mb-1 flex-1">Use to draft a formal appeal of a coverage denial</p>
              <p className="text-[#1B2430]/40 text-[12px] mb-4">Brand-agnostic tool hosted on Here2Assist.</p>
              <button className="inline-flex items-center gap-2 min-h-[44px] px-4 text-[13px] font-[600] text-[#0A8F8A] border border-[#0A8F8A] rounded hover:bg-[#0A8F8A]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A8F8A]">
                <ExternalLink size={14} /> View on Here2Assist
              </button>
            </div>
          </div>

          {/* CHANGE G4: Replaced FAQ with single "Need help?" panel */}
          <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 md:p-8">
            <h3 className="text-[#0B3A5C] text-[20px] font-[700] mb-3">Need help with a PA, coverage, or an appeal?</h3>
            <p className="text-[#1B2430]/70 text-[15px] mb-6 max-w-[600px]">
              Connect with an FRD for access &amp; reimbursement support or Here2Assist for enrollment/support services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Btn variant="primary" onClick={() => {/* Dead link for now */}}>Get access support now</Btn>
              <Btn variant="secondary" onClick={() => scrollTo("here2assist")}>Enroll in Here2Assist</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7 FOUNDATION CARE & ORDERING ─── */}
      {/* CHANGE H4: Unified background color */}
      <section id="foundation-care" className="scroll-mt-14" style={{ background: "linear-gradient(135deg, #0B3A5C 0%, #0A2F4A 100%)" }}>
        {/* Navy callout band */}
        <div className="px-6 md:px-16 xl:px-20 py-10 md:py-14">
          <SectionLabel light>Ordering &amp; Dispensing</SectionLabel>
          <h2 className="text-white text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Foundation Care® and ordering ICLUSIG
          </h2>

         
          {/* CHANGE H3: Text paragraphs above cards */}
          <div className="space-y-4 mb-10">
            <p className="text-white/90 text-[15px] leading-[1.7]">
              ICLUSIG may be purchased directly from our distribution partner* and dispensed through accounts that have a medically integrated pharmacy.
            </p>
            <p className="text-white/90 text-[15px] leading-[1.7]">
              ICLUSIG can be filled through AcariaHealth. If your institution does not have medically integrated dispensing capabilities or chooses not to fill a ICLUSIG prescription through your medically integrated pharmacy, ICLUSIG may be ordered and filled through AcariaHealth. Sending an ICLUSIG prescription to a pharmacy that is either not your institution's medically integrated pharmacy or an alternate pharmacy may result in delay or nonfulfillment of the prescription.
            </p>
          </div>
        </div>

        {/* Two cards — CHANGE H4: same background */}
        <div className="px-6 md:px-16 xl:px-20 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* AcariaHealth */}
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <div className="bg-white/10 px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  AcariaHealth
                </h3>
                <p className="text-white/70 text-[13px]">Exclusive integrated specialty pharmacy</p>
              </div>
              <div className="p-6">
                <ContactLineWhite icon={<Phone size={16} />} label="Phone" value="833-442-8911" />
                <div className="mt-5 space-y-3">
                  <h4 className="text-white text-[15px] font-[600]">Two ways to order:</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-white text-[15px]">E-prescribe to AcariaHealth</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A8F8A] mt-0.5 flex-shrink-0" />
                    <span className="text-white text-[15px]">Use referral form + fax as directed</span>
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
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <div className="bg-[#0A8F8A] px-6 py-4">
                <h3 className="text-white text-[18px] font-[700]">
                  Foundation Care
                </h3>
                <p className="text-white/70 text-[13px]">ICLUSIGDirect Purchase Program</p>
              </div>
              <div className="p-6">
                <ContactLineWhite icon={<Phone size={16} />} label="Phone" value="833-291-2773" />
                <p className="text-white/70 text-[14px] mt-5 mb-6 max-w-[400px]">
                  Distribution partner resources for purchasing and access. Contact Foundation Care
                  for information about ICLUSIGDirect and institutional ordering.
                </p>
                <Btn variant="primary">Request Foundation Care / ICLUSIGDirect Information</Btn>
              </div>
            </div>
          </div>

          {/* CHANGE H3: FRD CTA button */}
          <div className="flex justify-center">
            <Btn variant="secondary-light" onClick={() => {/* Opens Request form preselected to FRD */}}>Contact an FRD</Btn>
          </div>
        </div>
      </section>

      {/* ─── 8 TRANSITION OF CARE ─── */}
      <section id="transition" className="bg-[#F5F7FA] scroll-mt-14">
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
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

            {/* CHANGE I1/I2: Replaced toolkit download with placeholder module */}
            <div className="lg:w-[320px] flex-shrink-0">
              <div className="bg-white border-2 border-dashed border-[#E3E8EF] rounded-lg p-6" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <AlertTriangle size={24} className="text-amber-500" />
                </div>
                <h3 className="text-[#1B2430] text-[18px] font-[700] mb-2">
                  Transition of care resources (in development)
                </h3>
                <p className="text-[#1B2430]/60 text-[14px] mb-3">
                  [PLACEHOLDER - exploring the minimum transition-of-care content that can be approved (USRC)]
                </p>
                <p className="text-[#1B2430]/40 text-[12px] italic">
                  Will consult with Dr. Jabbour on inputs and approval pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9 PHARMACISTS ─── */}
      {/* CHANGE J3: Title updated from "For pharmacists and pharmacy decision-makers (PHDMs)" */}
      <section id="pharmacist" className="bg-white scroll-mt-14">
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
          <SectionLabel>Pharmacy Resources</SectionLabel>
          <h2 className="text-[#1B2430] text-[26px] md:text-[32px] font-[700] leading-[1.2] mb-3">
            Pharmacists
          </h2>
          {/* CHANGE J2: Purpose copy */}
          <p className="text-[#1B2430]/70 text-[16px] mb-10 max-w-[600px]">
            Resources to support dosing adjustments, access workflows, and procurement.
          </p>

          {/* CHANGE J1: Updated cards with explicit resource links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
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
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
              <span className="mb-4 block"><FolderOpen size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-3">Formulary kit & ordering</h3>
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
              </ul>
              <Btn variant="secondary">View Formulary Kit</Btn>
            </div>
            <div className="border border-[#E3E8EF] rounded-lg p-6 flex flex-col">
              <span className="mb-4 block"><Stethoscope size={28} className="text-[#0A8F8A]" /></span>
              <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">Request support</h3>
              <p className="text-[#1B2430]/60 text-[14px] leading-[1.6] mb-6 flex-1">Connect with a Takeda Oncology representative for personalized assistance with your pharmacy needs.</p>
              <Btn variant="secondary">Request Resources</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10 CONTACT & DOWNLOADS ─── */}
      <section
        id="contact"
        className="scroll-mt-14"
        style={{ background: "linear-gradient(135deg, #0A2F4A 0%, #0B3A5C 100%)" }}
      >
        <div className="px-6 md:px-16 xl:px-20 py-16 md:py-20">
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

/* ── Stat card (for Coverage confidence) ── */
function StatCard({ icon, label, value, desc }: { icon: React.ReactNode; label: string; value: string; desc: string }) {
  return (
    <div className="bg-white border border-[#E3E8EF] rounded-lg p-5" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-[#1B2430]/50 text-[12px] font-[600] uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-[#0B3A5C] text-[24px] font-[800] mb-1">{value}</p>
      <p className="text-[#1B2430]/60 text-[13px] leading-[1.5]">{desc}</p>
    </div>
  );
}

/* ── Finance card ── */
function FinanceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: React.ReactNode }) {
  return (
    <div className="border border-[#E3E8EF] rounded-lg p-6">
      <span className="mb-4 block">{icon}</span>
      <h3 className="text-[#1B2430] text-[17px] font-[700] mb-2">{title}</h3>
      <p className="text-[#1B2430]/60 text-[14px] leading-[1.6]">{desc}</p>
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
    <div className="px-6 md:px-16 xl:px-20">
      <div className="border-t border-[#E3E8EF]" />
    </div>
  );
}
