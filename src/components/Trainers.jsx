import React from "react";
import img1 from "../assets/img/imag1.jpg";
import img2 from "../assets/img/image1.jpg";
import img3 from "../assets/img/image2.jpg";

import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10">Nuestros Entrenadores</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <TrainerCard img={img1} name="Marcelo" />
        <TrainerCard img={img2} name="Lenny" />
        <TrainerCard img={img3} name="Luis" />
      </div>
    </div>
  );
};

export default Trainers;