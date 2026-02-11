import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function contatoCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6">

    

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Conteúdo */}
      <div className="relative max-w-4xl mx-auto text-center">
       

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase">
          Transforme Sua{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent uppercase">
            Ideia em Realidade
          </span>
        </h2>

        <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
          Estou pronta para ajudar a criar soluções
          incríveis. Entre em contato e vamos começar!
        </p>

        {/* Botão animado */}
        <div className="relative inline-block group">
          {/*  efeito glow (hover botão)*/}
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

          <Link to="/contato">
            <button className="relative px-8 py-4 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            <svg
              className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg">Entrar em Contato</span>
          </button>
            </Link>
        </div>

        {/* Info adicional */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-blue-200/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Resposta rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>100% gratuito</span>
          </div>
        </div>

        {/* Elemento decorativo */}
        <div className="mt-16 flex justify-center gap-2 text-cyan-400/40 font-mono text-sm">
          <span className="opacity-60">{"{ "}</span>
          <span className="opacity-80">contact</span>
          <span className="opacity-60">{" }"}</span>
        </div>
      </div>
    </section>
  );
}
