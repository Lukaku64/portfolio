import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-red-500">
        <h1 className="text-2xl">Deberia ser un Home</h1>
      </div>
    </>
  );
}

export default Home;
