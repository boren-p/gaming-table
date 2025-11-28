import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y057zp9", "template_68bg7au", form.current, {
        publicKey: "-lVcy2D49i-sWJXyu",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setTimeout(() => window.location.reload(), 800);
        },
        (error) => {
          console.log("FAILED...", error?.text || error);
          setTimeout(() => window.location.reload(), 1200);
        }
      );
  };
  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      <Navbar />
      <main className="grow w-full py-16 px-4 md:px-8">
        <section className="w-full p-4 sm:p-8">
          <form
            action="https://formsubmit.co/54d861e4fba2acc58aa8f89cf3ed35fd"
            method="POST"
            className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-2xl border-2 border-rustic-gold/50"
            onSubmit={sendEmail}
            ref={form}
          >
            <h2 className="text-4xl font-bold text-deep-forest-green mb-10 text-center">
              Write to us
            </h2>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-deep-forest-green"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Write your name here..."
                required=""
                className="mt-1 block w-full px-4 py-2 border border-deep-forest-green/30 rounded-md shadow-sm bg-white focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-deep-forest-green"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Write your email here..."
                required=""
                className="mt-1 block w-full px-4 py-2 border border-deep-forest-green/30 rounded-md shadow-sm bg-white focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-deep-forest-green"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required=""
                className="mt-1 block w-full px-4 py-2 border border-deep-forest-green/30 rounded-md shadow-sm bg-white focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all"
                defaultValue={""}
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                value="Send"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-parchment-cream bg-rich-mahogany-brown hover:bg-rustic-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rustic-gold transition duration-150 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
