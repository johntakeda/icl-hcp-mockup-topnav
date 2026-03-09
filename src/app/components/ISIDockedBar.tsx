import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ISIContent } from "./ISIContent";

interface ISIDockedBarProps {
  visible: boolean;
}

export function ISIDockedBar({ visible }: ISIDockedBarProps) {
  const [expanded, setExpanded] = useState(true);
  const [userCollapsed, setUserCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  // Auto-expand when user scrolls back to top, unless they manually collapsed
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atTop = scrollY < 100;

      if (atTop) {
        // At the top of the page: auto-expand unless user explicitly collapsed
        if (!userCollapsed) {
          setExpanded(true);
        }
      } else if (scrollY > lastScrollY.current && expanded) {
        // Scrolling down while expanded: auto-collapse
        setExpanded(false);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded, userCollapsed]);

  // When docked bar hides (inline ISI visible), collapse it so it reappears collapsed
  useEffect(() => {
    if (!visible && expanded) {
      setExpanded(false);
    }
  }, [visible, expanded]);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => {
      const next = !prev;
      if (!next) {
        // User is explicitly collapsing — permanently disables auto-expand
        setUserCollapsed(true);
      }
      return next;
    });
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out w-full"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Navy header bar - NOW AT THE TOP */}
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
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-3 flex items-center justify-between">
          <h2 className="text-white text-[14px] sm:text-[16px] font-[700] tracking-wide uppercase">
            Important Safety Information
          </h2>
          <div className="text-white ml-4 flex-shrink-0">
            {expanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </div>
        </div>
      </div>

      {/* Expandable content tray - BELOW the header */}
      <div
        className="bg-white border-t border-[#d0d0d0] overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: expanded ? "40vh" : "0px",
        }}
      >
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "40vh" }}
        >
          <div className="px-5 sm:px-8 lg:px-12 py-5 max-w-[1400px] mx-auto">
            <ISIContent />
          </div>
        </div>
      </div>
    </div>
  );
}