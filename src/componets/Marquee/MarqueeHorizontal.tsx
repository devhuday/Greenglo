export const MarqueeHorizontal = () => {
  const items = [
    "Energía Renovable",
    "Energía Solar",
    "Paneles Solares",
    "Inversores Solares",
    "Planeta Verde",
    "Almacenamiento de Batería",
  ];

  return (
    <div className="relative bg-transparent overflow-hidden ">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
               linear-gradient(rgba(34, 197, 94, 0.1) 10px, transparent 10px),
               linear-gradient(90deg, rgba(34, 197, 94, 0.1) 10px, transparent 10px)
             `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d3fc96] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent  via-[#d3fc96] to-transparent"></div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>

      <div className="flex animate-marquee whitespace-nowrap py-4 items-center relative z-10">
        {/* Primera iteración */}
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 group">
            <style>{`
              .text-stroke-green {
                -webkit-text-stroke: 0.5px;
                -webkit-text-fill-color: transparent;
        
            `}</style>
            <span
              className=" font-noto-sans-jp text-stroke-green text-[#dfffae] font-bold text-2xl md:text-3xl lg:text-4xl 
                           tracking-widest uppercase transition-all duration-500
                           group-hover:text-[#c9ff78] group-hover:tracking-[0.3em]
                            text-shadow-lg"
            >
              {item}
            </span>

            {/* Geometric separator */}
            <div className="mx-8 md:mx-12 flex items-center">
              <div
                className="w-3 h-3 bg-[#d3fc96] rotate-45 opacity-90 
                            group-hover:opacity-100 group-hover:scale-125 
                            transition-all duration-500 shadow-lg shadow-green-500/50"
              ></div>
              <div
                className="w-6 h-[2px] bg-gradient-to-r from-[#d3fc96] to-transparent ml-2
                            opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              ></div>
            </div>
          </div>
        ))}

        {/* Segunda iteración para loop infinito */}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center mx-6 group">
            <span
              className="text-slate-100 font-light text-2xl md:text-3xl lg:text-4xl 
                           tracking-widest uppercase transition-all duration-500
                           group-hover:text-green-400 group-hover:tracking-[0.2em]
                           font-mono text-shadow-lg"
            >
              {item}
            </span>

            {/* Geometric separator */}
            <div className="mx-8 md:mx-12 flex items-center">
              <div
                className="w-2 h-2 bg-green-900 rotate-45 opacity-90 
                            group-hover:opacity-100 group-hover:scale-125 
                            transition-all duration-500 shadow-lg shadow-green-500/50"
              ></div>
              <div
                className="w-8 h-px bg-gradient-to-r from-green-900 to-transparent ml-2
                            opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              ></div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};
