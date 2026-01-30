import PrecingCard from "./PrecingCard";

const Precing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      desc: "Para probar la plataforma",
      price: "$0",
      features: ["3 facturas mensuales", "1 usuario", "Soporte básico"],
      button: "Empezar gratis",
      bgClass: "bg-transparent",
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      desc: "Para freelancers y pequeñas empresas",
      price: "$19.99",
      features: [
        "Facturación ilimitada",
        "Pagos online",
        "Análisis de ventas",
        "Soporte prioritario",
      ],
      button: "Mejorar a Pro",
      bgClass: "bg-brand-600",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      desc: "Para empresas grandes",
      price: "$49.99",
      features: [
        "Todo lo del plan Pro",
        "Usuarios ilimitados",
        "Reportes avanzados",
        "Integraciones personalizadas",
        "Soporte dedicado 24/7",
      ],
      button: "Contactar ventas",
      bgClass: "bg-brand-600",
      popular: false,
      gridSpan: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <section className="py-12 lg:px-20 xl:px-20  px-4">
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-2xl font-bold text-white text-center">
          PLANES SIMPLES PARA{" "}
          <span className="text-brand-500">CRECER CONTIGO</span>
        </h2>
      </div>
      <div className="container mx-auto xl:px-20 px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {plans.map((plan) => (
            <PrecingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precing;
