import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import NavBar from "../components/NavBar";
import Balance from "../components/Balance";
import SRCard from "../components/SRCard";
import Recent from "../components/Recent";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard() {
  const location = useLocation();
  const [transactions, setTransactions] = useState([]);
useEffect(() => {
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token"); // Or however you store it
      const res = await axios.get("https://flashpay-m4uu.onrender.com/api/v1/account/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data.transactions);
      console.log(transactions);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    }
  };

  fetchTransactions();
}, []);

const profile = location.state?.profile || JSON.parse(localStorage.getItem("profile"));

if (!profile) return <div className="text-white">No user data found</div>;

const { firstName, lastName } = profile;

const userName = firstName
  ? firstName[0].toUpperCase() + firstName.slice(1)
  : "Guest";

const userInitial = firstName && lastName
  ? firstName[0].toUpperCase() + lastName[0].toUpperCase()
  : "G";

  return (
    <div className="bg-[#0A0A0A] min-h-screen w-full flex">
      <NavBar profile={profile}/>
      <div className="m-[40px] ml-[152px] flex flex-col gap-[40px]">
        {/* intro header */}
        <div className="flex justify-between">
          <div>
            <div className="text-white text-[24px] font-semibold font-sans">
              Good Morning, {userName}
            </div>
            <div className="text-[#666666] text-[15px] font-sans">
              Here what's happening with your money
            </div>
          </div>
          <div className="h-[50px] w-[50px] rounded-[50%] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <p className="text-[#ccc] font-semibold">{userInitial}</p>
          </div>
        </div>
        <div className="flex gap-[40px] ">
          <Balance />
          <SRCard />
        </div>
        <Recent transactions={transactions}/>
      </div>
    </div>
  );
}
