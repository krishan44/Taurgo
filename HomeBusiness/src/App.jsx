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
import CurrentAddress from './Components/partnerRegistration/currentAddress'
import Attachment from './Components/partnerRegistration/attachments'
import Complete from "./Components/partnerRegistration/complete";  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<PartnerAccount />} />
        <Route path="/client-register" element={<CreateAccount />} />
        <Route path="/expertise" element={<PartnerExpertise />} />
        <Route path="/details" element={<DetailPartner />} />
        <Route path="/address" element={<CurrentAddress />} />
        <Route path="/attachments" element={<Attachment />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}

export default App;
