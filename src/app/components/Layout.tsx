import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router";
import { TopNav } from "./TopNav";
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
      { threshold: 0.1, rootMargin: "-52px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f5f5f5]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <TopNav />
      <MobileHeader />
      <main className="flex flex-col min-h-0">
        <Outlet />
        <ISIInlineSection sectionRef={isiInlineRef} />
        {!isiInView && <div className="h-[52px]" />}
      </main>
      <ISIDockedBar visible={!isiInView} />
    </div>
  );
}
