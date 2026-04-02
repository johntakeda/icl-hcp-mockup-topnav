import iclusigSymbol from "@/imports/ICLUSIG-symbol.svg";
import iclusigText from "@/imports/ICLUSIG_text_only.svg";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { type NavItem, cmlItem, phAllItem, navItems } from "@/app/data/navigationData";

const allNavItems: NavItem[] = [cmlItem, phAllItem, ...navItems];

const dropdownGlassStyle = {
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(24px) saturate(180%)",
  WebkitBackdropFilter: "blur(24px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
} as const;

/** Parse rgb/rgba and return perceived luminance 0–1 */
function getLuminance(color: string): number | null {
  const match = color.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return null;
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  // Also check alpha — if mostly transparent, skip
  const alphaMatch = color.match(/rgba\(\s*\d+,\s*\d+,\s*\d+,\s*([\d.]+)/);
  if (alphaMatch && parseFloat(alphaMatch[1]) < 0.3) return null;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

/**
 * Check all elements at (x,y) for dark backgrounds.
 * Uses elementsFromPoint to catch absolutely-positioned overlays and gradients.
 */
function isDarkAtPoint(x: number, y: number, header: HTMLElement): boolean {
  // Move header out of the way so we hit the content behind it
  const origPointerEvents = header.style.pointerEvents;
  const origZIndex = header.style.zIndex;
  header.style.pointerEvents = "none";
  header.style.zIndex = "-1";

  const elements = document.elementsFromPoint(x, y);

  header.style.pointerEvents = origPointerEvents;
  header.style.zIndex = origZIndex;

  for (const el of elements) {
    // Skip header and its children
    if (header.contains(el)) continue;

    const styles = getComputedStyle(el);

    // Check background-image for gradients with dark colors
    const bgImage = styles.backgroundImage;
    if (bgImage && bgImage !== "none") {
      // Extract first rgb/rgba color from the gradient
      const colorMatches = bgImage.matchAll(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/g);
      for (const m of colorMatches) {
        const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
        if (alpha < 0.3) continue;
        const r = parseInt(m[1]);
        const g = parseInt(m[2]);
        const b = parseInt(m[3]);
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        if (lum < 0.4) return true;
      }
    }

    // Check solid background-color
    const bg = styles.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      const lum = getLuminance(bg);
      if (lum !== null && lum < 0.4) return true;
      // If it's a solid light background, we can stop — nothing behind matters
      if (lum !== null && lum > 0.6) return false;
    }

    // An <img> tag likely means a photo — could be dark
    if (el.tagName === "IMG" && el.closest("section")) {
      // Don't immediately call it dark — let gradient overlay above handle it
      continue;
    }
  }

  return false;
}

export function TopNav() {
  const [activeToggle, setActiveToggle] = useState<"hcp" | "patient">("hcp");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect background color behind the logo by sampling elements at its position
  const checkBackground = useCallback(() => {
    const logo = logoRef.current;
    const header = headerRef.current;
    if (!logo || !header) return;

    const rect = logo.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setIsDarkBg(isDarkAtPoint(x, y, header));
  }, []);

  useEffect(() => {
    // Check on mount + route change
    checkBackground();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(checkBackground);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [checkBackground, location.pathname]);

  const openMenu = useCallback((label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setHoveredMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background: isScrolled ? "#FFFFFF" : "transparent",
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* Utility text row — collapses on scroll */}
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-end gap-4 px-6 md:px-10 lg:px-12 transition-all duration-300 overflow-hidden"
        style={{
          paddingTop: isScrolled ? "0px" : "12px",
          paddingBottom: isScrolled ? "0px" : "4px",
          maxHeight: isScrolled ? "0px" : "40px",
          opacity: isScrolled ? 0 : 1,
        }}
      >
        <span
          className="text-[11px] transition-colors duration-300"
          style={{ color: isDarkBg && !isScrolled ? "rgba(255,255,255,0.6)" : "#6B7280" }}
        >
          This site is for US Healthcare Professionals only.
        </span>
        <button
          onClick={() =>
            setActiveToggle(activeToggle === "hcp" ? "patient" : "hcp")
          }
          className="text-[11px] font-[600] underline underline-offset-2 transition-colors duration-300"
          style={{
            color: isDarkBg && !isScrolled ? "rgba(255,255,255,0.85)" : "#0F1E38",
            textDecorationColor: "#c6a000",
          }}
        >
          {activeToggle === "hcp" ? "For Healthcare Providers" : "For Patients"}
        </button>
      </div>

      {/* Main nav area: logo left, floating nav right */}
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-12 transition-all duration-300"
        style={{ paddingTop: isScrolled ? "0px" : "8px", paddingBottom: isScrolled ? "0px" : "16px" }}
      >
        {/* Large logo — symbol never changes color, text switches */}
        <div
          ref={logoRef}
          className="flex-shrink-0 cursor-pointer flex items-center gap-2 transition-all duration-300 origin-left"
          style={{ transform: isScrolled ? "scale(0.65)" : "scale(1.15)" }}
          onClick={() => navigate("/")}
        >
          <img
            src={iclusigSymbol}
            alt=""
            className="h-6 xl:h-7"
          />
          <img
            src={iclusigText}
            alt="ICLUSIG® (ponatinib) tablets"
            className="h-12 xl:h-14 transition-all duration-300"
            style={{
              filter: isScrolled
                ? "none"
                : "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Floating glass nav bar */}
        <div
          className="flex items-center gap-0.5 px-2 transition-all duration-300"
          style={isScrolled ? {
            paddingTop: "2px",
            paddingBottom: "2px",
            background: "transparent",
            border: "none",
            borderRadius: "0",
            boxShadow: "none",
          } : {
            paddingTop: "8px",
            paddingBottom: "8px",
            background: isDarkBg
              ? "rgba(10, 25, 55, 0.85)"
              : "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: isDarkBg
              ? "1px solid rgba(255, 255, 255, 0.15)"
              : "1px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "16px",
            boxShadow: isDarkBg
              ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
              : "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <nav className="flex items-center gap-0.5">
            {allNavItems.map((item, index) => {
              const isOpen = hoveredMenu === item.label;
              const displayLabel = item.shortLabel || item.label;
              const accent = item.accentColor || "#0F1E38";
              const isAccented = !!item.accentColor;
              const alignRight = index >= allNavItems.length - 3;

              const useDarkText = isScrolled || !isDarkBg;
              const textColor = useDarkText
                ? isAccented
                  ? "#0F1E38"
                  : isOpen
                    ? "#237EBF"
                    : "#374151"
                : isOpen
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.85)";

              const chevronColor = useDarkText
                ? isAccented
                  ? "#6B7280"
                  : "#9CA3AF"
                : "rgba(255,255,255,0.5)";

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`flex items-center gap-1 rounded-xl font-[600] transition-all whitespace-nowrap ${
                      isOpen
                        ? useDarkText
                          ? "bg-black/[0.06]"
                          : "bg-white/[0.12]"
                        : useDarkText
                          ? "hover:bg-black/[0.03]"
                          : "hover:bg-white/[0.08]"
                    }`}
                    style={{
                      color: textColor,
                      fontSize: isScrolled ? "13px" : "14px",
                      paddingLeft: isScrolled ? "12px" : "10px",
                      paddingRight: isScrolled ? "12px" : "10px",
                      paddingTop: isScrolled ? "3px" : "6px",
                      paddingBottom: isScrolled ? "3px" : "6px",
                    }}
                  >
                    <span className="relative">
                      {displayLabel}
                      {isAccented && (
                        <span
                          className="absolute bottom-[-4px] left-[15%] w-[70%] h-[2px] rounded-full"
                          style={{ background: accent }}
                        />
                      )}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: chevronColor }}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {isOpen && (
                    <div
                      className={`absolute top-full mt-2 min-w-[280px] py-2 z-[55] ${
                        alignRight ? "right-0" : "left-0"
                      }`}
                      style={{
                        ...dropdownGlassStyle,
                        ...(isAccented
                          ? { borderTop: `2px solid ${accent}` }
                          : {}),
                      }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.text}
                          href={child.href || "#"}
                          className="block px-4 py-2.5 text-[13px] text-[#4B5563] transition-colors rounded-lg mx-1"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = accent;
                            e.currentTarget.style.backgroundColor =
                              "rgba(0,0,0,0.03)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#4B5563";
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                          onClick={(e) => {
                            if (child.href) {
                              e.preventDefault();
                              navigate(child.href);
                              setHoveredMenu(null);
                            }
                          }}
                        >
                          {child.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA inside the floating bar */}
          <div className="pl-1 pr-1">
            <button
              onClick={() => navigate("/get-started")}
              className="rounded-xl font-[700] transition-all duration-300 px-5 whitespace-nowrap"
              style={{
                height: isScrolled ? "28px" : "32px",
                fontSize: isScrolled ? "13px" : "14px",
                background: "#D4A800",
                color: "#0F1E38",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E0B800";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#D4A800";
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
