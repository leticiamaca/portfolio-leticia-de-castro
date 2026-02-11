import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Curriculo from "../assets/CV-LETICIA-CASTRO.pdf"

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { label: "Sobre mim", href: "#sobre" },
    { label: "Desenhos", href: "#desenhos" },
    { label: "Projetos", to: "/projetos" },
    { label: "Entre em contato", to: "/contato" },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between  p-6">
        <ul className="flex items-center gap-8 text-white/60 uppercase font-semibold text-[11px] hover:*:text-white transition-colors">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-white transition-colors duration-300"
            >
              {item.to ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Botão Download CV - Desktop */}
        <a
          href={Curriculo}
          download="CV-LETICIA-CASTRO.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[11px] uppercase font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Baixar CV
        </a>
      </div>

      {/* Cabecalho mobile*/}
      <div className="lg:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Modal para celular/mobile */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-blue-800/10 border border-blue-500/10"
            onClick={() => setIsOpen(false)}
          />

          {/* Conteúdo Modal */}
          <div
            className={`absolute right-0 top-0 h-full w-[280px] backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-l border-white/10 shadow-2xl transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Botão de fechar*/}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                aria-label="Fechar menu"
              >
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* itens do menu */}
            <nav className="px-6 mt-8">
              <ul className="space-y-6">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="transform transition-all duration-300 hover:translate-x-2"
                    style={{
                      animation: isOpen
                        ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="block text-white/70 hover:text-white uppercase font-semibold text-sm tracking-wider transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-white/70 hover:text-white uppercase font-semibold text-sm tracking-wider transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Botão Download CV - Mobile */}
              <div className="mt-12">
                <a
                   href={Curriculo}
                   download="CV-LETICIA-CASTRO.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm uppercase font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: isOpen
                      ? "slideIn 0.3s ease-out 0.4s both"
                      : "none",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Baixar Currículo
                </a>
              </div>
            </nav>

            {/* icones */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
