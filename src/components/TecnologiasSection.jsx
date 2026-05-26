import { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { IconContext } from "react-icons";
import {
  DiHtml5, DiCss3, DiPython, DiWordpress, DiPhotoshop,
  DiReact, DiJava, DiTrello, DiGithubBadge,
} from "react-icons/di";
import {
  SiJavascript, SiUnity, SiTailwindcss, SiTypescript,
  SiAngular, SiInsomnia, SiSupabase, SiNodedotjs
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { PiFigmaLogo } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

const technologies = [
  { name: "HTML",        icon: <DiHtml5 /> },
  { name: "CSS",         icon: <DiCss3 /> },
  { name: "JAVASCRIPT",  icon: <SiJavascript /> },
  { name: "UNITY",       icon: <SiUnity /> },
  { name: "C SHARP",     icon: <TbBrandCSharp /> },
  { name: "REACT",       icon: <DiReact /> },
  { name: "TAILWIND",    icon: <SiTailwindcss /> },
  { name: "ANGULAR",     icon: <SiAngular /> },
  { name: "TYPESCRIPT",  icon: <SiTypescript /> },
  { name: "JAVA",        icon: <DiJava /> },
  { name: "FIGMA",       icon: <PiFigmaLogo /> },
  { name: "PHOTOSHOP",   icon: <DiPhotoshop /> },
  { name: "TRELLO",      icon: <DiTrello /> },
  { name: "GITHUB",      icon: <DiGithubBadge /> },
  { name: "VSCODE",      icon: <VscVscode /> },
  { name: "INSOMNIA",    icon: <SiInsomnia /> },
  { name: "SUPABASE",    icon: <SiSupabase /> },
  { name: "NODE.JS",    icon: <SiNodedotjs /> },
];

const COLS = 3;         // colunas do grid desktop
const ROWS_VISIBLE = 3; // linhas visíveis por vez no desktop
const ROW_HEIGHT = 170; // 150px card + 20px gap

export default function Tecnologias() {
  const containerRef = useRef(null);

  // Mobile
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileVisible = 3;
  const mobileMax = technologies.length - mobileVisible;
  const translateAmount = mobileIndex * 136;

  // Desktop
  const [desktopRow, setDesktopRow] = useState(0);
  const totalRows = Math.ceil(technologies.length / COLS);
  const desktopMax = totalRows - ROWS_VISIBLE;
  const desktopTranslate = desktopRow * ROW_HEIGHT;

  return (
    <IconContext.Provider value={{ color: "white", size: "70" }}>
      <section
        id="tecnologias"
        className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
      >
        <h1 className="text-2xl text-center font-bold mb-6 lg:mb-10 text-white uppercase tracking-[0.5rem]">
          Tecnologias
        </h1>
        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto text-center xl:mb-10 md:mb-25">
          Tecnologias das quais domino e as que estou estudando
        </p>

        {/* Desktop: Grid com carrossel vertical */}
        <div className="hidden lg:flex flex-col items-center gap-4 w-full max-w-7xl">
          {/* Seta para cima */}
          <button
            onClick={() => setDesktopRow((prev) => Math.max(prev - 1, 0))}
            disabled={desktopRow === 0}
            className="bg-[#002b58] disabled:opacity-0 disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 hover:shadow-[0_0_20px_#4b6aa1]"
            aria-label="Ver tecnologias anteriores"
          >
            <ChevronUp size={24} />
          </button>

          {/* Container com overflow hidden */}
          <div
            className="overflow-hidden w-full"
            style={{ height: `${ROWS_VISIBLE * ROW_HEIGHT - 20}px` }}
          >
            <div
              className="grid grid-cols-2 xl:grid-cols-3 gap-5 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${desktopTranslate}px)` }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border border-[#002b58] rounded-lg flex items-center justify-around p-10 h-[150px] transition-all duration-300 hover:border-white hover:shadow-[0_0_50px_#4b6aa1]"
                >
                  <div className="w-[70px] flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-white text-lg font-medium ml-4">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Seta para baixo */}
          <button
            onClick={() => setDesktopRow((prev) => Math.min(prev + 1, desktopMax))}
            disabled={desktopRow >= desktopMax}
            className="bg-[#002b58] disabled:opacity-0 disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 hover:shadow-[0_0_20px_#4b6aa1]"
            aria-label="Ver mais tecnologias"
          >
            <ChevronDown size={24} />
          </button>

          {/* Indicador de posição */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: desktopMax + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setDesktopRow(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === desktopRow
                    ? "bg-white w-6"
                    : "bg-[#002b5860] hover:bg-[#002b5860]"
                }`}
                aria-label={`Ir para grupo ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Carrossel vertical */}
        <div className="lg:hidden relative w-full max-w-md mt-16">
          <button
            onClick={() => setMobileIndex((prev) => Math.max(prev - 1, 0))}
            disabled={mobileIndex === 0}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 bg-[#002b58] disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 hover:shadow-[0_0_20px_#4b6aa1]"
            aria-label="Tecnologia anterior"
          >
            <ChevronUp size={24} />
          </button>

          <div className="relative h-[400px] overflow-hidden">
            <div
              ref={containerRef}
              className="flex flex-col gap-4 transition-transform duration-500 ease-out px-2"
              style={{ transform: `translateY(-${translateAmount}px)` }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border border-[#002b5860] rounded-lg flex items-center justify-around p-6 h-[120px] shrink-0 transition-all duration-300 hover:border-white hover:shadow-[0_0_30px_#4b6aa1]"
                >
                  <div className="w-[50px] flex items-center justify-center [&>svg]:w-[50px] [&>svg]:h-[50px]">
                    {tech.icon}
                  </div>
                  <h3 className="text-white text-base font-medium ml-4">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMobileIndex((prev) => Math.min(prev + 1, mobileMax))}
            disabled={mobileIndex >= mobileMax}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 bg-[#002b58] disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 hover:shadow-[0_0_20px_#4b6aa1]"
            aria-label="Próxima tecnologia"
          >
            <ChevronDown size={24} />
          </button>

          <div className="flex justify-center gap-1 mt-16">
            {Array.from({ length: mobileMax + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === mobileIndex
                    ? "bg-white w-6"
                    : "bg-[#002b5860] hover:bg-[#002b5860]"
                }`}
                aria-label={`Ir para grupo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}