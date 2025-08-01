import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password,
      });
      localStorage.setItem("token",response.data.token)
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log(response.data);
        navigate("/dashboard", {state: {token,profile}});
      console.log("Signup successful");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🧊 Glassmorphic Form Container */}
      <div className="relative z-10 h-full w-full flex justify-center items-center px-6 lg:px-60">
        <div className="relative w-full max-w-2xl p-12 rounded-2xl bg-[rgba(0,0,0,0.55)] backdrop-blur-sm overflow-hidden shadow-[0_0_30px_rgba(0,0,0)]">
          <div className="relative z-10 space-y-10 text-white">
            <h1 className="text-4xl font-bold text-center">Welcome to FlashPay</h1>

            <div className="space-y-6">
              <label className="block text-lg font-semibold text-white/80">First Name</label>
              <input
                className="h-14 w-full bg-[#111111] placeholder:text-white px-4 rounded-2xl"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="block text-lg font-semibold text-white/80">Last Name</label>
              <input
                className="h-14 w-full bg-[#111111] placeholder:text-white px-4 rounded-2xl"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label className="block text-lg font-semibold text-white/80">Email</label>
              <input
                className="h-14 w-full bg-[#111111] placeholder:text-white px-4 rounded-2xl"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="block text-lg font-semibold text-white/80">Password</label>
              <input
                type="password"
                className="h-14 w-full bg-[#111111] placeholder:text-white px-4 rounded-2xl"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center flex-col items-center gap-3">
              <button
                onClick={handleSignup}
                className="w-[75%] h-[50px] bg-black/30 rounded-2xl hover:border hover:border-white/10 shadow-[inset_0_2px_8px_rgba(17,17,17,0.4)]"
              >
                Signup
              </button>

              <div className="flex gap-2 text-white/50 text-sm">
                <p>Already have an account?</p>
                <Link to={"/signin"} className="underline">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
