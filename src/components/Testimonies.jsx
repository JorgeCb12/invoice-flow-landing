import { Quote } from "lucide-react";
import foto1 from "../assets/resources/foto1.jpg";
import foto2 from "../assets/resources/foto2.jpg";
import foto3 from "../assets/resources/foto3.jpg";

const Testimonies = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "Somos una agencia pequeña y valoramos la simplicidad. Con esta plataforma, clientes y facturación se gestionan en minutos, y el dashboard nos da control total.",
      cargo: "CEO de Agencia Digital",
      image: foto1,
    },
    {
      name: "María G.",
      text: "Pasé de perder tiempo con Excel a tener control total de mis finanzas en minutos. Es justo lo que necesitaba para escalar sin complicaciones.",
      cargo: "Freelance Diseñadora",
      image: foto2,
    },
    {
      name: "Paola R.",
      text: "Antes llevaba facturas y gastos en tres herramientas distintas. Ahora lo tengo todo en un solo lugar y ahorro varias horas a la semana.",
      cargo: "Autónoma de Marketing",
      image: foto3,
    },
  ];
  return (
    <section className="container mx-auto px-6 lg:px-10 2xl:px-20 py-16">
      <span className="text-white text-2xl font-bold block mb-8 text-center">
        LOVED BY FREELANCERS <span className="text-brand-500">WORLDWIDE</span>
      </span>
      <div className="gap-8 p-2 rounded-lg md:max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full items-center justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col xl:max-w-[400px] h-full items-center gap-4 bg-brand-900/10 border border-brand-800 hover:shadow-lg hover:-translate-y-1 hover:shadow-brand-600/20 transition-all duration-300 py-8 px-2 rounded-lg ${
                index === 2
                  ? "md:col-span-2 md:px-20 lg:px-0 lg:col-span-1 md:flex md:flex-col md:items-center md:justify-center md:border md:border-brand-800 md:py-8 md:gap-2"
                  : ""
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-200"
              />
              <p className="text-white text-base font-semibold text-center">
                {testimonial.name}
              </p>
              <p className="text-white/70 text-xs text-center">
                {testimonial.cargo}
              </p>

              <Quote className="w-5 h-5 relative top-6 left-1 text-brand-400 flex xl:w-6 xl:h-6 xl:-left-2 xl:ml-10 self-start rotate-180" />
              <p className="text-white/80 xl:max-w-[300px] text-sm px-8 text-left ">
                {testimonial.text}
              </p>
              <Quote className="w-5 h-5 relative bottom-8 -left-4 text-brand-400 flex xl:w-6 xl:h-6 xl:-left-4 xl:mr-10 self-end" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
