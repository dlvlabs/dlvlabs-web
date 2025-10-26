import { BuildSection } from "./components/build-section";
import { IntroductionSection } from "./components/introduction-section";

export default function Home() {
  return (
    <div className="relative min-w-screen min-h-screen flex flex-col gap-y-36 pb-32">
      <IntroductionSection />
      <BuildSection />
      {/* <CardHoverEffectDemo />
      <TestBuildSection />
      <TestBlogSection /> */}
    </div>
  );
}
