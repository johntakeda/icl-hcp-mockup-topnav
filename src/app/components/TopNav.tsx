import iclusigLogo from "@/imports/ICLUSIG.svg";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { type NavItem, cmlItem, phAllItem, navItems } from "@/app/data/navigationData";

const allNavItems: NavItem[] = [cmlItem, phAllItem, ...navItems];

const NAV_BG = "#FFFFFF";
const NAV_HOVER_BG = "#F3F8FF";
const NAV_TEXT = "#003A7D";
const UTILITY_BG = "#003A7D";
const UTILITY_TEXT = "#FFFFFF";
const ACCENT = "#E8B830";
const CTA_TEXT = "#133358";
const NAV_SHADOW = "0 4px 9px rgba(0,0,0,0.15)";
const DROPDOWN_SHADOW = "0 4px 4px rgba(0,0,0,0.15)";

const manifoldStack = '"Manifold CF", "Inter", system-ui, sans-serif';

type UtilityDropdownItem = { text: string; href?: string };

const prescribingDropdown: UtilityDropdownItem[] = [
  { text: "English", href: "#" },
  { text: "Espanol", href: "#" },
];

function pathsMatchItem(pathname: string, item: NavItem): boolean {
  return item.children.some((child) => {
    if (!child.href) return false;
    const base = child.href.split("#")[0];
    return base && base !== "/" && pathname.startsWith(base);
  });
}

export function TopNav() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredUtility, setHoveredUtility] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const utilityCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setHoveredMenu(null);
    setHoveredUtility(null);
  }, [location.pathname]);

  const openMenu = useCallback((label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setHoveredMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setHoveredMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openUtility = useCallback((label: string) => {
    if (utilityCloseTimerRef.current) {
      clearTimeout(utilityCloseTimerRef.current);
      utilityCloseTimerRef.current = null;
    }
    setHoveredUtility(label);
  }, []);

  const scheduleCloseUtility = useCallback(() => {
    utilityCloseTimerRef.current = setTimeout(() => setHoveredUtility(null), 150);
  }, []);

  const cancelCloseUtility = useCallback(() => {
    if (utilityCloseTimerRef.current) {
      clearTimeout(utilityCloseTimerRef.current);
      utilityCloseTimerRef.current = null;
    }
  }, []);

  return (
    <header
      className="hidden lg:block fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: manifoldStack, background: NAV_BG, boxShadow: NAV_SHADOW }}
    >
      {/* Utility navigation — dark blue 32px strip */}
      <div
        className="w-full"
        style={{ background: UTILITY_BG, color: UTILITY_TEXT, height: 32 }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[60px]">
          <span className="text-[14px] leading-[20px]">
            This site is for US Healthcare Professionals only.
          </span>
          <div className="flex items-stretch gap-6 h-full">
            <a
              href="#"
              className="flex items-center px-1 text-[14px] leading-[20px] hover:underline"
              style={{ color: UTILITY_TEXT }}
            >
              Important Safety Information
            </a>

            {/* Prescribing Information dropdown */}
            <div
              className="relative flex items-stretch"
              onMouseEnter={() => openUtility("prescribing")}
              onMouseLeave={scheduleCloseUtility}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-1 text-[14px] leading-[20px]"
                style={{ color: UTILITY_TEXT }}
              >
                <span className="hover:underline">Prescribing Information</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-150 ${
                    hoveredUtility === "prescribing" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {hoveredUtility === "prescribing" && (
                <div
                  className="absolute right-0 top-full min-w-[172px] flex flex-col"
                  style={{ background: NAV_BG, boxShadow: DROPDOWN_SHADOW, zIndex: 60 }}
                  onMouseEnter={cancelCloseUtility}
                  onMouseLeave={scheduleCloseUtility}
                >
                  {prescribingDropdown.map((child) => (
                    <a
                      key={child.text}
                      href={child.href || "#"}
                      className="flex items-center h-12 px-6 text-[16px] leading-[24px] transition-colors"
                      style={{ color: NAV_TEXT }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = NAV_HOVER_BG;
                        e.currentTarget.style.fontWeight = "700";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.fontWeight = "400";
                      }}
                    >
                      {child.text}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="flex items-center px-1 text-[14px] leading-[20px] hover:underline"
              style={{ color: UTILITY_TEXT }}
            >
              Medical Information
            </a>
            <a
              href="#"
              className="flex items-center gap-1 px-1 text-[14px] leading-[20px] hover:underline"
              style={{ color: UTILITY_TEXT }}
            >
              For Patient/Caregivers
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation — white 80px */}
      <div className="w-full" style={{ background: NAV_BG }}>
        <div className="max-w-[1440px] mx-auto h-20 flex items-center gap-10 xl:gap-16 px-[60px]">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => navigate("/")}
            style={{ height: 64 }}
          >
            <img
              src={iclusigLogo}
              alt="ICLUSIG® (ponatinib) tablets"
              className="block"
              style={{ width: 154, height: 64, objectFit: "contain" }}
            />
          </div>

          {/* Category links */}
          <nav className="flex-1 h-full flex items-stretch justify-center gap-3">
            {allNavItems.map((item, index) => {
              const isOpen = hoveredMenu === item.label;
              const displayLabel = item.shortLabel || item.label;
              const isSelected = pathsMatchItem(location.pathname, item);
              const alignRight = index >= allNavItems.length - 3;

              const bg = isOpen ? NAV_HOVER_BG : "transparent";

              return (
                <div
                  key={item.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 h-full px-4 whitespace-nowrap transition-colors"
                    style={{
                      background: bg,
                      color: NAV_TEXT,
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: 1.2,
                      borderBottom: isSelected ? `4px solid ${ACCENT}` : "4px solid transparent",
                    }}
                  >
                    <span>{displayLabel}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: NAV_TEXT }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className={`absolute top-full min-w-[260px] flex flex-col ${
                        alignRight ? "right-0" : "left-0"
                      }`}
                      style={{
                        background: NAV_BG,
                        boxShadow: DROPDOWN_SHADOW,
                        zIndex: 60,
                      }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.text}
                          href={child.href || "#"}
                          className="flex items-center h-12 px-6 text-[16px] leading-[24px] transition-colors"
                          style={{ color: NAV_TEXT, fontWeight: 400 }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = NAV_HOVER_BG;
                            e.currentTarget.style.fontWeight = "700";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.fontWeight = "400";
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

          {/* CTA */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => navigate("/get-started")}
              className="flex items-center justify-center whitespace-nowrap transition-colors"
              style={{
                background: ACCENT,
                color: CTA_TEXT,
                fontWeight: 800,
                fontSize: 16,
                lineHeight: 1,
                height: 44,
                paddingLeft: 24,
                paddingRight: 24,
                borderRadius: 16,
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D4A800";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = ACCENT;
              }}
            >
              Request a Rep
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
