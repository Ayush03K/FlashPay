import React from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
const profile = location.state?.profile || JSON.parse(localStorage.getItem("profile"));


if (!profile) {
  return <div className="text-white ml-10 mt-10">No profile data found.</div>;
}

const { firstName, lastName, username, userId, job = "Full-stack developer." } = profile;

const avatarUrl = "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D";
  const navigate = useNavigate();
          const handleLogout = () => {
              
              localStorage.removeItem("token");
              sessionStorage.removeItem("authToken"); 
              navigate("/signin");
              window.location.reload();
          };
  return (
    <div className="flex bg-[#0A0A0A] text-white min-h-screen w-full">
      <NavBar profile={profile}/>

      <div className="w-[92%] ml-[8%] px-10 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Profile</h1>
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <p className="text-white font-semibold">
              {firstName[0].toUpperCase()}
              {lastName[0].toUpperCase()}
            </p>
          </div>
        </header>

        {/* Profile & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Avatar + Name */}
          <div className="flex flex-col items-center justify-center border border-white/20 rounded-xl p-8 text-center">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-36 h-36 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{firstName[0].toUpperCase()+firstName.slice(1)} {lastName[0].toUpperCase()+lastName.slice(1)}</h2>
            <p className="text-green-500 mt-1">Premium User</p>
            
            <button onClick={handleLogout} className="bg-[rgb(225,0,0,0.4)] hover:bg-[rgb(225,0,0,0.6)] text-white px-4 py-2 m-8 rounded-xl transition duration-200">
            Log out
        </button>
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2 border border-white/20 rounded-xl p-12">
            <h3 className="text-lg font-semibold mb-6">Profile Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">
              <div>
                <p className="text-gray-400">First Name</p>
                <p>{firstName[0].toUpperCase()+firstName.slice(1)}</p>
              </div>
              <div>
                <p className="text-gray-400">Last Name</p>
                <p>{lastName[0].toUpperCase()+lastName.slice(1)}</p>
              </div>
              <div>
                <p className="text-gray-400">Username</p>
                <p>{username}</p>
              </div>
              <div>
                <p className="text-gray-400">User ID</p>
                <p>{userId}</p>
              </div>
              <div>
                <p className="text-gray-400">Job</p>
                <p className="text-gray-400">{job}</p>
              </div>
              
              <div>
                <p className="text-gray-400">Account</p>
                <p className="text-green-400">Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border border-white/20 rounded-xl p-12 ">
          <h3 className="text-xl mb-4 font-semibold">Social Media</h3>
          <div className="flex gap-6 text-sm">
            <span className="text-red-500">YouTube</span>
            <span className="text-pink-500">Instagram</span>
            <span className="text-white">TikTok</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
