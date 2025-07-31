import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ profile }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("authToken");
    navigate("/signin");
    window.location.reload();
  };
  return (
    <div className="bg-[#111111] border-[#1A1A1A] border-1 fixed h-screen w-[6%]">
      <Link to={"/dashboard"}>
        <div className="ml-[20px] mt-[30px] h-[70px] w-[70px] rounded-[16px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
          <p className="text-center p-[15px] text-[25px] font-bold text-[#ccc]">
            F
          </p>
        </div>
      </Link>
      <Link to={"/users"}>
        <div className="ml-[20px] mt-[40px] p-[17.5px] h-[70px] w-[70px] rounded-[16px] bg-[#1A1A1A]">
          <svg
            width="35"
            height="35"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.84326 13.5642H11.8433V3.56421H3.84326V13.5642ZM3.84326 21.5642H11.8433V15.5642H3.84326V21.5642ZM13.8433 21.5642H21.8433V11.5642H13.8433V21.5642ZM13.8433 3.56421V9.56421H21.8433V3.56421H13.8433Z"
              fill="#DBA800"
            />
          </svg>
        </div>
      </Link>
      <Link to={"/transactions"}>
        <div className="ml-[20px] mt-[20px] p-[17.5px] h-[70px] w-[70px] rounded-[16px]">
          <svg
            width="35"
            height="35"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8433 2.56421C7.32326 2.56421 2.84326 7.04421 2.84326 12.5642C2.84326 18.0842 7.32326 22.5642 12.8433 22.5642C18.3633 22.5642 22.8433 18.0842 22.8433 12.5642C22.8433 7.04421 18.3633 2.56421 12.8433 2.56421ZM10.8433 17.5642L5.84326 12.5642L7.25326 11.1542L10.8433 14.7342L18.4333 7.14421L19.8433 8.56421L10.8433 17.5642Z"
              fill="#DBA800"
            />
          </svg>
        </div>
      </Link>
      <Link to={"/profile"} state={{profile}}>
        <div className="ml-[20px] mt-[20px] p-[17.5px] h-[70px] w-[70px] rounded-[16px]">
          <svg
            width="35"
            height="35"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8433 7.56421C16.8433 5.35421 15.0533 3.56421 12.8433 3.56421C10.6333 3.56421 8.84326 5.35421 8.84326 7.56421C8.84326 9.77421 10.6333 11.5642 12.8433 11.5642C15.0533 11.5642 16.8433 9.77421 16.8433 7.56421ZM12.8433 14.5642C10.1733 14.5642 4.84326 15.9042 4.84326 18.5642V21.5642H20.8433V18.5642C20.8433 15.9042 15.5133 14.5642 12.8433 14.5642Z"
              fill="#DBA800"
            />
          </svg>
        </div>
      </Link>
      <div
        className="ml-[20px] mt-[430px] p-[17.5px] h-[70px] w-[70px] rounded-[16px]"
        onClick={handleLogout}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8433 7.56421L16.4333 8.97421L19.0133 11.5642H8.84326V13.5642H19.0133L16.4333 16.1542L17.8433 17.5642L22.8433 12.5642L17.8433 7.56421ZM4.84326 5.56421H12.8433V3.56421H4.84326C3.74326 3.56421 2.84326 4.46421 2.84326 5.56421V19.5642C2.84326 20.6642 3.74326 21.5642 4.84326 21.5642H12.8433V19.5642H4.84326V5.56421Z"
            fill="#DBA800"
          />
        </svg>
      </div>
    </div>
  );
}
