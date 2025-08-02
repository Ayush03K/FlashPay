import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from './Input';
import { Button3 } from './Button3';
import { Button2 } from './Button2';

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");
const token  = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://flashpay-m4uu.onrender.com/api/v1/user/find?filter=" + filter)
      .then((response) => {
        setUsers(response.data.users || []);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, [filter]);

  const handleSend = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    axios.post("https://flashpay-m4uu.onrender.com/api/v1/account/transfer", {
      to : selectedUser.id,
                amount
            },{
                headers : {
                Authorization : `Bearer ${token}`
            }
        })
    .then(() => {
      alert(`₹${amount} sent to ${selectedUser.firstName} successfully!`);
      setAmount("");
      setSelectedUser(null);
      setShowModal(false);
    })
    .catch((err) => {
      alert("Failed to send money.");
      console.error(err);
    });
  };

  return (
    <div className="p-6 text-white ml-[8%] w-[92%]">
      <div className="text-2xl font-semibold mb-4">All Users</div>
      <div className="max-w-md">
        <Input
          placeholder="Search users by name or username"
          label="Search"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="mt-6 space-y-4">
        {users.length === 0 ? (
          <p className="text-gray-400">No users found.</p>
        ) : (
          users.map((user,value) => (
            <div
              key={value}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm flex justify-between items-center hover:bg-white/10 transition"
            >
              <div>
                <p className="font-medium text-white">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-400">@{user.username}</p>
              </div>

              <div className="flex gap-3">
                <Button3
                  label="Send Money"
                  onClick={() => {
                    setSelectedUser(user);
                    setShowModal(true);
                  }}
                />
                <Button2 label="Request" />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-[#1e1e1e] p-6 rounded-2xl w-[90%] max-w-md text-white">
            <h3 className="text-xl font-semibold mb-4">
              Send Money to {selectedUser.firstName} {selectedUser.lastName}
            </h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 text-white outline-none mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setAmount("");
                }}
                className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500"
              >
                Send ₹
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
