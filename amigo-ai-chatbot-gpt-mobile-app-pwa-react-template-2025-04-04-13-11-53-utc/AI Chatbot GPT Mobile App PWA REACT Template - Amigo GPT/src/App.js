import './App.css';
import React from "react";
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/mediaQuery.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash.jsx"
import LetsYouIn from './pages/LetsYouIn.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import VerifyPhoneNumber from './pages/VerifyPhoneNumber.jsx'
import NotificationAllow from './pages/NotificationAllow.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import ConfirmOtp from './pages/ConfirmOtp.jsx';
import NewPassword from './pages/NewPassword.jsx';
import PersonalInformation from './pages/PersonalInformation.jsx';
import CreateNewPin from './pages/CreateNewPin.jsx';
import FingerPrintScan from './pages/FingerPrintScan.jsx';
import LanguageSelect from './pages/LanguageSelect.jsx';
import ChooseInterests from './pages/ChooseInterests.jsx';
import ReasonUsing from './pages/ReasonUsing.jsx';
import AmigoGptHome from './pages/AmigoGptHome.jsx';
import PersonalInfoUpdate from './pages/PersonalInfoUpdate.jsx';
import AmigoChat from './pages/AmigoChat.jsx';
import History from './pages/History.jsx';
import BankCards from './pages/BankCards.jsx';
import AddNewCard from './pages/AddNewCard.jsx';
import PaymentMethod from './pages/PaymentMethod.jsx';
import CancelSubscription from './pages/CancelSubscription.jsx';
import PlusSubscription from './pages/PlusSubscription.jsx';
import Security from './pages/Security.jsx';
import MarketingPreferences from './pages/MarketingPreferences.jsx';
import NotificationSetting from './pages/NotificationSetting.jsx';
import Language from './pages/Language.jsx';
import Currency from './pages/Currency.jsx';
import Faq from './pages/Faq.jsx';
import DataPrivacy from './pages/DataPrivacy.jsx';
import AboutAmigo from './pages/AboutAmigo.jsx';
import Alert from './pages/Alert.jsx';
import Confirmation from './pages/Confirmation.jsx';
import ConfirmPaymentPin from './pages/ConfirmPaymentPin.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SubscriptionPayment from './pages/SubscriptionPayment.jsx';
import SelectPaymentMethod from './pages/SelectPaymentMethod.jsx';
import Notification from './pages/Notification.jsx';
import InviteFriends from './pages/InviteFriends.jsx';
import Feedback from './pages/Feedback.jsx';
import Deactivate from './pages/Deactivate.jsx';
import Delete from './pages/Delete.jsx';
import DeleteDeactivate from './pages/DeleteDeactivate.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/LetsYouIn" element={<LetsYouIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/VerifyPhoneNumber" element={<VerifyPhoneNumber />} />
        <Route path="/NotificationAllow" element={<NotificationAllow />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ConfirmOtp" element={<ConfirmOtp />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
        <Route path="/CreateNewPin" element={<CreateNewPin />} />
        <Route path="/FingerPrintScan" element={<FingerPrintScan />} />
        <Route path="/LanguageSelect" element={<LanguageSelect />} />
        <Route path="/ChooseInterests" element={<ChooseInterests />} />
        <Route path="/ReasonUsing" element={<ReasonUsing />} />
        <Route path="/AmigoGptHome" element={<AmigoGptHome />} />
        <Route path="/PersonalInfoUpdate" element={<PersonalInfoUpdate />} />
        <Route path="/AmigoChat" element={<AmigoChat />} />
        <Route path="/History" element={<History />} />
        <Route path="/BankCards" element={<BankCards />} />
        <Route path="/AddNewCard" element={<AddNewCard />} />
        <Route path="/PaymentMethod" element={<PaymentMethod />} />
        <Route path="/CancelSubscription" element={<CancelSubscription />} />
        <Route path="/PlusSubscription" element={<PlusSubscription />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/MarketingPreferences" element={<MarketingPreferences />} />
        <Route path="/NotificationSetting" element={<NotificationSetting />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/Currency" element={<Currency />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/DataPrivacy" element={<DataPrivacy />} />
        <Route path="/AboutAmigo" element={<AboutAmigo />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/ConfirmPaymentPin" element={<ConfirmPaymentPin />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SubscriptionPayment" element={<SubscriptionPayment />} />
        <Route path="/SelectPaymentMethod" element={<SelectPaymentMethod />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/InviteFriends" element={<InviteFriends />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Deactivate" element={<Deactivate />} />
        <Route path="/Delete" element={<Delete />} />
         <Route path="/DeleteDeactivate" element={<DeleteDeactivate />} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
