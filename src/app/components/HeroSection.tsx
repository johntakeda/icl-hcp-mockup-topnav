import heroImage from "@/imports/ICL_LetTheDataLeadYou.jpg";
import { useNavigate } from "react-router";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Background image */}
      <div className="absolute inset-">
        <img
          src={heroImage}
          alt="Couple enjoying life"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
      </div>

      {/* Gradient overlay — full cover on mobile, left-side fade on desktop */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(11,26,51,0.3) 0%, rgba(11,26,51,0.5) 60%, rgba(11,26,51,0.7) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, #0B1A33 0%, #0B1A33 30%, rgba(11,26,51,0.6) 45%, rgba(11,26,51,0.2) 60%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-start pt-12 sm:pt-16 lg:pt-40">
        <div className="max-w-[600px]">
          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            <span className="block text-[38px] sm:text-[52px] lg:text-[68px]  tracking-wide">Let The Data</span>
            <span className="block text-[38px] sm:text-[52px] lg:text-[68px] tracking-wide">Lead You</span>
          </h1>

          {/* Efficacy buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => navigate("/efficacy/cml-optic-trial")}
              className="px-6 py-3 rounded-lg text-white font-[700] text-[16px] sm:text-[18px] transition-colors"
              style={{ background: "#237EBF" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1b6fa8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#237EBF"; }}
            >
              View CML Efficacy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block ml-2"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={() => navigate("/ph-all/first-line")}
              className="px-6 py-3 rounded-lg text-white font-[700] text-[16px] sm:text-[18px] transition-colors"
              style={{ background: "#2E8762" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#257350"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2E8762"; }}
            >
              View Ph+ ALL Efficacy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block ml-2"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          {/* Footnotes */}
          <div className="text-white/80 space-y-2">
            <p className="text-[13px] sm:text-[14px]">
              *For Adult Patients with Resistant/Intolerant CP-CML
            </p>
            <p className="text-[13px] sm:text-[14px]">
              <sup>&dagger;</sup>The only FDA-approved TKI for adults with newly
              <br className="hidden sm:block" /> diagnosed Ph+ ALL, in combination with chemotherapy
            </p>
          </div>

          {/* Mobile-only CTA */}
          <div className="sm:hidden mt-6">
            <button
              onClick={() => navigate("/get-started")}
              className="h-12 rounded-full bg-[#D4A800] text-[#0F1E38] text-[15px] font-[700] hover:bg-[#E0B800] transition-colors px-6"
            >
              Get Started with ICLUSIG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}