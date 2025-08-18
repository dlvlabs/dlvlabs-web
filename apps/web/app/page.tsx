import { BuildSection } from "./components/build-section";
import { IntroductionSection } from "./components/introduction-section";

export default function Home() {
  return (
    <div className="relative min-w-screen min-h-screen flex flex-col">
      <IntroductionSection />
      {/* <ShootingStarsAndStarsBackgroundDemo /> */}
      <BuildSection />
    </div>
  );
}
