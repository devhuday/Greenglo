import { Star, User } from "lucide-react";
import {Impact} from "./impact"
import { Gallery } from "../Gallery/Gallery";
export const SuccessCases = () => {
  const successCases = [
    {
      name: "Carlos Martínez",
      company: "Clinica Surgifast.",
      clientImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      installationImage: "./assets/image/Installations/ComercialInst_1.jpg",
      rating: 5,
      text: "Gracias a Greenglo, hemos reducido nuestros costos energéticos en un 70%. La instalación fue impecable y el servicio post-venta excepcional.",
      capacity: "32 kW",
      savings: "70%",
      panels: 53,
      projectType: "Comercial",
    },
    {
      name: "María Elena Rodríguez",
      company: "Residencia Familiar",
      clientImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      installationImage: "./assets/image/Installations/ResidencialInst_1.jpg",
      rating: 5,
      text: "Nuestra casa ahora es completamente autosuficiente energéticamente. El equipo de Greenglo se encargó en cada paso del proceso y no tuvimos que preocuparnos por nada.",
      capacity: "8.5 kW",
      savings: "95%",
      panels: 15,
      projectType: "Residencial",
    },
    {
      name: "Aguas del Magdalena",
      company: "Acueducto de Ariguani",
      clientImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      installationImage: "./assets/image/Installations/AgricolaInst_1.jpg",
      rating: 5,
      text: "El sistema de bombeo solar ha transformado nuestra producción y ha reducido costos. Excelente trabajo y servicio profesional de principio a fin.",
      capacity: "108 kW",
      savings: "65%",
      panels: 180,
      projectType: "Agrícola",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center py-2 bg-[linear-gradient(180deg,_#FAFFEB_80%,_#FFFFFF_95%)] ">
      <section className="py-10 bg-transparent w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-[#eeffcc] text-[#8fb939]  text-lg font-poppins font-semibold px-4 py-1 rounded mb-4 inline-block">
              Casos de Éxito
            </span>
            <h2 className="text-4xl font-poppins font-extrabold text-gray-900 mb-6">
              Creamos proyectos que transforman vidas
            </h2>
            <p className="text-[20px] font-montserrat text-gray-600 max-w-3xl mx-auto">
              Más de 50 clientes satisfechos han transformado su vida gracias a
              nuestras soluciones solares, reduciendo costos y contribuyendo a
              un futuro sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successCases.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Imagen de la instalación */}
                <div className="relative">
                  <img
                    src={project.installationImage}
                    alt={`Instalación solar - ${project.company}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.projectType === "Comercial"
                          ? "bg-green-600 text-white"
                          : project.projectType === "Residencial"
                          ? "bg-green-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {project.projectType}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/100 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-2xl font-bold text-primary">
                        {project.savings}
                      </span>
                      <span className="text-sm text-gray-600 ml-1">ahorro</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Especificaciones técnicas */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#d7ffb2] p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-800">
                        {project.capacity}
                      </div>
                      <div className="text-sm text-green-800">Capacidad</div>
                    </div>
                    <div className="bg-[#d7ffb2] p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-800">
                        {project.panels}
                      </div>
                      <div className="text-sm text-green-800">Paneles</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonio */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{project.text}"
                  </p>

                  {/* Cliente */}
                  <div className="flex items-center pt-4 border-t bg border-gray-100">
                    <div className=" p-1 rounded-full mr-4">
                      <User className="w-10 h-6 text-green-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {project.name}
                      </h4>
                      <p className="text-sm text-gray-500">{project.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Gallery />  
          {/* Estadísticas de impacto */}
          <Impact />
        </div>
      </section>
    </div>
  );
};
