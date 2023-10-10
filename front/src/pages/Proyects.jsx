import React from "react";
import Navbar from "../components/Navbar";

function Proyects() {
  return (
    <>
      <div className="h-screen background-image text-white bg-opacity-95 h-screen	">
        <Navbar />
        <div className="container-center mt-40 ">
          <div className="">
            <h1 className="text-2xl my-5">Soy Lucas Flores Cruz</h1>
            <p className="mb-3">
              Your friendly neighborhood frontend developer, UX architect, and
              JavaScript engineer. I spend my days (and often nights) painting
              the Internet canvas with PROJECTS and lines of code, turning
              zeroes and ones into immersive, interactive experiences,
            </p>
            <p className="mb-3">
              Bona fide photochromic LENS enthusiast - sunlight or indoors, I've
              got it covered. I tread the path of minimalism, finding beauty in
              simplicity and order. When I'm not crafting beautiful web
              experiences, you can find me reading ARTICLES or swaying to the
              rhythm of Pop Music & Jazz, losing myself in the captivating flow
              of melodies. anyways you can CONTACT ME
            </p>
            <a href="" className="mb-3">
              Mas sobre mi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proyects;
