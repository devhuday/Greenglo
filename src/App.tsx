import { Header } from "./componets/Header/Header";
import { HeroCard } from "./componets/Herosection/HeroCard";
import { AboutUs } from "./componets/AboutUs/AboutUs";
import { BrandsCarousel } from "./componets/CarouselBrands/CarouselBrands";
import { ServicesSection } from "./componets/Services/Services";
import { Mentions} from "./componets/Mentions/Mentions";
import {SuccessCases} from "./componets/successCases/successCases";
import { WhyChooseUs } from "./componets/WhyChooseUs/WhyChooseUs";
import { CallToOption } from "./componets/CallToOption/CallToOption";
//import { Gallery } from "./componets/Gallery/Gallery";
export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50  shadow-xl ">
        <Header />
      </header>

      {/* Main content */}
      <main className="flex-1 ">
        <section >
          <HeroCard />
        </section>

        {/* Sección de contenido separada */}
        <section className="bg-gray-100">
          <AboutUs  />
        </section>
        <section>
          <ServicesSection />
        </section>
        <section>
          <BrandsCarousel />
        </section>
        <section>
          <SuccessCases />
        </section>
        
        <section>
          <WhyChooseUs />
        </section>
        <section>
          <CallToOption />
        </section>
      </main>

      {/* Footer */}
      <footer >
        <section>
          <Mentions />
        </section>
      </footer>
    </div>
  );
};