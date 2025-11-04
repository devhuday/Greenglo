import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faSolarPanel, faThumbsUp, faHeadset } from "@fortawesome/free-solid-svg-icons";

// Datos centralizados para facilitar mantenimiento
const impactData = [
  {
    id: 1,
    value: "+1,200kW",
    label: "Instalados",
    icon: faBolt,
  },
  {
    id: 2,
    value: "+50",
    label: "Proyectos",
    icon: faSolarPanel,
  },
  {
    id: 3,
    value: "98%",
    label: "Satisfacción",
    icon: faThumbsUp,
  },
  {
    id: 4,
    value: "24/7",
    label: "Soporte",
    icon: faHeadset,
  },
];

// Componente reutilizable para cada métrica
type ImpactMetricProps = {
  value: string;
  label: string;
  icon: any; // You can use IconDefinition from @fortawesome/fontawesome-svg-core for stricter typing
};

const ImpactMetric = ({ value, label, icon }: ImpactMetricProps) => (
  <div className="flex flex-col items-center justify-center group">
    <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
      {value}
    </div>
    <div className="flex items-center justify-center gap-1">
      <FontAwesomeIcon
        icon={icon}
        className="text-[15px] text-white transition-colors duration-300 group-hover:text-white"
      />
      <div className="text-white group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </div>
  </div>
);

export function Impact() {
  return (
    <section className="mt-6" aria-labelledby="impact-title">
      <div className="bg-gradient-to-br from-green-600 to-[#a2d349] rounded-2xl p-8 text-white shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactData.map((metric) => (
            <ImpactMetric
              key={metric.id}
              value={metric.value}
              label={metric.label}
              icon={metric.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}