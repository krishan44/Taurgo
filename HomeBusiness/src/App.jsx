import './App.css';
import Login from "./Components/login/login";  
import CreateAccount from "./Components/clientRegistration/createAccount";  
import PartnerAccount from "./Components/partnerRegistration/partnerAccount";  
import Expertise from "./Components/clientRegistration/expertise";  
import AddressDetail from "./Components/clientRegistration/addressDetail";  
import MoreDetails from "./Components/clientRegistration/moreDetails"; 
import FormComplete from "./Components/clientRegistration/formComplete";
import Success from "./Components/clientRegistration/success";  
import PersonalDetail from "./Components/clientRegistration/PersonalDetail"; // Ensure PersonalDetail component is imported

import PartnerExpertise from './Components/partnerRegistration/partnerExpertise';
import DetailPartner from './Components/partnerRegistration/detailPartner';
import CurrentAddress from './Components/partnerRegistration/currentAddress';
import Attachment from './Components/partnerRegistration/attachments';
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
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/company-address" element={<AddressDetail />} />
        <Route path="/personal-details" element={<PersonalDetail />} /> 
        <Route path="/more-details" element={<MoreDetails />} />
        <Route path="/complete" element={<FormComplete />} />
        <Route path="/complete-client" element={<Success />} /> 
        
        <Route path="/partner-expertise" element={<PartnerExpertise />} /> 
        <Route path="/detail-partner" element={<DetailPartner />} />
        <Route path="/current-address" element={<CurrentAddress />} />
        <Route path="/attachments" element={<Attachment />} />
        <Route path="/complete-partner" element={<Complete />} />
      </Routes>
    </Router>
  );
}

export default App;
