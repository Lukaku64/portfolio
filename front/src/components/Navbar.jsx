import React from "react";
import log from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="text-white p-10 pt-16 flex justify-between items-center">
      <a href="/">
        <img src={log} alt="" className="ml-40" />
      </a>
      <div>
        <a href="/about" className="text-base mx-3">
          Acerca de mi
        </a>
        <a href="/proyect" className="text-base mx-3">
          Proyectos
        </a>
        <a href="/contact" className="text-base mx-3">
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
