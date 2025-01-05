import { useState } from 'react'
import './App.css'
import Login from "./Components/login/login";  
import CreateAccount from "./Components/clientRegistration/createAccount";  
import Expertise from "./Components/clientRegistration/expertise";  
import PersonalDetail from "./Components/clientRegistration/personalDetail";  
import AddressDetail from "./Components/clientRegistration/addressDetail";  
import MoreDetails from "./Components/clientRegistration/moreDetails";  
import FormComplete from "./Components/clientRegistration/formComplete";  
import Success from "./Components/clientRegistration/success";  
import PartnerAccount from "./Components/partnerRegistration/partnerAccount";  
import PartnerExpertise from './Components/partnerRegistration/partnerExpertise';
import DetailPartner from './Components/partnerRegistration/detailPartner';
import Calendar from './Components/partnerRegistration/calender';

function App() {
  return (
    <>
        <DetailPartner />  
    </>
  )
}

export default App
