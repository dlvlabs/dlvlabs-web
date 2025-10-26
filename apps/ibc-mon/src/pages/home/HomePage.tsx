import { HomeChainListSection, IntroSection } from "@/widgets/home";

export function HomePage() {
  return (
    <div className="relative min-w-screen w-full min-h-screen flex flex-col gap-y-36 pb-32">
      <IntroSection />
      <HomeChainListSection />
    </div>
  );
}
