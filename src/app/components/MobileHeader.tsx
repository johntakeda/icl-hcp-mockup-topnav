import iclusigLogo from "@/imports/ICLUSIG.svg";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
const BORDER = "#CDD1D6";
const TEXT_ICON = "#465666";
const MAIN_NAV_SHADOW = "0 4px 9px rgba(0,0,0,0.12)";

const manifoldStack = '"Manifold CF", "Inter", system-ui, sans-serif';

const HEADER_HEIGHT = 32 + 71; // utility + main nav

type UtilityItem =
  | { kind: "link"; label: string; href?: string; arrow?: boolean }
  | { kind: "dropdown"; label: string; children: { text: string; href?: string }[] };

const utilityItems: UtilityItem[] = [
  { kind: "link", label: "Important Safety Information", href: "#" },
  {
    kind: "dropdown",
    label: "Prescribing Information",
    children: [
      { text: "English", href: "#" },
      { text: "Español", href: "#" },
    ],
  },
  { kind: "link", label: "Medication Information", href: "#" },
  { kind: "link", label: "For Patient/Caregivers", href: "#", arrow: true },
];

function pathsMatchItem(pathname: string, item: NavItem): boolean {
  return item.children.some((child) => {
    if (!child.href) return false;
    const base = child.href.split("#")[0];
    return base && base !== "/" && pathname.startsWith(base);
  });
}

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openUtility, setOpenUtility] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenSection(null);
    setOpenUtility(null);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  // On open, auto-expand the section matching the current route
  useEffect(() => {
    if (!menuOpen) return;
    const match = allNavItems.find((item) => pathsMatchItem(location.pathname, item));
    if (match) setOpenSection(match.label);
  }, [menuOpen, location.pathname]);

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label));

  const toggleUtility = (label: string) =>
    setOpenUtility((prev) => (prev === label ? null : label));

  const handleNavigate = (href: string) => {
    navigate(href);
    setMenuOpen(false);
    setOpenSection(null);
    setOpenUtility(null);
  };

  return (
    <div className="lg:hidden" style={{ fontFamily: manifoldStack }}>
      {/* Sticky header: utility strip + main nav */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Utility nav */}
        <div
          className="w-full flex items-center px-4"
          style={{ background: UTILITY_BG, color: UTILITY_TEXT, height: 32 }}
        >
          <span className="text-[14px] leading-[20px]">
            This site is for US Healthcare Professionals only.
          </span>
        </div>

        {/* Main nav */}
        <div
          className="w-full flex items-center justify-between px-4"
          style={{
            background: NAV_BG,
            height: 71,
            paddingTop: 8,
            paddingBottom: 8,
            boxShadow: MAIN_NAV_SHADOW,
          }}
        >
          <button
            type="button"
            className="flex items-center"
            onClick={() => navigate("/")}
            aria-label="ICLUSIG home"
            style={{ height: 55 }}
          >
            <img
              src={iclusigLogo}
              alt="ICLUSIG® (ponatinib) tablets"
              className="block"
              style={{ width: 171, height: 55, objectFit: "contain", objectPosition: "left center" }}
            />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-full"
            style={{ width: 44, height: 44, color: NAV_TEXT }}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Spacer so page content sits below the fixed header */}
      <div style={{ height: HEADER_HEIGHT }} />

      {/* Drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[60]"
            style={{ top: HEADER_HEIGHT, background: "rgba(0,0,0,0.25)" }}
            onClick={() => {
              setMenuOpen(false);
              setOpenSection(null);
              setOpenUtility(null);
            }}
          />

          <div
            className="fixed left-0 right-0 z-[65] overflow-y-auto"
            style={{
              top: HEADER_HEIGHT,
              maxHeight: `calc(100dvh - ${HEADER_HEIGHT}px)`,
              background: NAV_BG,
            }}
          >
            {/* Main category items */}
            {allNavItems.map((item) => {
              const isOpen = openSection === item.label;
              const isSelected = pathsMatchItem(location.pathname, item);
              const displayLabel = item.shortLabel || item.label;
              const showAccent = isOpen || isSelected;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleSection(item.label)}
                    className="w-full flex items-center justify-between px-4"
                    style={{
                      background: NAV_BG,
                      height: 60,
                      borderBottom: showAccent
                        ? `4px solid ${ACCENT}`
                        : `1px solid ${BORDER}`,
                      color: NAV_TEXT,
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: 1.2,
                    }}
                  >
                    <span>{displayLabel}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: NAV_TEXT }}
                    />
                  </button>

                  {isOpen &&
                    item.children.map((child) => (
                      <button
                        key={child.text}
                        type="button"
                        onClick={() => child.href && handleNavigate(child.href)}
                        className="w-full flex items-center text-left px-4"
                        style={{
                          background: NAV_HOVER_BG,
                          height: 60,
                          borderBottom: `1px solid ${BORDER}`,
                          color: NAV_TEXT,
                          fontWeight: 400,
                          fontSize: 16,
                          lineHeight: "24px",
                        }}
                      >
                        {child.text}
                      </button>
                    ))}
                </div>
              );
            })}

            {/* Request a Rep CTA */}
            <div
              className="flex items-center justify-center"
              style={{ background: NAV_BG, paddingLeft: 8, paddingRight: 8, paddingTop: 24, paddingBottom: 24 }}
            >
              <button
                type="button"
                onClick={() => handleNavigate("/get-started")}
                className="flex items-center justify-center w-full"
                style={{
                  background: ACCENT,
                  color: CTA_TEXT,
                  fontWeight: 800,
                  fontSize: 16,
                  lineHeight: 1,
                  height: 44,
                  borderRadius: 16,
                  border: "none",
                }}
              >
                Request a Rep
              </button>
            </div>

            {/* Utility links */}
            {utilityItems.map((item) => {
              if (item.kind === "link") {
                return (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    className="w-full flex items-center px-4 gap-1"
                    style={{
                      background: NAV_BG,
                      height: 44,
                      borderTop: `1px solid ${BORDER}`,
                      borderBottom: `1px solid ${BORDER}`,
                      color: TEXT_ICON,
                      fontWeight: 400,
                      fontSize: 12,
                      lineHeight: "16px",
                    }}
                  >
                    {item.label}
                    {item.arrow && <ArrowRight size={12} className="ml-1" />}
                  </a>
                );
              }

              const isOpen = openUtility === item.label;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleUtility(item.label)}
                    className="w-full flex items-center justify-between px-4"
                    style={{
                      background: NAV_BG,
                      height: 44,
                      borderTop: `1px solid ${BORDER}`,
                      borderBottom: isOpen ? `4px solid ${ACCENT}` : `1px solid ${BORDER}`,
                      color: isOpen ? NAV_TEXT : TEXT_ICON,
                      fontWeight: isOpen ? 700 : 400,
                      fontSize: 12,
                      lineHeight: "16px",
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: isOpen ? NAV_TEXT : TEXT_ICON }}
                    />
                  </button>
                  {isOpen &&
                    item.children.map((child) => (
                      <a
                        key={child.text}
                        href={child.href || "#"}
                        className="w-full flex items-center px-4"
                        style={{
                          background: NAV_HOVER_BG,
                          height: 44,
                          borderBottom: `1px solid ${BORDER}`,
                          color: NAV_TEXT,
                          fontWeight: 400,
                          fontSize: 12,
                          lineHeight: "16px",
                        }}
                      >
                        {child.text}
                      </a>
                    ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
