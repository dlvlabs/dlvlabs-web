import { HomeChainListSection, IntroSection } from "@/widgets/home";

export function HomePage() {
  return (
    <div className="relative min-w-screen w-full min-h-screen flex flex-col pb-32">
      <IntroSection />
      <HomeChainListSection />
    </div>
  );
}
