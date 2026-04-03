import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ISIContent } from "./ISIContent";

interface ISIDockedBarProps {
  visible: boolean;
}

export function ISIDockedBar({ visible }: ISIDockedBarProps) {
  const [expanded, setExpanded] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPast(window.scrollY > 10);
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

  const height = expanded
    ? scrolledPast
      ? "15vh"
      : "25vh"
    : "52px";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out w-full flex flex-col"
      style={{
        height,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Navy header bar — fixed size */}
      <div
        className="flex-shrink-0 bg-[#0F1E38] cursor-pointer select-none"
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

      {/* Content tray — fills remaining space, scrolls internally */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-white border-t border-[#d0d0d0]">
        <div className="px-8 sm:px-20 lg:px-32 py-5 max-w-[1400px] mx-auto">
          <ISIContent />
        </div>
      </div>
    </div>
  );
}
