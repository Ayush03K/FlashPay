import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<Login/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="transfer" element={<SendMoney/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
