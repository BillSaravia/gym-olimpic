import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#222] mt-5 rounded-t-3xl py-8">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-brightRed">
              Niveles Gym
            </h1>
          </Link>
          <p className="mt-4">
            El mejor destino para ser dioses del fitness en Gym Olimpic, para hombres y mujeres.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Dirección</h1>
          <p className="mt-4">
            Lima, Perú Ancón
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed">Horario de Atención</h1>
          <ul className="mt-4">
            <li>Lun-Sab: 6:00 AM – 11:00 PM</li>
            <li>Dom: Cerrado</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-brightRed ">Contacto</h1>
          <div className="flex flex-row items-center mt-4">
            <AiTwotonePhone size={20} />
            <p className="ml-2">+51-999-999-999</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <AiOutlineMail size={20} color="red" />
            <p className="ml-2">bill@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center">
          © <span className="text-brightRed">Gym Olimpic</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;