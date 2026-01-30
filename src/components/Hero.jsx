import img from "../assets/resources/image.svg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-dark-900 min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-brand-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            AUTOMATIZA TUS <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-brand-600">
              INGRESOS
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-brand-200 font-medium tracking-wide uppercase opacity-90">
            Concéntrate en tu código.
          </p>
        </div>

        <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
          El sistema operativo financiero todo en uno para freelancers y
          agencias. Crea facturas, registra gastos y gestiona clientes en
          segundos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-[200px] sm:w-auto">
          <button className="bg-brand-600 text-white font-medium py-2 px-6 rounded-full hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] cursor-pointer">
            EMPIEZA GRATIS
          </button>
          <button className="border border-white/10 bg-white/5 text-white font-medium py-2 px-6 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer">
            VER DEMO
          </button>
        </div>

        <div className="relative w-full max-w-5xl ">
          <div className="absolute -inset-1 bg-linear-to-r from-brand-500 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>

          <img
            src={img}
            alt="Dashboard Preview"
            className="relative rounded-lg px-4 py-2 border border-white/10 shadow-xl w-full bg-dark-900 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
