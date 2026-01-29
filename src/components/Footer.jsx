import img from "../assets/resources/favicon-32x32.png";

const Footer = () => {
  const sections = [
    {
      title: "Producto",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "API", href: "#" },
        { label: "Integraciones", href: "#" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Sobre nosotros", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreras", href: "#" },
      ],
    },
    {
      title: "Legales",
      links: [
        { label: "Privacidad", href: "#" },
        { label: "Términos", href: "#" },
        { label: "Seguridad", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { label: "Website", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ];

  return (
    <footer className="bg-dark-900 container mx-auto px-6 py-12 border-t border-white/10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={img} alt="Logo" className="w-7 h-7" />
            <h1 className="text-xl text-white">
              Invoice
              <span className="text-brand-600 font-medium">Flow</span>
              <span className="text-white">.</span>
            </h1>
          </div>
          <p className="text-sm text-gray-400">
            Simplificando las finanzas para freelancers
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-white">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <div key={`${section.title}-${link.label}`}>
                    <a
                      key={`${section.title}-${link.label}`}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-gray-500 text-center">
              © 2025 InvoiceFlow. Todos los derechos reservados.
            </p>
            <div className="flex flex-row items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
