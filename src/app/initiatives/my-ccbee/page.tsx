import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CCBeeHero } from "@/components/ccbee/CCBeeHero";
import { WhyCCBee } from "@/components/ccbee/WhyCCBee";
import { TrackAndRoles } from "@/components/ccbee/TrackAndRoles";
import { LeadershipAndBooster } from "@/components/ccbee/LeadershipAndBooster";
import { ConnectedPlatform } from "@/components/ccbee/ConnectedPlatform";
import { EarlyYearsAndTrust } from "@/components/ccbee/EarlyYearsAndTrust";
import { CCBeeVoices } from "@/components/ccbee/CCBeeVoices";
import { CCBeeFaq } from "@/components/ccbee/CCBeeFaq";
import { CCBeeCTA } from "@/components/ccbee/CCBeeCTA";
import { LogoFlash } from "@/components/LogoFlash";

export const metadata: Metadata = {
  title: "MY CCBee | Epoch Olympiad Foundation",
  description:
    "MY CCBee is a performance tracker and booster platform for Playgroup to Class 2. It connects parents, teachers and schools on one platform to track daily activity and performance, so the right action happens at the right time.",
};

export default function MyCCBeePage() {
  return (
    <>
      <LogoFlash
        src="/images/MY CC BEE.png"
        alt="MY CCBee"
        background="#fffdf4"
        glow="rgba(245, 179, 1, 0.22)"
        rule="#e0a300"
        width="min(78vw, 500px)"
      />
      <Header />
      <main>
        <CCBeeHero />
        <WhyCCBee />
        <TrackAndRoles />
        <LeadershipAndBooster />
        <ConnectedPlatform />
        <EarlyYearsAndTrust />
        <CCBeeVoices />
        <CCBeeFaq />
        <CCBeeCTA />
      </main>
      <Footer />
    </>
  );
}
