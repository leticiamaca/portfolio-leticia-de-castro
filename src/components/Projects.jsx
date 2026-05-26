import react, {useState, useEffect} from "react";


//importando imagens dos projetos
import CastroMidia from "../assets/img/castromidia.png"
import ConhecendoLeticia from "../assets/img/conhecendoleticia.png"
import RocketManager from "../assets/img/rocketmanager.png"
import OfficeRun from "../assets/img/office.png"
import Magitech from "../assets/img/magitech.png"


// Dados dos projetos (exemplo)
const projectsData = [
  {
    id: 1,
    title: "OfficeRun",
    shortDesc: "Jogo 2D Desenvolvido na Unity",
    fullDesc: "Office Run é um jogo 2D top-down em pixel art inspirado em Pac-Man, desenvolvido como uma metáfora lúdica sobre o desperdício de insumos administrativos nas empresas, como clipes, post-its e lápis. Apesar de serem materiais simples, eles representam milhões em gastos e impactos ambientais quando somados. A proposta é refletir sobre isso de forma divertida e interativa. O jogador controla um colaborador que trabalha sozinho à noite, após todos os colegas terem ido embora. O objetivo é coletar os insumos espalhados pelo escritório sem ser pego pelo fantasma que ronda o local. Se o fantasma encostar no jogador, é Game Over.",
    image: OfficeRun,
    link: "https://leticiamaca.itch.io/officerun"
  },
  {
    id: 2,
    title: "Magitech",
    shortDesc: "Plataforma de cursos",
    fullDesc: "O MagiTech é uma plataforma de cursos online gamificada, desenvolvida como Trabalho de Conclusão de Curso (TCC), com foco em educação prática, imersiva e de baixo custo de manutenção. O principal diferencial da plataforma é a integração de um módulo “mão na massa” em Realidade Virtual (VR), permitindo que o aluno pratique os conhecimentos adquiridos em um ambiente virtual gamificado, seguro e interativo. OBS: Essa versão foca apenas no front-end do projeto, não sendo possível entrar em contato com o backend, estou trabalhando em atualizações futuras, caso deseje ver o projeto rodando sugiro que baixe em zip e siga o passo a passo no arquivo .txt dentro do projeto",
    image: Magitech,
    link: "https://magitech-apresentacao-final-i1y1adghq-leticiamacas-projects.vercel.app/"
  },
  {
    id: 3,
    title: "Landinpage CastroMídia",
    shortDesc: "Landing page para uma empresa de socialmedia",
    fullDesc: "Uma landing page moderna e responsiva desenvolvida para apresentar os serviços de social media da Castro Mídia, com foco em conversão, identidade visual e experiência do usuário. A proposta do projeto foi criar uma presença digital profissional, utilizando estratégias de Call To Action (CTA), design alinhado ao manual da marca e uma navegação intuitiva para fortalecer a autoridade da marca no digital.",
    image: CastroMidia,
    link: "https://github.com/leticiamaca/castromidia"
  },
  {
    id: 4,
    title: "Portfolio Gamificado - Conhecendo Leticia",
    shortDesc: "Portfolio em formato de gamificação.",
    fullDesc: "Conhecendo Leticia é uma experiência interativa 2D que transforma o tradicional portfólio web em um jogo de plataforma pixel art. Nascido da vontade de fazer algo genuinamente diferente, porque, afinal, ter um portfólio na web hoje em dia já não é mais diferencial este projeto convida o visitante a jogar para me conhecer",
    image: ConhecendoLeticia,
    link: "https://github.com/leticiamaca/portfolio-gamificado-2d"
  },
  {
    id: 5,
    title: "RocketManager",
    shortDesc: "Plataforma de gestão de projetos",
    fullDesc: "O Rocket Manager é uma aplicação fullstack que permite o gerenciamento de projetos, equipes e colaboradores. Cada tipo de usuário tem permissões específicas dentro do sistema, garantindo segurança e organização no fluxo de trabalho.",
    image: RocketManager,
    link: "https://github.com/orgs/manager-system-java/repositories"
  },
  // {
  //   id: 6,
  //   title: "Mobile Banking App",
  //   shortDesc: "App bancário mobile-first",
  //   fullDesc: "Aplicativo bancário mobile-first com transferências, pagamento de contas, investimentos e cartão virtual. Interface intuitiva e segura com autenticação biométrica.",
  //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  //   link: "https://exemplo.com/banking"
  // }
];

// Componente: Card de Projeto (Estilo Minimalista)
const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] group relative bg-gray-900/50 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-100 hover:bg-gray-900/70"
      onClick={onClick}
    >
      {/* Imagem do Projeto */}
      <div className="relative h-100 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110"
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </div>
      
      {/* Descrição que aparece no hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.shortDesc}
          </p>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 py-2 rounded border border-white/20 font-medium transition-all duration-300">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente: Modal
const Modal = ({ project, onClose }) => {
  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Overlay com blur e escurecimento */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      
      {/* Conteúdo do Modal */}
      <div 
        className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl  w-[350px] md:w-[600px] lg:w-[600px] max-h-[90vh] overflow-y-auto animate-slideUp border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-2 transition-all duration-300 hover:scale-110 hover:rotate-90"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Imagem do Projeto */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        
        {/* Informações do Projeto */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {project.title}
          </h2>
          
          <div className="w-20 h-1 bg-gray-600 rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {project.fullDesc}
          </p>
          
          {/* Botão de Ação */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 border border-white/20 backdrop-blur-sm hover:scale-105"
            >
              Acessar Projeto
            </a>
            <button
              onClick={onClose}
              className="px-8 py-4 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800/50"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal: Seção de Projetos
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-column items-center mt-25 md:mt-0" >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center">
          <h1 className="text-[24px] text-center font-bold mb-17 text-white uppercase tracking-[0.5rem]">
            PROJETOS
          </h1>
        </div>
        
        {/* Grid de Projetos - 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
    </div>
  );
};

export default Projects;
