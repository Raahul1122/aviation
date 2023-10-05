
import './App.css';

import { Routes, Route } from "react-router-dom"  

import AviationMain from './Pages/AviationMain';
import EmailPIn from './Pages/EmailPIn';
import SellerForm from './Pages/SellerForm';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Kyc from './Pages/Kyc';
import Listing from './Pages/Listing';
function App() {
  
  return (
    <>
 {/* <AviationMain/> */}
 {/* <SignIn/> */}
  {/* <SignUp/> */}
  {/* <SellerForm/> */}
  {/* <EmailPIn/> */}
  <div className="App">
      <Routes>
        <Route path="/" element={ <AviationMain/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/sellerform" element={ <SellerForm/>}/>
        <Route path="/kyc" element={ <Kyc/> } />
        <Route path="/emailpin" element={ <EmailPIn/> }/>
        <Route path="/listing" element={ <Listing/> }/>
      </Routes>
    </div>

    </>
  );
}

export default App;
