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
    <div 
      className="relative w-full"
      style={{
        backgroundImage: "url('./assets/image/Installations/ComercialInst_2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10">
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Header - Adaptativo */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                ¿Listo para hacer el cambio a energía solar?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Contáctanos hoy mismo para una consulta gratuita y descubre cómo
                podemos ayudarte a ahorrar en tus facturas de energía.
              </p>
            </div>

            {/* Grid de CTAs - Completamente responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ctas.map(({ icon: Icon, iconBg, iconColor, title, description, buttonText, buttonBg }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 text-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 mx-auto w-full max-w-sm sm:max-w-none"
                >
                  {/* Icono adaptativo */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6`}
                  >
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${iconColor}`} />
                  </div>
                  
                  {/* Título adaptativo */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                    {title}
                  </h3>
                  
                  {/* Descripción adaptativa */}
                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                    {description}
                  </p>
                  
                  {/* Botón adaptativo */}
                  <button
                    className={`w-full ${buttonBg} text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base hover:shadow-lg active:scale-95`}
                  >
                    <span className="mr-2">{buttonText}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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