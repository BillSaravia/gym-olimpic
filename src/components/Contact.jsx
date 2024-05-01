import React from "react";
import Button from "../layouts/Button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contáctenos</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Nombre</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="text"
              name="userName"
              id="userName"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Correo</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Ingrese su Correo"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Número</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Ingrese su Número"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMessage">Mensaje</label>
            <textarea
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              name="userMessage"
              id="userMessage"
              rows="4"
              placeholder="Ingrese su Mensaje"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <Button title="Enviar Mensaje" />
            <Button title="Iniciar una Llamada" href="tel:+51" />
          </div>
        </form>
        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15621.171908756934!2d-77.1322723!3d-11.8147424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d52fddceab75%3A0xd2dcf368bd67f246!2zT2xpbXBpY-KAmXMgR3lt!5e0!3m2!1ses-419!2spe!4v1714545705280!5m2!1ses-419!2spe"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;