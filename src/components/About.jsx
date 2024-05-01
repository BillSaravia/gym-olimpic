import React from "react";
import img from "../assets/img/gym1.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
        Quiénes somos
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
            Su bienestar es su mayor riqueza. Tanto si se trata de
            salud óptima o mejorar tu forma física, estamos aquí para
            apoyarle en cada paso del camino.
            <p>
              En nuestro centro de fitness, nuestro equipo de entrenadores personales certificados,
              personal atento, y la gestión con experiencia se dedican a
              fomentar un ambiente enriquecedor.
            </p>
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;