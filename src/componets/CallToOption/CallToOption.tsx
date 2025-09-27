import { Phone, Users, MapPin, ArrowRight } from "lucide-react";

const ctas = [
  {
    icon: Phone,
    iconBg: "bg-[#eeffcc]",
    iconColor: "text-[#8fb939]",
    title: "Cotización Gratuita",
    description: "Recibe una evaluación personalizada de tu consumo energético sin costo",
    buttonText: "Cotizar ahora",
    buttonBg: "bg-[#A5C466] hover:bg-[#8fb939]",
  },
  {
    icon: Users,
    iconBg: "bg-[#eeffcc]",
    iconColor: "text-[#8fb939]",
    title: "Asesoría Técnica",
    description: "Habla con nuestros ingenieros especializados sobre tu proyecto",
    buttonText: "Agendar cita",
    buttonBg: "bg-[#A5C466] hover:bg-[#8fb939]",
  },
  {
    icon: MapPin,
    iconBg: "bg-[#eeffcc]",
    iconColor: "text-[#8fb939]",
    title: "Visita Técnica",
    description: "Evaluación presencial de tu propiedad para el mejor diseño",
    buttonText: "Programar visita",
    buttonBg: "bg-[#A5C466] hover:bg-[#8fb939]",
  },
];

export const CallToOption = () => {
  return (
    <div className="relative p-2 w-full bg-[url('./assets/image/Installations/ComercialInst_2.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <section className="py-10 w-full">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-poppins font-bold text-terciary  mb-4">
              ¿Listo para hacer el cambio a energía solar?
            </h2>
            <p className="text-lg font-montserrat font-normal text-white mb-8">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo
              podemos ayudarte a ahorrar en tus facturas de energía.
            </p>

            {/* Grid de CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ctas.map(({ icon: Icon, iconBg, iconColor, title, description, buttonText, buttonBg }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 mb-6">{description}</p>
                  <button
                    className={`w-full ${buttonBg} text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center`}
                  >
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
