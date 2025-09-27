import { ChevronDown } from "lucide-react";
const navLinks = [
  { name: "Inicio", path: "#" },
  { name: "Páginas", sub: ["Acerca de", "Equipo"] },
  { name: "Servicios", sub: ["Instalación", "Consultoría"] },
  { name: "Blog", sub: ["Artículos", "Noticias"] },
  { name: "Proyecto", sub: ["Portafolio", "Estudio de Caso"] },
  { name: "Contacto", path: "#" },
];

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-10">
        {navLinks.map((link, index) => (
          <li key={index} className="relative group">
            {link.sub ? (
              <>
                <button className="hover:text-[#8fb939] font-poppins focus:outline-none flex items-center gap-1">
                  {link.name}
                  <ChevronDown
                    className="transition-transform duration-300 group-hover:rotate-180"
                    size={16}
                  />
                </button>
                <ul className="absolute left-0 mt-2 w-40 bg-white border border-[#11971100] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {link.sub.map((sublink, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-[#86b033] hover:text-white rounded border border-transparent hover:border-[#86b033] transition-colors duration-300"
                    >
                      <a href="#" className="block">
                        {sublink}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href={link.path} className="hover:text-[#b9db3c]">
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
