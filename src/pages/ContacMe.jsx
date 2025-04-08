import React from "react";
import { FaEnvelope, FaRocket } from "react-icons/fa";
import Stars from "../componets/Stars";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import useLoadingStore from "../stores/use_loading_store";
import Loader from "../componets/Loader";

const ContacMe = () => {
  
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isLoading, startLoading, stopLoading } = useLoadingStore()

  const onSubmit = async (data) => {
    startLoading()
    try {
      const emailData = {
        name: data.name,
        emailfrom: data.email,
        message: data.message,
        time: new Date().toLocaleString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await emailjs.send(serviceID, templateID, emailData, publicKey);
      alert("¡Correo enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el mensaje");
    } finally {
      stopLoading()
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Stars numStars={400} starColor="rgba(200, 200, 255," maxRadius={4} />

      {/* Nebulosa */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

      <main className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaEnvelope className="mr-2 text-blue-400" /> Contacto
          </h2>
          {isLoading && <Loader />}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                {...register("name", { required: "Este campo es obligatorio" })}
                className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
                disabled={isLoading}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingresa un email valido",
                  },
                })}
                className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Mensaje</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje aquí..."
                disabled={isLoading}
                {...register("message", {
                  required: "El campo es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El mensaje debe tener al menos 10 caracteres",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center mx-auto space-x-2"
            >
              <span>Enviar Mensaje</span>
              <FaRocket className="animate-bounce" />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContacMe;
