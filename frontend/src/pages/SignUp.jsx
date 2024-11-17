import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const SignUp = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    return (
        <div className="bg-green-400 h-screen w-screen flex justify-center items-center">
            <div className="h-3/4 w-1/4 bg-white flex flex-col justify-center rounded-3xl shadow-lg p-8 ">
                <Heading label="Sign Up"/>
                <SubHeading label="this is a signup page"/>
                <Input onChange={(e) => {
                    setFirstName(e.target.value);
                }}placeholder={"Firstname"} label={"First Name"} />
                <Input onChange={(e) => {
                    setLastName(e.target.value);
                }}placeholder={"Lastname"} label={"Last Name"} />
                <Input onChange={(e) => {
                    setUsername(e.target.value);
                }}placeholder={"Username"} label={"Username"} />
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }}placeholder={"Password"} label={"Password"} />
                <Link to={"/dashboard"}>
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            firstName,
                            lastName,
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                    }}label={"SignUp"}/>
                </Link>
                <BottomWarning label={"Already have an account"} bottomtext={"Login"} to={"/login"}/>
            </div>
        </div>
    )
}