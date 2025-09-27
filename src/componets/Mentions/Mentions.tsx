import {Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, CheckCircle } from 'lucide-react';
import Logotipo from "../../assets/image/Logotipo.png";
const socialLinks = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Instagram },
  { href: "#", icon: Linkedin },
  { href: "#", icon: Twitter },
];
export function Mentions() {

  return (
    <div className="bg-white">

      {/* Footer completo */}
      <footer className="bg-primary/5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3">
                  <img src= {Logotipo}  alt="Logotipo" className=" h-10 object-contain" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">GREENGLO</div>
                  <div className="text-sm text-gray-600">ENERGÍA RENOVABLE</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Global Green Energy SAS es la empresa líder en soluciones de energía solar en Santa Marta y la región Caribe. 
                Transformamos hogares y empresas con tecnología renovable de última generación.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map(({ href, icon: Icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-terciary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-6">Nuestros Servicios</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Instalación de Paneles Solares</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Mantenimiento del Sistema</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Almacenamiento de Energía</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Sistemas de Respaldo</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Auditoría Energética</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Consultoría Solar</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p>Carrera 15 #22-58</p>
                    <p>Centro Histórico</p>
                    <p>Santa Marta, Magdalena</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-secondary mr-3" />
                  <a href="tel:+573017535547" className="text-gray-600 hover:text-green-400 transition-colors duration-300">
                    +57 301 753 5547
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary mr-3" />
                  <a href="mailto:info@greenglo.com.co" className="text-gray-600 hover:text-green-400 transition-colors duration-300">
                    info@greenglo.com.co
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Horarios de Atención</h4>
                <div className="text-sm text-gray-600">
                  <p>Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                  <p>Sábados: 8:00 AM - 4:00 PM</p>
                  <p>Emergencias: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea separadora */}
          <div className="border-t-[3px] border-primary mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-800 text-sm mb-4 md:mb-0">
                © 2024 Global Green Energy SAS (GreenGlo). Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Política de Privacidad</a>
                <a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Términos y Condiciones</a>
                <a href="#" className="text-gray-600 hover:text-green-400 transition-colors duration-300">Aviso Legal</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}