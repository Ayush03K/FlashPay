import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button2 } from "../components/Button2"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { Link } from "react-router-dom"

export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div className="bg-green-800 h-screen w-screen flex justify-center items-center">
            <div className="h-3/4 w-1/4 bg-white flex flex-col justify-center rounded-3xl shadow-lg p-8">
                <Heading label="Login"/>
                <SubHeading label="this is a login page"/>
                <Input onChange={(e) => {
                    setUsername(e.target.value);
                }}placeholder={"Username"} label={"Username"} />
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }}placeholder={"Password"} label={"Password"} />
                <Link to={"/dashboard"}>
                    <Button2 onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                    }}label={"Login"} />
                </Link>
                
                <BottomWarning label={"Don't have an account"} bottomtext={"SignUp"} to={"/signup"}/>
            </div>
        </div>
    )
}