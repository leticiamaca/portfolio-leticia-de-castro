import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Formacao = () => {
  const experiences = [
    {
      period: "Fev/2026 - Dez/2027",
      title: "ESTAGIÁRIA EM TI",
      company: "JOG Engenharia de Andaimes"
    },
    {
      period: "Ago/2025 - Fev/2026",
      title: "JOVEM APRENDIZ DE TI",
      company: "JOG Engenharia de Andaimes"
    },
    {
      period: "Jan/2022 - Dez/2023",
      title: "DESIGNER FREELANCER",
      company: "Castro Mídia"
    }
  ];

  const education = [
    {
      period: "Fev/2026 - Dez/2029",
      title: "SISTEMAS DA INFORMAÇÃO",
      institution: "Faculdade"
    },
    {
      period: "Jan/2024 - Dez/2025",
      title: "CURSO TÉCNICO",
      institution: "SENAI"
    },
    {
      period: "2019 - atualmente",
      title: "INGLÊS",
      institution: "Wizard (com mentores particulares)"
    }
  ];

  const Card = ({ period, title, subtitle }) => (
    <div className=" backdrop-blur-sm border border-[#002b58] rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="text-white text-sm font-semibold mb-2 tracking-wide">
        {period}
      </div>
      <h3 className="text-white text-lg font-bold mb-1 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-[24px] text-center font-bold mb-17 text-[#fff]  font-semibold uppercase tracking-[0.5rem]">
            Formação
          </h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experiência Profissional */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className=" p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-[#fff]" />
              </div>
              <h2 className="text-[20px] text-center font-bold text-[#fff]  font-semibold uppercase tracking-[0.5rem] ">
                Experiência Profissional
              </h2>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  period={exp.period}
                  title={exp.title}
                  subtitle={exp.company}
                />
              ))}
            </div>
          </div>

          {/* Formação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className=" p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#fff]" />
              </div>
              <h2 className="text-[20px] text-center font-bold text-[#fff]  font-semibold uppercase tracking-[0.5rem] ">
                Formações
              </h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  period={edu.period}
                  title={edu.title}
                  subtitle={edu.institution}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formacao;