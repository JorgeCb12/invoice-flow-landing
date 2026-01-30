import Card from "./Card";
import { ChartLine, Zap, Shield } from "lucide-react";

const Features = () => {
  const cards = [
    {
      id: 1,
      title: "Analíticas en tiempo real",
      description:
        "Visualiza tus ingresos y crecimiento al instante con gráficos interactivos.",
      icon: ChartLine,
      color: "text-brand-300",
    },
    {
      id: 2,
      title: "Facturacíon Rápida",
      description:
        "Crea facturas profesionales y envíalas a tus clientes en un clic.",
      icon: Zap,
      color: "text-yellow-300",
    },
    {
      id: 3,
      title: "Seguridad y Privacidad",
      description:
        "Tus datos financieros están encriptados y protegidos 24/7 con las mejores prácticas de seguridad.",
      icon: Shield,
      color: "text-green-300",
    },
  ];
  return (
    <section className="lg:px-10 xl:px-10 px-4">
      <div className="container mx-auto px-4 2xl:px-20 py-12 flex flex-col gap-6">
        <h2 className="text-center text-3xl font-bold text-white tracking-wider">
          CARACTERÍSTICAS
        </h2>
        <p className="text-center text-brand-600">TODO LO QUE NECESITAS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={
                index === 2
                  ? "md:col-span-2 md:px-20 lg:px-0 lg:col-span-1 md:flex md:justify-center"
                  : ""
              }
            >
              <Card
                title={item.title}
                description={item.description}
                icon={<item.icon size={26} />}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
