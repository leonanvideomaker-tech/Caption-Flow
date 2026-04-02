import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpandSection from "@/components/ExpandSection";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import DorSection from "@/components/DorSection";
import OQueESection from "@/components/OQueESection";
import FuncionalidadesSection from "@/components/FuncionalidadesSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import QuemSouEuSection from "@/components/QuemSouEuSection";
import ProvasSociaisSection from "@/components/ProvasSociaisSection";
import OfertaSection from "@/components/OfertaSection";
import FaqSection from "@/components/FaqSection";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <main>
        <HeroSection />
        <ExpandSection />
        <MarqueeRibbon />
        <DorSection />
        <OQueESection />
        <FuncionalidadesSection />
        <ComoFuncionaSection />
        <BeneficiosSection />
        <QuemSouEuSection />
        <ProvasSociaisSection />
        <OfertaSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
