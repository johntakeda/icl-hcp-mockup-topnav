import iclusigLogo from "@/imports/ICLUSIG.svg";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { cmlItem, phAllItem, navItems } from "@/app/data/navigationData";

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeToggle, setActiveToggle] = useState<"hcp" | "patient">("hcp");
  const navigate = useNavigate();

  const toggleSection = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  const handleNavigate = (href: string) => {
    navigate(href);
    setMenuOpen(false);
    setOpenSection(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      {/* Header bar */}
      <header
        className="sticky top-0 z-50 text-[#0F1E38] flex items-center justify-between px-4 h-14 lg:hidden"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src={iclusigLogo}
            alt="ICLUSIG®"
            className="h-7"
            style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.7))" }}
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Compact HCP/Patient toggle */}
          <div
            className="flex items-center gap-1.5 rounded-full px-2 py-1"
            style={{ background: "rgba(0,0,0,0.05)" }}
          >
            <button
              onClick={() => setActiveToggle("hcp")}
              className={`text-[11px] font-[600] px-1.5 py-0.5 rounded-full transition-colors ${
                activeToggle === "hcp"
                  ? "text-[#0F1E38] bg-[#c6a000]"
                  : "text-[#9CA3AF]"
              }`}
            >
              HCP
            </button>
            <button
              onClick={() => setActiveToggle("patient")}
              className={`text-[11px] font-[600] px-1.5 py-0.5 rounded-full transition-colors ${
                activeToggle === "patient"
                  ? "text-[#0F1E38] bg-[#c6a000]"
                  : "text-[#9CA3AF]"
              }`}
            >
              Patient
            </button>
          </div>

          <button
            onClick={() => {
              setMenuOpen((prev) => !prev);
              if (menuOpen) setOpenSection(null);
            }}
            className="p-1 text-[#0F1E38]"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Dropdown + backdrop */}
      {menuOpen && (
        <>
          {/* Transparent backdrop — closes menu on tap outside */}
          <div
            className="fixed inset-0 z-[40] top-14 lg:hidden"
            onClick={closeMenu}
          />

          {/* Dropdown panel */}
          <div
            className="fixed left-0 right-0 z-[45] lg:hidden bg-white overflow-y-auto"
            style={{
              top: "56px",
              maxHeight: "calc(75vh - 56px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            <div className="px-4 py-4">
              {/* CTA */}
              <button className="w-full h-11 rounded-lg border-2 border-[#c6a000] text-[#0F1E38] text-[14px] font-[600] hover:bg-[#c6a000]/10 transition-colors px-4 text-left mb-3">
                Get Started / Request Rep
              </button>

              {/* CML */}
              <div className="mb-2">
                <button
                  className={`w-full h-11 flex items-center justify-between px-4 text-[14px] font-[700] border-2 border-[#237EBF] transition-colors ${
                    openSection === "CML"
                      ? "bg-[#237EBF]/10 text-[#237EBF] rounded-t-lg"
                      : "text-[#237EBF] rounded-lg"
                  }`}
                  onClick={() => toggleSection("CML")}
                >
                  CML
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openSection === "CML" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "CML" && (
                  <div className="border-2 border-t-0 border-[#237EBF] rounded-b-lg px-4 py-2">
                    {cmlItem.children.map((child) => (
                      <button
                        key={child.text}
                        className="block w-full text-left py-2 text-[13px] text-[#4B5563] hover:text-[#237EBF] transition-colors"
                        onClick={() => child.href && handleNavigate(child.href)}
                      >
                        {child.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Ph+ ALL */}
              <div className="mb-3">
                <button
                  className={`w-full h-11 flex items-center justify-between px-4 text-[14px] font-[700] border-2 border-[#2E8762] transition-colors ${
                    openSection === "Ph+ ALL"
                      ? "bg-[#2E8762]/10 text-[#2E8762] rounded-t-lg"
                      : "text-[#2E8762] rounded-lg"
                  }`}
                  onClick={() => toggleSection("Ph+ ALL")}
                >
                  Ph+ ALL
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openSection === "Ph+ ALL" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "Ph+ ALL" && (
                  <div className="border-2 border-t-0 border-[#2E8762] rounded-b-lg px-4 py-2">
                    {phAllItem.children.map((child) => (
                      <button
                        key={child.text}
                        className="block w-full text-left py-2 text-[13px] text-[#4B5563] hover:text-[#2E8762] transition-colors"
                        onClick={() => child.href && handleNavigate(child.href)}
                      >
                        {child.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Nav items */}
              <div className="border-t border-[#E5E7EB] pt-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#E5E7EB] last:border-b-0"
                  >
                    <button
                      className="w-full flex items-center justify-between py-3 px-2 text-[14px] font-[600] text-[#0F1E38] text-left"
                      onClick={() => toggleSection(item.label)}
                    >
                      <span>{item.shortLabel || item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openSection === item.label
                            ? "rotate-180 text-[#237EBF]"
                            : "text-[#9CA3AF]"
                        }`}
                      />
                    </button>
                    {openSection === item.label && (
                      <div className="pb-2 px-2">
                        {item.children.map((child) => (
                          <button
                            key={child.text}
                            className="block w-full text-left py-2 pl-3 text-[13px] text-[#4B5563] hover:text-[#237EBF] border-l-2 border-[#E5E7EB] hover:border-[#237EBF] transition-colors"
                            onClick={() =>
                              child.href && handleNavigate(child.href)
                            }
                          >
                            {child.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
