import axios from "axios"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button3 } from "./Button3";

export function Appbar({user}){
    const navigate = useNavigate();
    const handleLogout = () => {
        
        localStorage.removeItem("token");
        sessionStorage.removeItem("authToken"); 
        navigate("/login");
        window.location.reload();
    };
    // console.log(user)
    const userName = user ? user.charAt(0).toUpperCase() + user.slice(1) : "Guest";
    return <div className="flex justify-between mr-44">
        <div className="ml-5 font-sans text-2xl text-blue-700 font-extrabold">PayTm </div>
        <div className="flex p-2 pr-4 text-xl gap-10 items-baseline">
            <div>Hello {userName}</div>
            <div className="text-amber-400 font-bold text-3xl">U</div>
            <Button3 label={"Logout"} onClick={handleLogout}/>
        </div>
    </div>
}