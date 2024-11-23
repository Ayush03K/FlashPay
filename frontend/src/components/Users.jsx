import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button3 } from "./Button3";
import { Input } from "./Input";
import { useEffect, useState } from "react";

export function Users(){
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");
    useEffect(() => {
        // setInterval(
            axios.get("http://localhost:3000/api/v1/user/find?filter=" + filter)
            .then((response)=>{
                // console.log(response.data.users)
                setUsers(response.data.users)
            })
    }, [filter])

    return (
        <div className="p-5 text-lg ">
            <Input placeholder={"Search Users"} label={"Users"} onChange={(e) => {
                setFilter(e.target.value);
            }}/>
            <div >
                <div >
                    {users.map((user) => <User  user={user} />)}
                </div>
            </div>
            
        </div>
    )
}
function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between items-baseline pl-10 pr-10 m-5">
        <div className="font-serif font-medium">
            {user.firstName} {user.lastName}
        </div>
        <div>
            <Button3 label={"Send Money"} 
                onClick={(e) => {
                navigate("/transfer?user="+user.firstName+"&id="+user.id)
               }}
            />
        </div>
    </div>
}