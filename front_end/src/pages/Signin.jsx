import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleLogin = async () => {
    try {
        const response = await axios.post("https://flashpay-m4uu.onrender.com/api/v1/user/signin",{
            username,
            password
        })
        const { token, profile } = response.data;
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log(response.data);
        navigate("/dashboard", {state: {token,profile}});
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#111111]">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🧊 Glassmorphic Form Container */}
      <div className="relative z-10 h-full w-full flex justify-center items-center px-6 lg:px-60">
        <div className="relative w-full max-w-2xl p-12 rounded-3xl bg-[rgba(0,0,0,0.75)] backdrop-blur-sm overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.75)]">
          <div className="relative z-10 space-y-10 text-white ">
            <h1 className="text-4xl font-bold text-center text-white">
              Welcome to FlashPay
            </h1>

            <div className="space-y-6">
              <label className="block text-lg font-semibold text-white/80">
                Email
              </label>
              <input
                className="h-14 w-full bg-[#0A0A0A] placeholder:text-white px-3 rounded-2xl"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="block text-lg font-semibold text-white/80">
                Password
              </label>
              <input
                className="h-14 w-full bg-[#0A0A0A] placeholder:text-white px-3 rounded-2xl"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button onClick={handleLogin} className="w-[75%] h-[50px] bg-black/30 rounded-2xl hover:border hover:border-white/10 shadow-[inset_0_2px_8px_rgba(17,17,17,0.4)]">
                Signin
              </button>
              <div className="flex gap-2 text-white/50">
                <p>Don't have an account?</p>
                <Link to={"/signup"}>
                  <p className="underline">Signup</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
