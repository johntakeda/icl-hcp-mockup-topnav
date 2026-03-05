import { AnnouncementBar } from "../components/AnnouncementBar";
import { HeroSection } from "../components/HeroSection";

export function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <div className="flex-1 bg-[#f5f5f5]" />
    </>
  );
}
