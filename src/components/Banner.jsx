import { useEffect, useRef } from "react";
import Menu from "../components/Menu"

//Configurações gerais
//Aqui onde foi feito o fundo animado do banner 

const CONFIG = {
  GRID_COLS: 28,
  GRID_ROWS: 18,
  WAVE_RADIUS: 220,
  WAVE_STRENGTH: 32,
  GRID_LERP: 0.07,
  NUM_PARTICLES: 28,
};


   //Função auxiliar para suavizar movimento
   //(Interpolação linear)

function lerp(a, b, t) {
  return a + (b - a) * t;
}

//Cursor personalizado
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMove);

    let raf;
    const animate = () => {
      // anel segue suavemente o ponto
      ringPos.current.x = lerp(ringPos.current.x, dotPos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, dotPos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          // background: "#4d90fe",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1px solid rgba(77,144,254,0.5)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}


   //GRID INTERATIVO (Canvas)

function GridCanvas() {
  const canvasRef = useRef(null);

  const mouseTarget = useRef({ x: -9999, y: -9999 });
  const mouseCurrent = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      mouseTarget.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMove);

    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouseCurrent.current.x = lerp(
        mouseCurrent.current.x,
        mouseTarget.current.x,
        CONFIG.GRID_LERP
      );

      mouseCurrent.current.y = lerp(
        mouseCurrent.current.y,
        mouseTarget.current.y,
        CONFIG.GRID_LERP
      );

      const W = canvas.width;
      const H = canvas.height;

      const cellW = W / CONFIG.GRID_COLS;
      const cellH = H / CONFIG.GRID_ROWS;

      for (let row = 0; row <= CONFIG.GRID_ROWS; row++) {
        for (let col = 0; col <= CONFIG.GRID_COLS; col++) {
          const x = col * cellW;
          const y = row * cellH;

          const dx = x - mouseCurrent.current.x;
          const dy = y - mouseCurrent.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.WAVE_RADIUS) {
            const force = 1 - dist / CONFIG.WAVE_RADIUS;
            ctx.beginPath();
            ctx.arc(x, y, force * 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(77,144,254,0.6)";
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}


   //PARTÍCULAS SIMPLES

function Particles() {
  const particles = Array.from({ length: CONFIG.NUM_PARTICLES });

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2,
            height: 2,
            borderRadius: "50%",
            background: "#4d90fe",
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}


export default function PortfolioHeader() {
  return <>
    <div className="w-full h-screen overflow-hidden">
    
      <Menu />
      <GridCanvas />
      <Particles />
      <CustomCursor />  
   {/* Container centralizador */}
   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1 className="relative z-20text-[24px] text-center font-bold mb-8 text-white uppercase tracking-[0.5rem]">
      Letícia de Castro
    </h1>
  </div>
    </div>
  </>
  
}