import { useSearchParams } from "react-router-dom"
import { Button4 } from "../components/Button4"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { useState } from "react"
import axios from "axios"


export const SendMoney = () => {
    const [amount,setAmount] = useState("");
    const [searchParams] = useSearchParams();
    const user = searchParams.get("user");
    const id = searchParams.get("id")
    const token  = localStorage.getItem("token");
    const handleTransfer = () => {
        axios.post("http://localhost:3000/api/v1/account/transfer",{
                to : id,
                amount
            },{
                headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(() => {
            console.log("transaction successfull");
            alert("Transaction Successfull")
        })
    }
    return (
        <div className="bg-slate-400 h-screen w-screen flex justify-center items-center">
            <div className="h-2/4 w-2/4 bg-white flex flex-col justify-evenly shadow-lg p-8">
                <Heading label="Send Money"/>
                <div className="flex gap-5 items-baseline pl-10">
                    <div className="bg-green-500 h-12 w-12 text-center rounded-full p-3 text-white">{user[0].toUpperCase()}</div>
                    <div className="text-xl font-semibold">{user.charAt(0).toUpperCase() + user.slice(1)}</div>
                </div>
                <Input onChange={(e)=> {
                    setAmount(e.target.value)
                }} placeholder={"Enter amount"} label={"Amount (in Rs)"}/>
                <Button4 label={"Initiate Transfer"} onClick={handleTransfer}/>
                
            </div>
        </div>
    )
}