import heroImage from "@/imports/ICL_LetTheDataLeadYou.jpg";
import { useNavigate } from "react-router";
import { IndicationChips } from "./IndicationChips";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Background image */}
      <div className="absolute inset-0">
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
          background: "linear-gradient(to bottom, rgba(11,26,51,0.7) 0%, rgba(11,26,51,0.85) 60%, #0B1A33 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, #0B1A33 0%, #0B1A33 35%, rgba(11,26,51,0.85) 50%, rgba(11,26,51,0.4) 70%, transparent 90%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 px-8 sm:px-20 xl:px-32 py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-start pt-28 sm:pt-32 lg:pt-44">
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
            <span className="block text-[38px] sm:text-[52px] lg:text-[68px]  tracking-wide">LET THE DATA</span>
            <span className="block text-[38px] sm:text-[52px] lg:text-[68px] tracking-wide">LEAD YOU</span>
          </h1>

          {/* Chips - stacked on mobile, inline on larger */}
          <div className="mb-6">
            <div className="hidden sm:block">
              <IndicationChips stacked={false} />
            </div>
            <div className="sm:hidden">
              <IndicationChips stacked={true} />
            </div>
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