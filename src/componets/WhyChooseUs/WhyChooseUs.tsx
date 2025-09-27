import { Shield, Award, Users, CheckCircle } from "lucide-react";

const whyChooseUs = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Experiencia Comprobada",
    description:
      "+10 años transformando hogares y empresas en Santa Marta con tecnología solar de vanguardia.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Garantía Total",
    description:
      "Garantía de hasta 25 años en paneles solares y 10 años en inversores. Tu inversión está protegida.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Equipo Certificado",
    description:
      "Ingenieros especializados y técnicos certificados en energías renovables con formación continua.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Soluciones Personalizadas",
    description:
      "Cada proyecto es único. Diseñamos sistemas adaptados a tus necesidades específicas de consumo.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="py-10 bg-white">
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-start mb-1 px-8">
              <span className="bg-[#eeffcc] text-[#8fb939]  text-lg font-poppins font-semibold px-4 py-1 rounded">
                Por qué elegirnos
              </span>
            </div>
            <h2 className="text-[40px] lg:text-[40px] font-extrabold font-poppins text-gray-900 mb-4 mt-10">
              Líderes en energía solar en Santa Marta
            </h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
              Somos la empresa de confianza para hogares y empresas que buscan
              independencia energética y sostenibilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16  bg-secondary rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-cal-sans  font-medium text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Certificaciones y Acreditaciones
            </h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="bg-primary px-6 py-4 rounded-lg">
                <span className="text-sm font-cal-sans font-medium text-white">
                  RETIE Certificado
                </span>
              </div>
              <div className="bg-primary px-6 py-4 rounded-lg">
                <span className="text-sm font-cal-sans font-medium text-white">
                  Registro UPME
                </span>
              </div>
              <div className="bg-primary px-6 py-4 rounded-lg">
                <span className="text-sm font-cal-sans font-medium text-white">
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
