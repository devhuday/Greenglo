import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Logotipo from "../../assets/image/Logotipo2.png";
import Logotipo2 from "../../assets/image/Logotipo_1.png";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Nuevo estado para manejar dropdowns

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Inicio", href: "#inicio" },
    {
      name: "Páginas",
      href: "#paginas",
      hasDropdown: true,
      dropdownItems: ["Acerca de", "Equipo", "Historia"],
    },
    {
      name: "Servicios",
      href: "#servicios",
      hasDropdown: true,
      dropdownItems: ["Instalación", "Consultoría", "Mantenimiento"],
    },
    {
      name: "Blog",
      href: "#blog",
      hasDropdown: true,
      dropdownItems: ["Noticias", "Artículos", "Casos de Estudio"],
    },
    {
      name: "Proyecto",
      href: "#proyecto",
      hasDropdown: true,
      dropdownItems: ["Residencial", "Comercial", "Industrial"],
    },
    { name: "Contacto", href: "#contacto" },
  ];

  // Función para alternar dropdowns
  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // Función para alternar menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Cerrar dropdowns al abrir/cerrar menú móvil
  };

  useEffect(() => {
    console.log("Scroll actual:", scrollY);
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      } ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div
              className={`w-10 h-10 transition-colors duration-1000 bg-gradient-to-br from-[#a4cd9f] ${
                isScrolled ? "to-[#051806]" : "to-[#ffffff]"
              }  rounded-lg flex items-center justify-center`}
            >
              <img
                src={isScrolled ? Logotipo : Logotipo2}
                alt="Logotipo"
                className=" h-10 object-contain"
              />
            </div>
            <div>
              <h1
                className={`text-xl font-montserrat font-extrabold transition-colors duration-700 ease-out ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                <span className="text-[#7db64b]">GREEN</span>GLO
              </h1>
              <p
                className={`text-[11px] font-montserrat font-normal transition-colors duration-700 ease-out ${
                  isScrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                ENERGÍA RENOVABLE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`px-3 py-2 font-montserrat rounded-md text-sm font-normal flex items-center ${
                    isScrolled
                      ? "text-gray-800 hover:text-green-600"
                      : "text-white hover:text-[#7db64b]"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:rotate-180`}
                    />
                  )}
                </a>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-white font-duru-sans rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-10">
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className={`px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300 flex items-center ${
                isScrolled ? "text-gray-100" : "text-white"
              }`}
            >
              <Phone className="inline-block mr-2 h-4 w-4" />
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                  : "text-white hover:text-[#7db64b] hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 ${
              isScrolled ? "bg-white" : "bg-black/20 backdrop-blur-sm"
            } rounded-b-lg mt-2`}
          >
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-montserrat transition-colors duration-200 ${
                        isScrolled
                          ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                          : "text-white hover:text-[#7db64b] hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openDropdown === item.name
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-6 space-y-1 py-1">
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem}
                            href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                            className={`block px-3 py-2 text-xs font-duru-sans rounded-md transition-colors duration-200 ${
                              isScrolled
                                ? "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                                : "text-gray-200 hover:text-[#7db64b] hover:bg-white/5"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm font-montserrat transition-colors duration-200 ${
                      isScrolled
                        ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                        : "text-white hover:text-[#7db64b] hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-2">
              <a
                href="#contacto"
                className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
