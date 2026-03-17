import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ISIContent } from "./ISIContent";

const ISI_HEADER_PX = 52;
const ISI_TALL = "25vh";
const ISI_SHORT = "15vh";

interface ISIDockedBarProps {
  visible: boolean;
}

export function ISIDockedBar({ visible }: ISIDockedBarProps) {
  const [expanded, setExpanded] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPast(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When docked bar reappears (navigated to new page), reset to expanded + tall
  const prevVisible = useRef(visible);
  useEffect(() => {
    if (visible && !prevVisible.current) {
      setExpanded(true);
      setScrolledPast(false);
    }
    prevVisible.current = visible;
  }, [visible]);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const totalHeight = scrolledPast ? ISI_SHORT : ISI_TALL;
  const contentHeight = expanded
    ? `calc(${totalHeight} - ${ISI_HEADER_PX}px)`
    : "0px";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out w-full"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Navy header bar */}
      <div
        className="bg-[#0F1E38] cursor-pointer select-none"
        onClick={toggleExpanded}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label="Toggle Important Safety Information"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExpanded();
          }
        }}
        style={{
          boxShadow: expanded ? "0 -4px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 sm:px-20 lg:px-32 py-3 flex items-center justify-between">
          <h2 className="text-white text-[14px] sm:text-[16px] font-[700] tracking-wide uppercase">
            Important Safety Information
          </h2>
          <div className="text-white ml-4 flex-shrink-0">
            {expanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </div>
        </div>
      </div>

      {/* Content tray — height driven by scroll position */}
      <div
        className="bg-white border-t border-[#d0d0d0] overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: contentHeight }}
      >
        <div className="overflow-y-auto" style={{ maxHeight: contentHeight }}>
          <div className="px-8 sm:px-20 lg:px-32 py-5 max-w-[1400px] mx-auto">
            <ISIContent />
          </div>
        </div>
      </div>
    </div>
  );
}
