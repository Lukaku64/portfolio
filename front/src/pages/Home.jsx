import React from "react";
import Navbar from "../components/Navbar";
import SocialMedia from "../commons/SocialMedia";
import { SlArrowRight } from "react-icons/sl";

function Home() {
  return (
    <>
      <div className="h-screen background-image text-white bg-opacity-95 h-screen">
        <Navbar />
        <div className="container-center mt-40 ">
          <div className="">
            <h1 className="text-4xl my-5 font-semibold">Lucas Flores Cruz</h1>
            <p className="mb-3">
              Soy un Desarrollador Full Stack, Paso mis dias (y muchas veces mis
              noches) creando nuevos proyectos o implementando nuevas features a
              proyectos pasados. Uno de mis pasatiempo es jugar algun
              videojuego, quizas en el futuro me gustaria formar parte o poder
              desarrollar un juego indie
            </p>
            <p className="mb-3">
              Me gusta crear productos frontend y/o backend escalables con
              excelentes experiencias de usuario, ademas de diseñar esquemas de
              bases de datos relacionales. Al crear aplicaciones JavaScript,
              estoy equipado con las herramientas adecuadas y puedo ofrecer
              soluciones rápidas y resistentes optimizadas para la escalabilidad
              y el rendimiento. Estoy abierto a oportunidades laborales donde
              pueda contribuir, aprender y crecer. Si tienes una oportunidad que
              coincida con mis habilidades y experiencia, no dudes en
              contactarme.
            </p>
            <div className="py-4">
              <a href="/about" className="flex">
                <p>Mas sobre mi</p>
                <SlArrowRight className="mt-1" />
              </a>
            </div>
          </div>
          <div className="my-6">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="background-opacity fixed right-0"></div>
    </>
  );
}

export default Home;
