import { HomeChainListSection, IntroSection } from "@/widgets/home";

export function HomePage() {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center gap-12 mx-32">
      <IntroSection />
      <HomeChainListSection />
    </div>
  );
}
