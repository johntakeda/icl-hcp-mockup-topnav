import iclusigLogo from "@/imports/ICLUSIG.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./Sidebar";

export function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState<"hcp" | "patient">("hcp");

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
          <img src={iclusigLogo} alt="ICLUSIG®" className="h-7" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.7))" }} />
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
            onClick={() => setDrawerOpen(true)}
            className="p-1 text-[#0F1E38]"
            aria-label="Open navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="relative h-full">
              <button
                onClick={() => setDrawerOpen(false)}
                className="absolute top-4 right-4 z-10 text-[#0F1E38] hover:text-[#237EBF]"
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
              <Sidebar isDrawer onClose={() => setDrawerOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
