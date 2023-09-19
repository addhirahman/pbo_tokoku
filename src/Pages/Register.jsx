import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lakukan logika pendaftaran di sini
    console.log("Melakukan registrasi dengan email:", email);
  };

  return (
    <>
    
     <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-2/3 flex">
      <div className="w-1/2">
          <img
            src="/images/unboxing01.png"
            alt="register"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl mb-4">Register</h2>
          
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleRegister}
          >
            Daftar
          </button>
          <p className="mt-4">
          Sudah Punya Akun? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
