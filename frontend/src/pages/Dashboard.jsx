import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Button3 } from "../components/Button3"
import { Input } from "../components/Input"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return (
    <div className="p-8">
        <Appbar/>
        <Balance price={"50000"} />
        <Users to={"/transfer"}/>
    </div>
    )
}