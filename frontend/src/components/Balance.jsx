import axios from "axios";
import { useEffect, useState } from "react"

export function Balance(){
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
    return <div className="p-5 text-lg text-center font-medium">
        Your Balance = Rs {balance.toFixed(2)}
    </div>
}