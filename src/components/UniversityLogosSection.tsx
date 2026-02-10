import asuLogo from "@/assets/asu.png";
import upennLogo from "@/assets/upenn.png";

const UniversityLogosSection = () => {
  return (
    <section className="py-5 px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          <a href="https://engineering.asu.edu/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
            <img 
              src={asuLogo} 
              alt="Arizona State University" 
              className="h-28 md:h-36 w-auto object-contain"
            />
          </a>
          <a href="https://www.cis.upenn.edu/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
            <img 
              src={upennLogo} 
              alt="University of Pennsylvania" 
              className="h-28 md:h-36 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogosSection;
