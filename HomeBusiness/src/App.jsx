import { useState } from 'react'
import './App.css'
import Login from "./Components/login/login";  
import CreateAccount from "./Components/clientRegistration/createAccount";  
import Expertise from "./Components/clientRegistration/expertise";  
import PersonalDetail from "./Components/clientRegistration/personalDetail";  // Fix casing and name

function App() {
  return (
    <>
        <PersonalDetail />  
    </>
  )
}

export default App
