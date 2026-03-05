import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { ISIInlineSection } from "./ISIInlineSection";
import { ISIDockedBar } from "./ISIDockedBar";

export function Layout() {
  const isiInlineRef = useRef<HTMLDivElement>(null);
  const [isiInView, setIsiInView] = useState(false);

  useEffect(() => {
    const el = isiInlineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsiInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f5f5f5] flex"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-[288px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <MobileHeader />
        <Outlet />
        <ISIInlineSection sectionRef={isiInlineRef} />
        {!isiInView && <div className="h-[52px]" />}
      </div>

      <ISIDockedBar visible={!isiInView} />
    </div>
  );
}