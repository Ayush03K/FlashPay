import { useSearchParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Button3 } from "../components/Button3"
import { Input } from "../components/Input"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const user = searchParams.get("name");
    // console.log(user)
    return (
    <div className="p-8">
        <Appbar user={user}/>
        <Balance />
        <Users />
    </div>
    )
}