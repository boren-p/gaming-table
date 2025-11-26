import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function enviarFormulario(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("hola kevin");
    console.log(email);
    console.log(password);
    try {
      const respuesta = await fetch(
        "https://api-funval-g6.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await respuesta.json();
      if (!respuesta.ok) {
        throw new Error(data.message || "credenciales incorrectas");
      }
      localStorage.setItem("token", data.access_token);
      nav("/Home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
//   function crearCuenta() {
//     nav("/newuser");
//   }
  return (
    <div className="h-screen bg-red-200 flex items-center justify-center">
      <form
        onSubmit={enviarFormulario}
        className="max-w-sm mx-auto bg-red-900 p-8 rounded-2xl"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-red-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="email"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-red-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            required=""
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-red-300 rounded-sm bg-red-50 focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-red-600 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800"
              required=""
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-red-900 dark:text-red-300"
          >
            Remember me
          </label>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Submit
          </button>
          {/* <button
            onClick={crearCuenta}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            crear cuenta
          </button> */}
        </div>
      </form>
    </div>
  );
}
