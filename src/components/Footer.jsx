import img from "../assets/resources/favicon-32x32.png";
import { Github, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Producto",
      links: ["Features", "Pricing", "API", "Integraciones"],
    },
    {
      title: "Compañía",
      links: ["Sobre nosotros", "Blog", "Carreras", "Contacto"],
    },
    {
      title: "Legales",
      links: ["Privacidad", "Términos", "Seguridad", "Cookies"],
    },
  ];

  return (
    <footer className="relative  px-4 bg-dark-900 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-linear-to-r from-transparent via-brand-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={img}
                alt="Logo"
                className="w-8 h-8 rounded-lg shadow-lg shadow-brand-500/20"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Invoice<span className="text-brand-500">Flow</span>.
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              La plataforma definitiva para freelancers que quieren automatizar
              sus finanzas y recuperar su tiempo libre.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase opacity-90">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 InvoiceFlow Inc. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors hover:scale-110"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
