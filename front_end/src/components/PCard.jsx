
import React from 'react';
import NavBar from './NavBar';

export default function PCard() {
  const user = {
    name: "Ayush Khandelwal",
    email: "ayush@example.com",
    bio: "Full-stack developer passionate about UI/UX and data-driven apps.",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white flex">
      {/* Sidebar */}
      <NavBar />

      {/* Main Content */}
      <div className="ml-[8%] w-[92%] p-8">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        <div className="bg-[#1A1A1A] p-6 rounded-2xl max-w-xl shadow-lg">
          <div className="flex items-center gap-6">
            <img
              src={user.avatarUrl}
              alt="avatar"
              className="w-24 h-24 rounded-full border-2 border-white"
            />
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{user.email}</p>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <p className="mb-6 text-gray-300">{user.bio}</p>

          <button className="bg-[#08566e] hover:bg-[#0b6c88] text-white px-4 py-2 rounded-xl transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
