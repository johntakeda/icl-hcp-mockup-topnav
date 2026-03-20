import { useState } from "react";
import { useNavigate } from "react-router";

interface IndicationChipsProps {
  stacked?: boolean;
}

export function IndicationChips({ stacked = false }: IndicationChipsProps) {
  const [hoveredChip, setHoveredChip] = useState<"cml" | "phall" | null>(null);
  const navigate = useNavigate();

  return (
    <div className={`flex ${stacked ? "flex-col gap-2.5" : "flex-row flex-wrap gap-0"} items-start`}>
      <div
        className="bg-[#237EBF] text-white font-[700] px-5 py-2.5 text-[22px] sm:text-[26px] lg:text-[30px] cursor-pointer transition-all duration-300 flex items-center gap-0"
        style={{
          borderRadius: stacked ? "12px" : "12px 0 0 12px",
          fontFamily: "Inter, system-ui, sans-serif",
          paddingRight: hoveredChip === "cml" ? "28px" : undefined,
        }}
        onMouseEnter={() => setHoveredChip("cml")}
        onMouseLeave={() => setHoveredChip(null)}
        onClick={() => navigate("/cml/unmet-needs")}
      >
        in CML<span className="text-[16px] align-super">*</span>
        <span
          className="inline-flex items-center transition-all duration-300 overflow-hidden"
          style={{
            width: hoveredChip === "cml" ? "20px" : "0px",
            opacity: hoveredChip === "cml" ? 1 : 0,
            marginLeft: hoveredChip === "cml" ? "8px" : "0px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div
        className="bg-[#2E8762] text-white font-[700] px-5 py-2.5 text-[22px] sm:text-[26px] lg:text-[30px] cursor-pointer transition-all duration-300 flex items-center gap-0"
        style={{
          borderRadius: stacked ? "12px" : "0 12px 12px 0",
          fontFamily: "Inter, system-ui, sans-serif",
          paddingRight: hoveredChip === "phall" ? "28px" : undefined,
        }}
        onMouseEnter={() => setHoveredChip("phall")}
        onMouseLeave={() => setHoveredChip(null)}
        onClick={() => navigate("/ph-all/unmet-needs")}
      >
        and Ph+ ALL<span className="text-[16px] align-super">&dagger;</span>
        <span
          className="inline-flex items-center transition-all duration-300 overflow-hidden"
          style={{
            width: hoveredChip === "phall" ? "20px" : "0px",
            opacity: hoveredChip === "phall" ? 1 : 0,
            marginLeft: hoveredChip === "phall" ? "8px" : "0px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
