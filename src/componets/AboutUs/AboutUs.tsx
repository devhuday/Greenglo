import Roullet2 from "../../assets/image/Roullet2.jpg";
import { Phone } from 'lucide-react'; 
import SolarEnergy  from '../../assets/Icons/SolarEnergy_01.svg?react';
import PanelSolar from '../../assets/Icons/SunEnergy.svg?react';
export const AboutUs = () => {
  return (
    <section className="bg-white py-15 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        {/* Tabs */}
        <div className="flex space-x-4 items-center">
          <button className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded">
            ABOUT
          </button>
          <span className="text-secondary font-semibold text-sm">GREENGLO SAS</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-poppins font-extrabold text-gray-900 leading-snug">
          Nuestra misión es hacer <br /> que la energía solar sea <br />accesible
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 font-montserrat font-normal text-base max-w-md">
          Estamos apasionados por transformar la forma en que alimentamos nuestro mundo. Como un
          proveedor líder de soluciones de energía renovable, estamos comprometidos a
          impulsar la transición hacia un futuro más limpio y sostenible.
        </p>

        {/* Stats */}
        <div className="flex space-x-14 mt-4  items-center gap-3">
          
          <div className="flex items-center gap-3">
            <PanelSolar className="w-10 h-10 text-[#8fb939] fill-current" />
            <div>
              <p className="text-[#8fb939] text-[20px] font-poppins font-bold ">+ 1200</p>
            <p className="text-[#000000] text-shadow-3xs text-[12px] font-poppins font-medium">kW instalados</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SolarEnergy className="w-12 h-12 text-[#8fb939] fill-current" />
            <div className="flex flex-col ">
              <p className="text-[#8fb939] text-[20px] font-poppins font-bold ">+ 50</p>
              <p className="text-[#000000] text-shadow-3xs text-[12px] font-poppins font-medium">proyectos</p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex items-center gap-6 mt-6">
          <button className="bg-secondary text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">
            Contactanos
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow bg-primary-light">
              <Phone className=" w-10 text-tertiary" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Llamanos 24/7</p>
              <p className="text-black font-bold">+57 3017535547</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={Roullet2}
          alt="Solar Engineers"
          className="rounded-lg shadow-lg"
        />

        {/* Years Experience Badge */}
        <div className="absolute justify-center bottom-4 left-4 bg-white border-4 border-[#b0ed378a] rounded-md px-2 py-2 shadow">
          <div className="flex flex-col items-center">
            <p className="text-[28px] font-poppins font-bold text-black">+10</p>
            <p className="text-gray-500 font-poppins text-sm text-center">Años de <br/>Experiencia</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
