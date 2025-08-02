import React, { useState } from "react";
import AllUsers from "./AllUsers";

export default function SRCard() {
  const [openPanel, setOpenPanel] = useState(null); // 'send' | 'request' | null

  const closePanel = () => setOpenPanel(null);

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="flex flex-col gap-[25px] h-[350px] w-[580px] bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-[#222222] border-1 rounded-[24px] p-[40px]">
        <p className=" text-[#cccccc] font-medium text-[20px]">Quick Actions</p>

        {/* Send Money Button */}
        <div
          className="cursor-pointer bg-[#1A1A1A] h-[90px] w-[500px] rounded-[16px] flex p-[16px] items-center gap-[20px]"
          onClick={() => setOpenPanel("send")}
        >
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] h-[60px] w-[60px] rounded-[12px] flex justify-center items-center">
            <svg
              width="31"
              height="31"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8433 2.23083V18.8975V2.23083ZM15.0099 4.73083H8.75993C7.98638 4.73083 7.24451 5.03813 6.69753 5.58511C6.15055 6.13209 5.84326 6.87395 5.84326 7.6475C5.84326 8.42105 6.15055 9.16291 6.69753 9.7099C7.24451 10.2569 7.98638 10.5642 8.75993 10.5642H12.9266C13.7001 10.5642 14.442 10.8715 14.989 11.4184C15.536 11.9654 15.8433 12.7073 15.8433 13.4808C15.8433 14.2544 15.536 14.9962 14.989 15.5432C14.442 16.0902 13.7001 16.3975 12.9266 16.3975H5.84326"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-[18px] text-white">Send Money</p>
        </div>

        {/* Request Button */}
        <div
          className="cursor-pointer bg-[#1A1A1A] h-[90px] w-[500px] rounded-[16px] flex p-[16px] items-center gap-[20px]"
          onClick={() => setOpenPanel("request")}
        >
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] h-[60px] w-[60px] rounded-[12px] flex justify-center items-center">
            <svg
              width="31"
              height="31"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8433 2.23083V18.8975V2.23083ZM15.0099 4.73083H8.75993C7.98638 4.73083 7.24451 5.03813 6.69753 5.58511C6.15055 6.13209 5.84326 6.87395 5.84326 7.6475C5.84326 8.42105 6.15055 9.16291 6.69753 9.7099C7.24451 10.2569 7.98638 10.5642 8.75993 10.5642H12.9266C13.7001 10.5642 14.442 10.8715 14.989 11.4184C15.536 11.9654 15.8433 12.7073 15.8433 13.4808C15.8433 14.2544 15.536 14.9962 14.989 15.5432C14.442 16.0902 13.7001 16.3975 12.9266 16.3975H5.84326"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-[18px] text-white">Request</p>
        </div>
      </div>

      {/* Slide-In Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#111] text-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          openPanel ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-semibold capitalize">
            {openPanel === "send" ? "Send Money" : "Request Money"}
          </h2>
          <button
            className="text-gray-400 hover:text-red-500 text-lg"
            onClick={closePanel}
          >
            ✕
          </button>
        </div>

        {/* Panel Content Placeholder */}
        <div className="p-6 h-[calc(100vh-80px)] overflow-y-auto ">
          <div className="text-gray-300">
            {/* You can replace this with a form component */}
            <AllUsers/>
          </div>
        </div>
      </div>
    </div>
  );
}
