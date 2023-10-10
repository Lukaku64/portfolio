import React from "react";
import Navbar from "../components/Navbar";
import SocialMedia from "../commons/SocialMedia";
import { SlArrowRight } from "react-icons/sl";

function About() {
  return (
    <>
      <div className="h-screen background-image text-white h-full	">
        <Navbar />
        <div className="container-center mt-40">
          <div className="">
            <h1 className="text-4xl font-semibold mb-10">Sobre mi.</h1>
            <ul className="pl-4">
              <li className="mb-5">
                <h2 className="text-lg font-semibold mb-2">¿Quien soy?</h2>
                <p>
                  Soy alguien que desde pequeño se intereso por el mundo IT y
                  por su impacto en el mundo, alguien que le gusta saber del
                  hardware de las computadoras y los celulares como asi de su
                  software, me gusta la construccion desde cero como tambien
                  poder agregar nuevas funcionalidades a otros proyectos.
                </p>
              </li>
              <li className="mb-5">
                <h2 className="text-lg font-semibold mb-2">
                  ¿Como te puedo ayudar?
                </h2>
                <p>
                  Soy una persona que puede resolver problemas, que tiene la
                  tolerancia y paciencia para enfrentarlos, alguien que puede
                  comunicar y trabajar eficazmente con personas.{" "}
                </p>
              </li>
              <li className="mb-5">
                <h2 className="text-lg font-semibold mb-2">
                  ¿Que tecnologias aprendi?
                </h2>
                <p>Son las tecnologias de ...</p>
              </li>
            </ul>
            <h1 className="text-2xl font-semibold mb-3 mt-16">Mi carrera</h1>
            <ul className="pl-4">
              <li className="mb-5">
                <a href="https://www.plataforma5.la/" target="_blank">
                  <h2 className="text-lg font-semibold mb-2">Plataforma 5</h2>
                </a>
                <p>
                  Me egrese de un bootcamp de programacion en Javascript, en el
                  cual aprendi bastante tecnologias y skills, consistio de dos
                  etapas. La Junior Phase y la Senior Phase, en la primera se
                  aprendio con Video Lectures con su posteriores ejercicios para
                  implementar lo aprendido, en la segunda etapa se implemento
                  todos los conceptos anteriormente aprendidos desarrollando
                  proyectos de manera indidual como grupal mejorando asi las
                  habilidades blandas como la resolucion de conflictos.
                </p>
              </li>
              <li className="mb-5">
                <a href="https://platzi.com/home" target="_blank">
                  <h2 className="text-lg font-semibold mb-2">Rolling Code</h2>
                </a>
                <p>
                  Un curso de programacion que duro alrededor de 6 meses,
                  resolviendo problemas ejercicios semanales y aprendiendo
                  tecnologias.
                </p>
              </li>
              <li className="mb-5">
                <a href="https://rollingcodeschool.com/" target="_blank">
                  <h2 className="text-lg font-semibold mb-2">Platzi</h2>
                </a>
                <p>
                  Actualmente me encuentro aprendiendo en la plataforma de
                  Platzi, en rutas de aprendizaje como Javascript a Profundidad,
                  Backend y Bases de datos.
                </p>
              </li>
            </ul>
            <h1 className="text-2xl font-semibold mb-3 mt-16">Mis Playlists</h1>
            <ul className="pl-4">
              <li className="mb-5">
                <a
                  href="https://open.spotify.com/playlist/6evcx1s4wENcUCdqcMiaNd?si=6324560e51c24af2"
                  target="_blank"
                >
                  <h2 className="text-lg font-semibold mb-2">CRUD</h2>
                </a>
                <p>
                  Cree esta playlist para recordar a un episodio de la serie de
                  Silicon Valley.
                </p>
              </li>
              <li className="mb-5">
                <a
                  href="https://open.spotify.com/playlist/5vTFVGlRFI14iNIQAXJqpa?si=e3cf4cf693774931"
                  target="_blank"
                >
                  <h2 className="text-lg font-semibold mb-2">algorithms</h2>
                </a>
                <p>
                  Esta playlist la pense con la complejidad de un algoritmo y
                  como cuesta desarrollarlos.
                </p>
              </li>
              <li className="mb-5">
                <a
                  href="https://open.spotify.com/playlist/5Xkw0sFd5Y89K7kfrusZsf?si=e3d753c6b7614c3e"
                  target="_blank"
                >
                  <h2 className="text-lg font-semibold mb-2">
                    Hola Beats Lofi
                  </h2>
                </a>
                <p>
                  Es la playlist que casi siempre escucho, fue producida por el
                  Youtuber Hola Mundo.
                </p>
              </li>
            </ul>
            <div className="pt-4 pb-12">
              <a href="/proyect" className="flex">
                <p>Continuar a Proyectos</p>
                <SlArrowRight className="mt-1" />
              </a>
            </div>
            <div className="pb-10">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
