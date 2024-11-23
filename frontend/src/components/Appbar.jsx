import axios from "axios"
import { useSearchParams } from "react-router-dom";

export function Appbar({user}){

    return <div className="flex justify-between mr-44">
        <div className="ml-5 font-sans text-2xl text-blue-700 font-extrabold">PayTm </div>
        <div className="flex p-2 pr-4 text-xl gap-10 items-baseline">
            <div>Hello {user.charAt(0).toUpperCase() + user.slice(1)}</div>
            <div className="text-amber-400 font-bold text-3xl">U</div>
        </div>
    </div>
}