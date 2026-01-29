const SocialProof = () => {
  const logos = [
    { name: "ACME", font: "font-serif" },
    { name: "QUANTUM", font: "font-mono" },
    { name: "CELESTIAL", font: "font-sans tracking-widest" },
    { name: "APEX", font: "font-black italic" },
    { name: "ECHO", font: "font-bold tracking-tighter" },
  ];

  return (
    <section className="pt-12 pb-20 border-b-2 border-white/5 container mx-auto bg-dark-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Trusted by innovative teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 cursor-default">
          {logos.map((logo) => (
            <h3
              key={logo.name}
              className={`text-2xl md:text-3xl  text-gray-400 ${logo.font}`}
            >
              {logo.name}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
