import HeroSection from "@/components/HeroSection";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import AnteDepoisSection from "@/components/AnteDepoisSection";
import OQueESection from "@/components/OQueESection";
import FuncionalidadesSection from "@/components/FuncionalidadesSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import OQueVaiReceberSection from "@/components/OQueVaiReceberSection";
import ProvasSociaisSection from "@/components/ProvasSociaisSection";
import OfertaSection from "@/components/OfertaSection";
import FaqSection from "@/components/FaqSection";
import QuemSouEuSection from "@/components/QuemSouEuSection";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import DevViewportToggle from "@/components/DevViewportToggle";

export default function Home() {
  return (
    <>
      <RevealInit />
      <div id="__dev-viewport-root">
        <HeroSection />
        <MarqueeRibbon />
        <AnteDepoisSection />
        <OQueESection />
        <FuncionalidadesSection />
        <BeneficiosSection />
        <OQueVaiReceberSection />
        <ProvasSociaisSection />
        <OfertaSection />
        <FaqSection />
        <QuemSouEuSection />
        <CtaFinal />
        <Footer />
      </div>
      {process.env.NODE_ENV === "development" && <DevViewportToggle />}
    </>
  );
}
