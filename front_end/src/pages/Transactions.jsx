import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Accordion, AccordionItem } from "@heroui/react";


export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token"); // or however you're storing JWT
        const res = await axios.get("http://localhost:3000/api/v1/account/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(res.data.transactions);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen w-full flex">
      <NavBar />
      <div className="p-5 text-lg ml-[8%] w-[92%]">
        <h2 className="text-2xl text-white font-bold mb-6">Recent Transactions</h2>

        {loading ? (
          <p className="text-white">Loading transactions...</p>
        ) : (
          <Accordion
            itemClasses={{
              base: "border-b border-[#333] py-1",
              indicator:
                "ml-auto text-[#666666] transition-transform duration-300 data-[open=true]:rotate-[-90deg]",
              title: "text-white text-left mb-[2.5px]",
              subtitle: "text-[#666666] mr-[5px]",
              content: "text-white",
            }}
          >
            {transactions.map((txn) => (
  <AccordionItem
    key={txn._id}
    aria-label={`Transaction ${txn._id}`}
    title={`₹${txn.amount} - ${txn.status}`}
    subtitle={`From: ${txn.from.slice(0, 6)}... To: ${txn.to.slice(0, 6)}...`}
  >
    <div>
      <p><strong>Transaction ID:</strong> {txn._id}</p>
      <p><strong>Amount:</strong> ₹{txn.amount}</p>
      <p><strong>From:</strong> {txn.from}</p>
      <p><strong>To:</strong> {txn.to}</p>
      <p><strong>Status:</strong> {txn.status}</p>
      <p><strong>Time:</strong> {new Date(txn.date).toLocaleString()}</p>
    </div>
  </AccordionItem>
))}

          </Accordion>
        )}
      </div>
    </div>
  );
}
