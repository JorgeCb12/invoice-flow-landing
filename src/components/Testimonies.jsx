import { Quote } from "lucide-react";
import foto1 from "../assets/resources/foto1.jpg";
import foto2 from "../assets/resources/foto2.jpg";
import foto3 from "../assets/resources/foto3.jpg";

const Testimonies = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "Como agencia pequeña, necesitábamos algo simple pero potente. La gestión de clientes y facturación es rapidísima, y el dashboard es muy claro.",
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
    <section className="container mx-auto px-4 py-16 border-b-2 border-white/10">
      <span className="text-white text-2xl font-bold block mb-8 text-center">
        LOVED BY FREELANCERS WORLDWIDE
      </span>
      <div className="gap-8 p-2 rounded-lg max-w-[300px] mx-auto">
        <div className="flex items-center gap-2"></div>
        <div className="grid grid-cols-1 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 bg-brand-900/10 border border-brand-800 py-8 px-2 rounded-lg"
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

              <Quote className="w-5 h-5 text-brand-400 flex self-start rotate-180" />
              <p className="text-white/80 text-sm text-left ">
                {testimonial.text}
              </p>
              <Quote className="w-5 h-5 text-brand-400 flex self-end" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
