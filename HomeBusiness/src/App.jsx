import { useState } from 'react'
import './App.css'
import Login from "./Components/login/login";  
import CreateAccount from "./Components/clientRegistration/createAccount";  
import Expertise from "./Components/clientRegistration/expertise";  
import PersonalDetail from "./Components/clientRegistration/personalDetail";  
import AddressDetail from "./Components/clientRegistration/addressDetail";  

function App() {
  return (
    <>
        <AddressDetail />  
    </>
  )
}

export default App
