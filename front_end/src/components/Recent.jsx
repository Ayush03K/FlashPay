import { Accordion, AccordionItem } from '@heroui/react';
import { useNavigate } from 'react-router-dom';


export default function Recent({ transactions = [] }) {
  const navigate = useNavigate();

  return (
    <div className='p-[40px] w-[1720px] bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-[#222222] border-1 rounded-[24px]'>
      <div className='flex pb-[40px] items-center justify-between'>
        <p className='text-[#cccccc] font-medium text-[20px]'>Recent Activity</p>
        <button
          className='text-[#6366F1] font-medium text-[18px]'
          onClick={() => navigate("/transactions")}
        >
          View all
        </button>
      </div>

      <Accordion
        itemClasses={{
          base: "border-b border-[#333] py-2",
          indicator: "ml-auto text-[#666666] transition-transform duration-300 data-[open=true]:rotate-[-90deg]",
          title: "text-white mb-[2.5px]",
          subtitle: "text-[#666666] mr-[5px]",
          content: "text-white mt-[15px]",
        }}
      >
        {transactions.slice(0, 2).map((txn, idx) => (
          <AccordionItem 
              key={txn._id}
              aria-label={`Transaction ${txn._id}`}
              title={`₹${txn.amount} - ${txn.status}`}
              subtitle={`To: ${txn.to.slice(0, 6)}...`}
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
    </div>
  );
}
