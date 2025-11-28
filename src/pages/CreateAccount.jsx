import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Loading from "../components/Loading";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPSW, setConfirmPSW ] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function enviarFormulario(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    console.log(name);
    console.log(email);
    console.log(password);

    if (password !== confirmPSW) {
    setError("CONTRASEÑA NO VALIDA");
    setLoading(false);
    return;
    }

    try {
      const answ = await fetch(
        "https://api-funval-g6.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
          }),
        }
      );

      const data = await answ.json();
      if (!answ.ok) {
        throw new Error(data.message || "Credenciales incorrectas");
      }
      localStorage.setItem("role", data.user_role);
      localStorage.setItem("user", data.user_name);
        nav("/client");
    } catch (err) {
      setError(err.message);
      console.log(name);
    console.log(email);
    console.log(password);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-forest-green p-4">
      <div className="max-w-md w-full bg-parchment-cream rounded-xl shadow-2xl p-8 border-2 border-rustic-gold/50">
        <div className="flex justify-center">
            <img onClick={()=>nav("/")} src={logo} alt="Gaming Table Logo" className="h-40 w-auto cursor-pointer" />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-deep-forest-green mb-4">Create account in <br/>Gaming Table</h2>

        <form onSubmit={enviarFormulario} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-deep-forest-green mb-2">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-deep-forest-green/30 focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all bg-white/50 text-deep-forest-green placeholder-deep-forest-green/50"
              placeholder="Enter your full name"
              required
            />
          </div>
          
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-deep-forest-green mb-2">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPSW(e.target.value)}
              type="password"
              id="cpassword"
              className="w-full px-4 py-3 rounded-lg border border-deep-forest-green/30 focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all bg-white/50 text-deep-forest-green placeholder-deep-forest-green/50"
              placeholder="Confirm your password"
              required
            />
          </div>

          {password!==confirmPSW && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                VERIFICA QUE TU CONTRASEÑA COINCIDA
            </div>
          )}
          {password===(confirmPSW?confirmPSW:null) && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm text-center">
                LAS CONTRASEÑAS COINCIDEN
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Creating..."&& <Loading/> : "Create Account"}
          </button>
          <div className="flex gap-2 w-full justify-center">
            <h2>Already have an account?</h2>
          <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
