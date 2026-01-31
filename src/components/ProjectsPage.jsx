import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Projects from "./Projects";
import FotosGrid from "./FotosGrid";
import Menu from "./Menu";
import Footer from "./Footer";
import Contato from "./ContatoCTA";

const ProjectsPage = () => {
  return (
    <>
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="group relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <button
            type="button"
            className="relative px-6 py-3 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar
          </button>
        </Link>
      </div>
      <Projects />
      <Contato />
      <FotosGrid />
      <Footer />
    </>
  );
};

export default ProjectsPage;
