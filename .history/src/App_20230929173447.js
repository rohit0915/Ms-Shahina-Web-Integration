/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/AcneQuiz/Quiz";
import {
  AboutUs,
  AllProducts,
  CheckIngredients,
  Contact,
  Footer,
  Gallery,
  GiftCard,
  Home,
  LogIn,
  Membership,
  MenuOptions,
  MyCart,
  Navbar,
  PaymentPlan,
  RecomendedProduct,
  ServiceTab,
  Shop,
  SignUp,
  TopHeader,
} from "./pages/Allpages";
import ThankuScreen from "./components/ThankuScreen";
import ServicePage from "./components/Services/ServicePage";
import Appointment from "./components/Appointment";
import "./CSS/style.css";
import IndivisualAppointment from "./components/IndivisualAppointment";
import Schedule1 from "./components/Schedule/Schedule1";
import Schedule2 from "./components/Schedule/Schedule2";
import Schedule3 from "./components/Schedule/Schedule3";
import Thanks from "./components/Thanks";

const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Navbar />
      <MenuOptions />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<ServiceTab />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paymentplan" element={<PaymentPlan />} />
        <Route path="/giftcards" element={<GiftCard />} />
        <Route path="/acnequiz" element={<Quiz />} />
        <Route path="/acnequiz/recomended" element={<RecomendedProduct />} />
        <Route path="/checkIngredients" element={<CheckIngredients />} />
        <Route path="/thankYou" element={<ThankuScreen />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/indiAppointment" element={<IndivisualAppointment />} />
        <Route path="/schedule1" element={<Schedule1 />} />
        <Route path="/schedule2" element={<Schedule2 />} />
        <Route path="/schedule3" element={<Schedule3 />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/services/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
