"use client";
import { useState, useEffect } from "react";

const FormMessage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-text_color my-20 px-5 lg:px-80">
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-full flex flex-col justify-center items-start gap-1">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full rounded-md py-1 border border-border_color focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-1">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full rounded-md py-1 border border-border_color focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full rounded-md py-1 border border-border_color focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="w-full rounded-md py-1 border border-border_color focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="w-full rounded-md py-1 border border-border_color focus:outline-none"
            rows={4}
          />
        </div>
        <button className="py-4 px-6 border border-border_color mr-auto uppercase">
          Envoyer
        </button>
      </form>
    )
  );
};

export default FormMessage;
