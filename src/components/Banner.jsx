import react from "react";
import Menu from "./Menu";

function banner() {
  return (
    <>
      <div className="h-auto font-sans">
        <Menu />
        <div className=" flex justify-center items-center h-screen font-semibold uppercase tracking-[0.5rem]">
          <p className="text-[#fff]">Letícia de Castro</p>
        </div>
      </div>
    </>
  );
}

export default banner;
