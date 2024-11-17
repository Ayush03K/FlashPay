import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button3 } from "./Button3";
import { Input } from "./Input";
import { useEffect, useState } from "react";

export function Users({to}){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/find")
        .then((response)=>{
            setUsers(response.data.users)
        })
    }, [])
    return (
        <div className="p-5 text-lg ">
            <Input placeholder={"Search Users"} label={"Users"} />
            <div >
                <div >
                    {users.map((user) => <User user={user} to={to}/>)}
                </div>
            </div>
            
        </div>
    )
}
function User({user,to}){
    const navigate = useNavigate();
    return <div className="flex justify-between items-baseline pl-10 pr-10 m-5">
        <div className="font-serif font-medium">
            {user.firstName} {user.lastName}
        </div>
        <div>
            {/* <Link to={to} > */}
               <Button3 label={"Send Money"} 
               onClick={(e) => {
                navigate("/transfer?user="+user.firstName)
               }}
               />
        {/* //    </Link>                */}
        </div>
    </div>
}