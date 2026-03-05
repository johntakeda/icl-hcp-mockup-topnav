import { type RefObject } from "react";
import { ISIContent } from "./ISIContent";

interface ISIInlineSectionProps {
  sectionRef?: RefObject<HTMLDivElement | null>;
}

export function ISIInlineSection({ sectionRef }: ISIInlineSectionProps) {
  return (
    <div
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 pb-4 border-b border-[#E3E3E3]">
        <h2 className="text-[20px] sm:text-[22px] font-[700] text-[#0F1E38] uppercase">
          Important Safety Information
        </h2>
      </div>

      {/* Full ISI Content */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-6 pb-10">
        <ISIContent />
      </div>
    </div>
  );
}
