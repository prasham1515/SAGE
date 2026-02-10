import HeroSection from "@/components/HeroSection";
import MainFigureSection from "@/components/MainFigureSection";
import AbstractSection from "@/components/AbstractSection";
import InfoSection from "@/components/InfoSection";
import DatasetsSection from "@/components/DatasetsSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import PeopleSection from "@/components/PeopleSection";
import CitationSection from "@/components/CitationSection";
import UniversityLogosSection from "@/components/UniversityLogosSection";
import AcknowledgementSection from "@/components/AcknowledgementSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MainFigureSection />
      <AbstractSection />
      <InfoSection />
      <DatasetsSection />
      <MethodologySection />
      <ResultsSection />
      <PeopleSection />
      <CitationSection />
      <AcknowledgementSection />
      <UniversityLogosSection />
    </div>
  );
};

export default Index;
