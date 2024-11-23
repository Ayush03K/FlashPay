import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button2 } from "../components/Button2"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })
        // console.log(response.data.name)
        localStorage.setItem("token",response.data.token)
        navigate("/dashboard?name="+response.data.name);
    } 
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
                <Button2 onClick={handleLogin} label={"Login"} />
                
                <BottomWarning label={"Don't have an account"} bottomtext={"SignUp"} to={"/signup"}/>
            </div>
        </div>
    )
}