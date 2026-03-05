import iclusigLogo from "@/imports/ICLUSIG.svg";
import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";

interface NavItem {
  label: string;
  children: { text: string; href?: string }[];
  accentColor?: string;
}

const cmlItem: NavItem = {
  label: "CML",
  accentColor: "#237EBF",
  children: [
    { text: "Unmet Needs in CML", href: "/cml/unmet-needs" },
    { text: "T315I Mutation", href: "/cml/t315i-mutation" },
    { text: "Mechanism of Action", href: "/cml/mechanism-of-action" },
    { text: "CML PACE Study Data", href: "/efficacy/cml-pace-trial" },
    { text: "CML OPTIC Study Data", href: "/efficacy/cml-optic-trial" },
  ],
};

const phAllItem: NavItem = {
  label: "Ph+ ALL",
  accentColor: "#2E8762",
  children: [
    { text: "Unmet Needs in Ph+ ALL", href: "/ph-all/unmet-needs" },
    { text: "Ph+ ALL PhALLCON 1L Study Data", href: "/ph-all/first-line" },
    { text: "Ph+ ALL PACE Study Data", href: "/efficacy/ph-all-pace-trial" },
    { text: "Mechanism of Action", href: "/cml/mechanism-of-action" },
  ],
};

const navItems: NavItem[] = [
  {
    label: "Efficacy",
    children: [
      { text: "CML OPTIC Trial Efficacy", href: "/efficacy/cml-optic-trial" },
      { text: "CML PACE Trial Efficacy", href: "/efficacy/cml-pace-trial" },
      { text: "Ph+ ALL PhALLCON Trial Efficacy in Newly Diagnosed", href: "/ph-all/first-line#efficacy" },
      { text: "Ph+ ALL PACE Trial Efficacy", href: "/efficacy/ph-all-pace-trial" },
    ],
  },
  {
    label: "Safety Profile",
    children: [
      { text: "Safety in CML OPTIC Trial", href: "/safety/cml-optic-trial" },
      { text: "Safety in CML PACE Trial", href: "/safety/cml-pace-trial" },
      { text: "Safety in Newly Diagnosed Ph+ ALL PhALLCON Trial", href: "/ph-all/first-line#safety" },
      { text: "Safety in Ph+ ALL PACE Trial", href: "/safety/ph-all-pace-trial" },
    ],
  },
  {
    label: "Dosing and Administration",
    children: [
      { text: "Dosing Overview", href: "/dosing" },
      { text: "CP-CML Optimized Dosing", href: "/dosing/cml-optimized" },
      { text: "Newly Diagnosed Ph+ ALL Dosing", href: "/ph-all/first-line#dosing" },
    ],
  },
  {
    label: "Access and Patient Support",
    children: [
      { text: "Patient Support", href: "/patient-support" },
      { text: "Here2Assist", href: "/support/here2assist" },
      { text: "Patient Profiles" },
    ],
  },
  {
    label: "Resources and Expert Perspectives",
    children: [
      { text: "Download Resources", href: "/support/resources" },
      { text: "HCP and Patient Videos" },
      { text: "Patient Profiles" },
    ],
  },
];

interface SidebarProps {
  onClose?: () => void;
  isDrawer?: boolean;
}

export function Sidebar({ onClose, isDrawer = false }: SidebarProps) {
  const [activeToggle, setActiveToggle] = useState<"hcp" | "patient">("hcp");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

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

  const renderChildren = (item: NavItem) => {
    const accent = item.accentColor || "#237EBF";
    return (
      <div className="pt-1 pb-2">
        {item.children.map((child) => (
          <a
            key={child.text}
            href={child.href ? child.href : "#"}
            className="block py-[5px] text-[13px] font-[400] text-[#4B5563] transition-colors rounded px-2"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accent;
              e.currentTarget.style.backgroundColor = "#F3F4F6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#4B5563";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onClick={(e) => {
              if (child.href) {
                e.preventDefault();
                navigate(child.href);
              }
            }}
          >
            {child.text}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col bg-white text-[#0F1E38] ${
        isDrawer ? "h-full w-[240px]" : "w-[288px] h-full fixed left-0 top-0 z-40"
      }`}
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        ...(!isDrawer ? { boxShadow: "4px 0 16px rgba(0,0,0,0.06)" } : {}),
      }}
    >
      <div className="px-6 pt-5 pb-2">
        {/* HCP / Patient toggle */}
        <div className="flex items-center gap-2 mb-1">
          <button
            onClick={() => setActiveToggle("hcp")}
            className={`text-[15px] font-[700] transition-colors ${
              activeToggle === "hcp" ? "text-[#0F1E38]" : "text-[#9CA3AF]"
            }`}
          >
            HCP
          </button>
          <div
            className="w-10 h-5 rounded-full bg-[#D1D5DB] relative cursor-pointer"
            onClick={() => setActiveToggle(activeToggle === "hcp" ? "patient" : "hcp")}
          >
            <div
              className={`w-4 h-4 rounded-full bg-[#c6a000] absolute top-0.5 transition-all ${
                activeToggle === "hcp" ? "left-0.5" : "left-5"
              }`}
            />
          </div>
          <button
            onClick={() => setActiveToggle("patient")}
            className={`text-[15px] font-[500] transition-colors ${
              activeToggle === "patient" ? "text-[#0F1E38]" : "text-[#9CA3AF]"
            }`}
          >
            Patient
          </button>
        </div>
        <p className="text-[11px] text-[#6B7280] mb-5">
          This site is for US Healthcare Professionals only.
        </p>

        {/* Logo block */}
        <div className="mb-6 cursor-pointer" onClick={() => navigate("/")}>
          <img src={iclusigLogo} alt="ICLUSIG® (ponatinib) tablets" className="w-full max-w-[196px]" />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="px-6 flex flex-col gap-3 mb-6">
        <button className="h-11 rounded-lg border-2 border-[#c6a000] text-[#0F1E38] text-[15px] font-[600] hover:bg-[#c6a000]/10 transition-colors px-4 text-left">
          Get Started / Request Rep
        </button>

        {/* CML */}
        <div
          className="rounded-lg transition-shadow duration-200"
          style={hoveredMenu === "CML" ? { boxShadow: "0 4px 16px rgba(35,126,191,0.18)" } : {}}
          onMouseEnter={() => openMenu("CML")}
          onMouseLeave={scheduleClose}
        >
          <button
            className={`h-11 w-full text-[#237EBF] text-[15px] font-[700] transition-colors px-4 text-left flex items-center justify-between border-2 border-[#237EBF] ${
              hoveredMenu === "CML"
                ? "bg-[#237EBF]/10 rounded-t-lg rounded-b-none border-b-0"
                : "rounded-lg"
            }`}
          >
            CML
            <ChevronDown
              size={16}
              className={`text-[#237EBF] flex-shrink-0 transition-transform duration-200 ${
                hoveredMenu === "CML" ? "rotate-180" : ""
              }`}
            />
          </button>
          {hoveredMenu === "CML" && (
            <div className="border-2 border-t-0 border-[#237EBF] rounded-b-lg bg-white px-4">
              {renderChildren(cmlItem)}
            </div>
          )}
        </div>

        {/* Ph+ ALL */}
        <div
          className="rounded-lg transition-shadow duration-200"
          style={hoveredMenu === "Ph+ ALL" ? { boxShadow: "0 4px 16px rgba(46,135,98,0.18)" } : {}}
          onMouseEnter={() => openMenu("Ph+ ALL")}
          onMouseLeave={scheduleClose}
        >
          <button
            className={`h-11 w-full text-[#2E8762] text-[15px] font-[700] transition-colors px-4 text-left flex items-center justify-between border-2 border-[#2E8762] ${
              hoveredMenu === "Ph+ ALL"
                ? "bg-[#2E8762]/10 rounded-t-lg rounded-b-none border-b-0"
                : "rounded-lg"
            }`}
          >
            Ph+ ALL
            <ChevronDown
              size={16}
              className={`text-[#2E8762] flex-shrink-0 transition-transform duration-200 ${
                hoveredMenu === "Ph+ ALL" ? "rotate-180" : ""
              }`}
            />
          </button>
          {hoveredMenu === "Ph+ ALL" && (
            <div className="border-2 border-t-0 border-[#2E8762] rounded-b-lg bg-white px-4">
              {renderChildren(phAllItem)}
            </div>
          )}
        </div>
      </div>

      {/* Nav items */}
      <nav className="px-6 flex flex-col flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const isOpen = hoveredMenu === item.label;
          return (
            <div
              key={item.label}
              className={`rounded-lg transition-shadow duration-200 ${
                isOpen ? "" : "border-b border-[#E5E7EB]"
              }`}
              style={isOpen ? { boxShadow: "0 4px 16px rgba(0,0,0,0.10)" } : {}}
              onMouseEnter={() => openMenu(item.label)}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center justify-between w-full py-3 px-4 text-[14px] font-[600] transition-colors text-left rounded-t-lg ${
                  isOpen ? "text-[#237EBF] bg-[#F9FAFB]" : "text-[#0F1E38]"
                }`}
              >
                <span className="pr-2">{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 transition-all duration-200 ${
                    isOpen ? "text-[#237EBF] rotate-180" : "text-[#9CA3AF]"
                  }`}
                />
              </button>
              {isOpen && (
                <div className="bg-white rounded-b-lg px-4">
                  <div className="border-t border-[#E5E7EB]">
                    {renderChildren(item)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {isDrawer && (
        <div className="px-6 py-4">
          <button onClick={onClose} className="text-[14px] text-[#9CA3AF] hover:text-[#0F1E38]">
            Close
          </button>
        </div>
      )}
    </div>
  );
}