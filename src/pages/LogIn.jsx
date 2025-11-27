import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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
        throw new Error(data.message || "Credenciales incorrectas");
      }
      localStorage.setItem("token", data.access_token);
      nav("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-forest-green p-4">
      <div className="max-w-md w-full bg-parchment-cream rounded-xl shadow-2xl p-8 border-2 border-rustic-gold/50">
        <div className="flex justify-center mb-8">
            <img src={logo} alt="Gaming Table Logo" className="h-32 w-auto" />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-deep-forest-green mb-8">Welcome Back</h2>

        <form onSubmit={enviarFormulario} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-deep-forest-green mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-deep-forest-green/30 focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all bg-white/50 text-deep-forest-green placeholder-deep-forest-green/50"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-deep-forest-green mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-deep-forest-green/30 focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all bg-white/50 text-deep-forest-green placeholder-deep-forest-green/50"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-rich-mahogany-brown focus:ring-rustic-gold border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-deep-forest-green/80">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-rich-mahogany-brown hover:text-rustic-gold transition-colors">
              Forgot password?
            </a>
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
