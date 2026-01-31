import React from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";

export default function bannerCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#16275c40] to-[#002b5880] py-24 px-6">
      {/* Efeitos de luz de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Conteúdo */}
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-400/30 backdrop-blur-sm">
            Portfólio
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semiBold mt-10 mb-5 text-[#fff] uppercase tracking-[0.5rem]">
          Veja Meus <span className="text-cyan-500">Projetos</span>
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
          Explore uma coleção de projetos que demonstram minhas habilidades em desenvolvimento web, design e resolução de problemas
        </p>

        {/* Botão animado */}
        <div className="relative inline-block group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          
          <Link to="/projetos">
            <button className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            <span className="text-lg">Ver Projetos</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
            </Link>
            
            
        </div>

        {/* Código decorativo */}
        <div className="mt-16 flex justify-center gap-2 text-blue-400/40 font-mono text-sm">
          <span className="opacity-60">{'<'}</span>
          <span className="opacity-80">dev</span>
          <span className="opacity-60">{'/>'}</span>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}

//a função ja tem o export default em cima