import img from "../assets/resources/favicon-32x32.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-dark-900/60 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          <img src={img} alt="Logo" className="w-6 h-6" />
          <h1 className="text-xl font-medium tracking-tight text-white">
            Invoice
            <span className="text-brand-600 text-xl font-bold tracking-tight">
              Flow
            </span>
            <span className="text-white text-xl font-medium">.</span>
          </h1>
        </div>

        <nav className="hidden md:flex md:gap-4 lg:gap-8 items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Producto
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Precios
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-brand-300 transition-colors">
            Entrar
          </button>
          <button className="bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
            Probar gratis
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-dark-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Producto
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Precios
            </a>
          </nav>
          <hr className="border-white/10" />
          <div className="flex flex-col gap-3">
            <button className="text-gray-400 hover:text-white font-medium cursor-pointer">
              Entrar
            </button>
            <button className="bg-brand-600 text-white font-medium py-2 rounded-lg hover:bg-brand-500 cursor-pointer">
              Probar gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
