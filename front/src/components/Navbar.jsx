import React from "react";
import log from "../assets/react.svg";

function Navbar() {
  return (
    <nav
      className={`text-white p-5 flex justify-between items-center bg-teal-500`}
    >
      <a href="/">
        <img src={log} alt="" className="ml-40" />
      </a>
      <div>
        <a href="" className="text-base mx-3">
          Lucas
        </a>
        <a href="" className="text-base mx-3">
          Proyecto
        </a>
        <a href="" className="text-base mx-3">
          Nuestros servicios
        </a>
        <a href="/" className="text-base mx-3">
          Perfil
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
