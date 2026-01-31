import React from 'react';
import { ExternalLink } from 'lucide-react';
import Moodboard from "../assets/img/moodboard.png"
import CartaoVisita from "../assets/img/cartao-visita.png"
import FaiupHeader from "../assets/img/faiup-header.png"
import OverDrive from "../assets/img/OverDrive.png"
import ManualMarca from "../assets/img/Manual-da-marca.png"
import Logo from "../assets/img/logo.png"
import LogoMA from "../assets/img/logo-ma.png"
import Post from "../assets/img/Post.png"
import va from "../assets/img/va.png"


const Fotos = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      size: "large", // ocupa 2 colunas
      image: Moodboard
    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "UI/UX Design",
      size: "large",
      image: CartaoVisita
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      size: "large",
      image: Logo
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      category: "Web App",
      size: "large", // ocupa mais altura
      image: FaiupHeader
    },
    {
      id: 5,
      title: "Photography Portfolio",
      category: "Creative",
      size: "lage",
      image: OverDrive
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Marketing",
      size: "large",
      image: ManualMarca
    },
    {
      id: 7,
      title: "Fitness App",
      category: "Mobile Design",
      size: "large",
      image:LogoMA
    },
    {
      id: 8,
      title: "Restaurant Website",
      category: "Web Design",
      size: "large",
      image: Post
    },
    {
      id: 9,
      title: "Fashion E-store",
      category: "E-commerce",
      size: "large",
      image: va
    }
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'md:col-span-1 md:row-span-1';
     
    }
  };

  return (
    <div className="min-h-screen p-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <h1 className="text-[24px] text-center font-bold mb-17 text-[#fff]  font-semibold uppercase tracking-[0.5rem]">
            Meus Projetos de Design
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes em desenvolvimento e design
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[350px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="{group relative overflow-hidden rounded transition-all duration-300 cursor-pointer ${getSizeClasses(project.size)}}"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/20 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-400">
                    <span className="text-sm">Ver projeto</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Subtle gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-indigo-500/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fotos;