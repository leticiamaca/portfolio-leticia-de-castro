import Menu from "./Menu";
import {Link} from "react-router-dom"

function banner() {
  return (
    <>
      <div className="h-auto font-sans">
        <Menu />
        <div className=" flex flex-col justify-center items-center h-screen ">
          <p className="text-white font-semibold uppercase tracking-[0.5rem]">Letícia de Castro</p>
          
          <Link to="/contato">
            <button className=" mt-10 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            <span className="text-lg">Entrar em Contato</span>     
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
          </button>
     
            </Link>
        </div>
        
        
      </div>
    </>
  );
}

export default banner;
