import { useSearchParams } from "react-router-dom"
import { Button4 } from "../components/Button4"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { useState } from "react"


export const SendMoney = () => {
    const [amount,setAmount] = useState("");
    const [searchParams] = useSearchParams();
    const user = searchParams.get("user");
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
                <Button4 label={"Initiate Transfer"} />
            </div>
        </div>
    )
}