import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JoinCouncilHero } from "@/components/advisory/JoinCouncilHero";
import { JoinCouncilRoles } from "@/components/advisory/JoinCouncilRoles";
import { JoinCouncilSelection } from "@/components/advisory/JoinCouncilSelection";

export const metadata: Metadata = {
  title: "Become a Part of Our Advisory Council | Epoch Olympiad Foundation",
  description:
    "Epoch Olympiad Foundation invites distinguished leaders from academia, institutions and society to join its Advisory Council as Patron-in-Chief, Honorary Jury Member or Chief Academic Ambassador.",
};

export default function BecomeAnAdvisorPage() {
  return (
    <>
      <Header />
      <main>
        <JoinCouncilHero />
        <JoinCouncilRoles />
        <JoinCouncilSelection />
      </main>
      <Footer />
    </>
  );
}
