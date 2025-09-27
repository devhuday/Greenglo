import {BatteryCharging, SolarPanel, Wrench} from "@phosphor-icons/react";

const services = [
  {
    icon: <SolarPanel size={48} className="text-[#8fb845]" />,
    title: "Instalación de paneles solares",
    description: "Nos especializamos en la instalación de paneles solares en propiedades residenciales para reducir significativamente los costos de energía.",
    highlight: "Instalación"
  },
  {
    icon: <Wrench size={48} className="text-[#8fb939]" />,
    title: "Mantenimiento del Sistema",
    description: "Nuestro equipo de expertos inspecciona y mantiene a fondo su sistema solar para un rendimiento óptimo.",
    highlight: "Mantenimiento"
  },
  {
    icon: <BatteryCharging size={48} className="text-[#8fb939]" />,
    title: "Almacenamiento de Energía",
    description: "Ofrecemos soluciones avanzadas de almacenamiento de baterías que le permiten almacenar el exceso de energía solar generada durante el día.",
    highlight: "Almacenamiento"
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-[#ffffff] py-16 relative overflow-hidden">
      {/* Textura de papel */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, green 1.2px, transparent 1px),
            radial-gradient(circle at 40% 20%, green 1px, transparent 0.5px),
            radial-gradient(circle at 80% 80%, green 0.8px, transparent 0.8px),
            radial-gradient(circle at 60% 70%, green 0.3px, transparent 0.3px)
          `,
          backgroundSize: '60px 60px, 30px 30px, 45px 45px, 25px 25px',
          backgroundPosition: '0 0, 15px 15px, 30px 30px, 45px 45px'
        }}></div>
      </div>
      
      {/* Ondas geométricas sutiles */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M0,150 Q50,100 100,150 T200,150" stroke="white" strokeWidth="0.8" fill="none" opacity="0.2"/>
              <circle cx="50" cy="75" r="2" fill="white" opacity="0.4"/>
              <circle cx="150" cy="125" r="1.5" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>
      
      {/* Título de la sección */}
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center relative z-10">
        <div className="flex justify-start mb-1 px-8">
          <span className="bg-[#eeffcc] text-[#8fb939]  text-lg font-poppins font-semibold px-4 py-1 rounded">
            Nuestros Servicios
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-dark mb-4 py-7">
          Gama completa de servicios de energía solar diseñados para
          satisfacer las necesidades de nuestros clientes
        </h2>
        
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/20 relative overflow-hidden"
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Badge con número */}
            <div className="absolute top-4 right-4 bg-[#8fb939] text-white text-xs font-montserrat font-bold px-2 py-1 rounded-full">
              0{index + 1}
            </div>
            
            {/* Contenedor del icono mejorado */}
            <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#ddfb9e] to-[#d8ec9f] group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <div className="group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            
            {/* Título con gradiente */}
            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#8fb939] transition-colors duration-300">
              <span className="bg-gradient-to-r from-black to-[#464646] bg-clip-text text-transparent font-poppins group-hover:from-[#7da632] group-hover:to-[#7da632]">
                {service.title}
              </span>
            </h3>
            
            {/* Descripción mejorada */}
            <p className="text-gray-600 font-montserrat leading-relaxed text-sm mb-4">
              {service.description}
            </p>
            
            {/* Indicador de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
              <div 
                className="bg-gradient-to-r from-[#8fb939] to-[#7da632] h-1 rounded-full transition-all duration-1000 group-hover:w-full"
                style={{ width: `${(index + 1) * 25}%` }}
              ></div>
            </div>
            
            {/* Call-to-action sutil */}
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#8fb939] text-sm font-semibold">Saber más</span>
              <svg className="w-4 h-4 ml-2 text-[#8fb939] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradiente decorativo superior */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/8 to-transparent"></div>
      
      {/* Gradiente decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/5 to-transparent"></div>
    </section>
  );
};