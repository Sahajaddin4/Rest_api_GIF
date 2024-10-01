import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"

import AboutUs from "./components/pages/AboutUs"
import SignUp from "./components/pages/user_auth/SignUp"
import Login from "./components/pages/user_auth/Login"

function App() {


  return (
    <>
    <div className="app bg-[#FAF5FF] h-full ">
           <Routes>
               <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
              
                <Route  path="about" element={<AboutUs />}/>
                <Route  path="signup" element={<SignUp />}/>
                <Route  path="login" element={<Login />}/>
               </Route>
           </Routes>
      </div> </>
  )
}

export default App;
