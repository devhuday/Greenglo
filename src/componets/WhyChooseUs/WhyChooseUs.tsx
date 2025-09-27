import { Shield, Award, Users, CheckCircle } from "lucide-react";

const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
    title: "Experiencia Comprobada",
    description:
      "+10 años transformando hogares y empresas en Santa Marta con tecnología solar de vanguardia.",
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
    title: "Garantía Total",
    description:
      "Garantía de hasta 25 años en paneles solares y 10 años en inversores. Tu inversión está protegida.",
  },
  {
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
    title: "Equipo Certificado",
    description:
      "Ingenieros especializados y técnicos certificados en energías renovables con formación continua.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
    title: "Soluciones Personalizadas",
    description:
      "Cada proyecto es único. Diseñamos sistemas adaptados a tus necesidades específicas de consumo.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="py-8 sm:py-10 lg:py-12 bg-white">
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Adaptativo */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="flex justify-center sm:justify-start mb-4 sm:mb-1 px-2 sm:px-4 lg:px-8">
              <span className="bg-[#eeffcc] text-[#8fb939] text-sm sm:text-base lg:text-lg font-poppins font-semibold px-3 sm:px-4 py-1 rounded">
                Por qué elegirnos
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold font-poppins text-gray-900 mb-4 mt-6 sm:mt-8 lg:mt-10 leading-tight">
              Líderes en energía solar en Santa Marta
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl font-montserrat text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Somos la empresa de confianza para hogares y empresas que buscan
              independencia energética y sostenibilidad
            </p>
          </div>

          {/* Cards Grid - Completamente adaptativo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-5 lg:p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary rounded-full mb-4 sm:mb-5 lg:mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-[18px] font-cal-sans font-medium text-gray-900 mb-3 sm:mb-4 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certificaciones - Adaptativo */}
          <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Certificaciones y Acreditaciones
            </h3>
            
            {/* Layout adaptativo para certificaciones */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-12">
              <div className="bg-primary px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-lg w-full sm:w-auto">
                <span className="text-xs sm:text-sm font-cal-sans font-medium text-white whitespace-nowrap">
                  RETIE Certificado
                </span>
              </div>
              
              <div className="bg-primary px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-lg w-full sm:w-auto">
                <span className="text-xs sm:text-sm font-cal-sans font-medium text-white whitespace-nowrap">
                  Registro UPME
                </span>
              </div>
              
              <div className="bg-primary px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-lg w-full sm:w-auto">
                <span className="text-xs sm:text-sm font-cal-sans font-medium text-white whitespace-nowrap">
                  Registro OR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}