import { motion } from "framer-motion";
import Bg from "../../assets/image/welcomebg.jpg";
import { MarqueeHorizontal } from "../Marquee/MarqueeHorizontal";

export function HeroCard() {
  const botonwhatsapp = () => {
    const phoneNumber = "573136145611";
    const message = "¡Hola! Estoy interesado en obtener más información sobre sus servicios.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  }
  return (
    <section className="relative w-full h-[870px]  md:h-[900px] flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={Bg}
          alt="Paneles solares"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.span
          className="inline-block bg-[#8fb845] text-white px-4 py-1 rounded-full text-sm font-open-sans font-semibold mb-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Bienvenido a Global Green Energy
        </motion.span>

        <h1 className="text-5xl md:text-6xl font-poppins font-extrabold leading-tight">
          Energía Solar Sustentable
          <br />
          para un{" "}
          <span className="text-primary">
            Futuro Mejor
          </span>
        </h1>

        <p className="mt-6 font-montserrat font-light text-lg text-gray-200">
          Descubre cómo nuestras soluciones energéticas pueden transformar tu hogar o negocio. 
          Desde pequeñas instalaciones hasta sistemas de energía renovable complejos, estamos aquí para ayudarte.
        </p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            onClick={() => {
              botonwhatsapp();
            }}
            className="px-6 py-3 bg-transparent text-white font-montserrat font-semibold rounded-2xl shadow-md border-2 border-primary text-[15px] hover:bg-green-600 transition"
          >
            Cotiza tu sistema
          </button>
        </motion.div>
      </motion.div>
      <section className="absolute bottom-0 left-0 w-full z-10">
      <MarqueeHorizontal />
    </section>
    </section>
    
  );
}
