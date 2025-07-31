import React from "react";
import NavBar from "../components/NavBar";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Transactions() {
  const transactions = [
    {
      id: 1,
      title: "Spotify Premium",
      subtitle: "Monthly Subscription • Jul 30, 2025",
      description:
        "Your Spotify Premium plan was renewed successfully. Payment of ₹199.00 has been deducted from your wallet.",
    },
    {
      id: 2,
      title: "Amazon Order",
      subtitle: "Electronics • Jul 29, 2025",
      description:
        "You purchased a Logitech MX Master 3S mouse. Payment of ₹7,499.00 completed via UPI.",
    },
    {
      id: 3,
      title: "Zomato",
      subtitle: "Dinner Order • Jul 28, 2025",
      description:
        "Your Zomato dinner order from Biryani Blues was successfully delivered. ₹459.00 paid via card.",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen w-full flex">
      <NavBar />
      <div className="p-5 text-lg ml-[8%] w-[92%]">
        <h2 className="text-2xl text-white font-bold mb-6">Recent Transactions</h2>
        <Accordion
          itemClasses={{
            base: "border-b border-[#333] py-1",
            indicator: "ml-auto text-[#666666] transition-transform duration-300 data-[open=true]:rotate-[-90deg]",
            title: "text-white text-left mb-[2.5px]",
            subtitle: "text-[#666666] mr-[5px]",
            content: "text-white ",
          }}
        >
          {transactions.map((txn) => (
            <AccordionItem
              key={txn.id}
              aria-label={`Accordion ${txn.id}`}
              title={txn.title}
              subtitle={txn.subtitle}
            >
              {txn.description}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
