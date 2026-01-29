import img from "../assets/resources/image.png";

const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-32 ">
      <div className="container relative overflow-hidden mx-auto h-full px-2 md:px-6 flex items-start justify-between">
        <div className="flex  flex-col py-10 md:flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="absolute z-0 top-1/3 left-1/1 transform -translate-x-1/2 -translate-y-1/2 w-46 h-46 bg-linear-to-r from-white/10 shadow-2xl to-brand-600 blur-3xl rounded-full flex items-center justify-center"></div>
          <div className="absolute z-0 top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-46 h-46 bg-linear-to-r from-white/10 shadow-2xl to-brand-600 blur-3xl rounded-full flex items-center justify-center"></div>
          <div className="flex flex-col gap-2 px-4 py-2">
            <h1 className="text-4xl font-medium max-w-[320px] text-center md:text-left">
              <span className="font-medium ">AUTOMATIZA TUS </span>
              <span className="font-semibold text-brand-600 tracking-wider">
                INGRESOS
              </span>
            </h1>
            <p className="bg-linear-to-r py-2 tracking-wider text-gray-400 text-base text-center md:text-left">
              CONCENTRÁTE EN TU{" "}
              <span className="font-semibold text-brand-600">CÓDIGO</span>.
            </p>
          </div>
          <div>
            <p className="text-gray-300 text-base font-light text-center max-w-[300px] md:text-left py-2 relative z-10">
              El sistema operativo financiero todo en uno para freelancers y
              agencias. Crear facturas, registrar los gastos y gestionar los
              clientes en segundos, no en horas.
            </p>
          </div>
          <div className="flex gap-2 py-4 relative z-10">
            <button className="bg-linear-to-r from-brand-600 to-brand-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
              EMPIEZA GRATIS
            </button>
            <button className="bg-black/5 border border-white/10 text-white text-sm font-medium px-5 py-1 rounded-full hover:bg-black-500 transition-all shadow-lg shadow-black-500/20">
              VER DEMO
            </button>
          </div>
          <div className="py-4 px-1 w-full">
            <img
              src={img}
              alt="Preview del dashboard"
              className="rounded-lg w-full max-h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
