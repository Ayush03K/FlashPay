import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Balance() {
    const [balance,setBalance] = useState(0);
    const token  = localStorage.getItem("token");
    useEffect( () => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
            .then((response)=>{
                setBalance(response.data.balance)
        })
    },[balance])
  return (
    <div className="h-[350px] w-[1100px] bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-[#222222] border-1 rounded-[24px]">
      <div className="m-[40px] flex justify-between">
        <p className=" text-[#cccccc] font-medium text-[20px]">Total Balance</p>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_21_691)">
            <path
              d="M10.8432 4.31421C6.67651 4.31421 3.11818 6.90588 1.67651 10.5642C3.11818 14.2225 6.67651 16.8142 10.8432 16.8142C15.0098 16.8142 18.5682 14.2225 20.0098 10.5642C18.5682 6.90588 15.0098 4.31421 10.8432 4.31421ZM10.8432 14.7309C8.54318 14.7309 6.67651 12.8642 6.67651 10.5642C6.67651 8.26421 8.54318 6.39754 10.8432 6.39754C13.1432 6.39754 15.0098 8.26421 15.0098 10.5642C15.0098 12.8642 13.1432 14.7309 10.8432 14.7309ZM10.8432 8.06421C9.45985 8.06421 8.34318 9.18088 8.34318 10.5642C8.34318 11.9475 9.45985 13.0642 10.8432 13.0642C12.2265 13.0642 13.3432 11.9475 13.3432 10.5642C13.3432 9.18088 12.2265 8.06421 10.8432 8.06421Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_21_691">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.843262 0.564209)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div></div>
      <div className="mx-[40px] text-white text-[48px] font-bold">
        Rs {balance.toFixed(2)}
      </div>
      <div className="mx-[40px] my-[10px] text-[#666666] text-[14px] ">
        +18.2% vs last month
      </div>
    </div>
  );
}
