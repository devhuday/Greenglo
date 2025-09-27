// Datos de las marcas
const brands = [
  { name: "Enphase", logo: "./assets/Logos/Brands/Enphase.png" },
  { name: "Goodwe", logo: "./assets/Logos/Brands/Goodwe.png" },
  { name: "TWsolar", logo: "./assets/Logos/Brands/TWsolar.png" },
  { name: "TrinaSolar", logo: "./assets/Logos/Brands/TrinaSolar.png" },
  { name: "Growatt", logo: "./assets/Logos/Brands/Growatt.png" },
  { name: "JASolar", logo: "./assets/Logos/Brands/JASolar.png" },
  { name: "JinkoSolar", logo: "./assets/Logos/Brands/JinkoSolar.png" },
  { name: "Solis", logo: "./assets/Logos/Brands/Solis.png" },
  { name: "Srne", logo: "./assets/Logos/Brands/srne.png" },
  { name: "LONGI", logo: "./assets/Logos/Brands/LONGi.png" },
  { name: "Huawei", logo: "./assets/Logos/Brands/Huawei.png" },
];

export const BrandsCarousel = () => {
  const extendedBrands = [...brands, ...brands, ...brands, ...brands]; // duplicamos para loop infinito

  return (
    <div className="w-full flex justify-center py-12 bg-primary/100">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="lg:text-2xl text-xl font-poppins font-bold text-center mb-4 text-black">
          Trabajamos con las mejores marcas del mercado
        </h2>

        {/* Contenedor principal */}
        <div className="bg-[#8fb939] rounded-2xl p-6 overflow-hidden relative">
          <div className="carousel-track flex items-center gap-8 animate-slide">
            {extendedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-none min-w-[120px] h-[50px] flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-[140px] object-contain brightness-0  hover:brightness-100  transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            animation: slide 25s linear infinite;
            will-change: transform;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </div>
  );
};
