import React from "react";
import "./contact.css";

const page = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-white py-[120px]">
        <div
          class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div class="md:w-1/3 w-full">
            <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Contactanos
            </h1>
            <p class="leading-relaxed text-xl text-gray-900">
              ¡Estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas
              ayuda, no dudes en comunicarte con nosotros. También puedes
              enviarnos un correo electrónico.
            </p>

            <span class="inline-flex mt-6 justify-center sm:justify-start"></span>
          </div>
          <div class="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Formu<span className="text-[#F70404]">lario</span>
            </h1>
            <form
              action="send-contact.php"
              method="post"
              id="submit-contact-form"
            >
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required=""
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#F70404] focus:bg-white focus:ring-2 focus:ring-[#F70404] text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#F70404] focus:bg-white focus:ring-2 focus:ring-[#F70404] text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="message"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#F70404] focus:bg-white focus:ring-2 focus:ring-[#F70404] h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-300"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  type="submit"
                  class="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-[#F70404] rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Enviar mensaje ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
