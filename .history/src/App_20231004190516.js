/** @format */

import {
  Outlet,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense } from "react";
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
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import FAQ from "./components/FAQ";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword";
import Signup from "./components/Signup";
import GiftCart from "./components/GiftCart";
import CartDetails from "./components/CartDetails";
import ProductDetails from "./components/ProductDetails";
import GuestCheckout from "./components/GuestCheckout";
import CheckoutDetails from "./components/CheckoutDetails";
import './CSS/mobile.css'

const LazyComponent = (Component) => {
  return <Suspense fallback={<div></div>}>{Component}</Suspense>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: LazyComponent(<LogIn />),
      },

      {
        path: "allproducts",
        element: LazyComponent(<AllProducts />),
      },
     
      {
        path: "contact",
        element: LazyComponent(<Contact />),
      },
      {
        path: "aboutus",
        element: LazyComponent(<AboutUs />),
      },
      {
        path: "membership",
        element: LazyComponent(<Membership />),
      },
      {
        path: "shop",
        element: LazyComponent(<Shop />),
      },
      {
        path: "services",
        element: LazyComponent(<ServiceTab />),
      },
      {
        path: "gallery",
        element: LazyComponent(<Gallery />),
      },
      {
        path: "paymentplan",
        element: LazyComponent(<PaymentPlan />),
      },
      {
        path: "giftcards",
        element: LazyComponent(<GiftCard />),
      },
      {
        path: "acnequiz",
        element: <Quiz />,
      },
      {
        path: "acnequiz/recomended",
        element: LazyComponent(<RecomendedProduct />),
      },
      {
        path: "/checkIngredients",
        element: LazyComponent(<CheckIngredients />),
      },
      {
        path: "/thankYou",
        element: LazyComponent(<ThankuScreen />),
      },

      {
        path: "/appointment",
        element: LazyComponent(<Appointment />),
      },
      {
        path: "/indiAppointment",
        element: LazyComponent(<IndivisualAppointment />),
      },
      {
        path: "/schedule1",
        element: LazyComponent(<Schedule1 />),
      },

      {
        path: "/schedule2",
        element: LazyComponent(<Schedule2 />),
      },
      {
        path: "/schedule3",
        element: LazyComponent(<Schedule3 />),
      },
      {
        path: "/thanks",
        element: LazyComponent(<Thanks />),
      },
      {
        path: "/services/:id",
        element: LazyComponent(<ServicePage />),
      },
      {
        path: "/privacy-policy",
        element: LazyComponent(<Privacy />),
      },
      {
        path: "/terms",
        element: LazyComponent(<Terms />),
      },
      {
        path: "/faq",
        element: LazyComponent(<FAQ />),
      },

      {
        path: "/forget-password",
        element: LazyComponent(<ForgetPassword />),
      },
      {
        path: "/changePassword",
        element: LazyComponent(<ChangePassword />),
      },
      {
        path: "/signup",
        element: LazyComponent(<Signup />),
      },
      {
        path: "/giftCrat",
        element: LazyComponent(<GiftCart />),
      },
      {
        path: "/cardDetails",
        element: LazyComponent(<CartDetails />),
      },
      
      {
        path: "/product/:id",
        element: LazyComponent(<ProductDetails />),
      },
      
      {
        path: "/guestCheckout",
        element: LazyComponent(<GuestCheckout />),
      },
      
      {
        path: "/guestCheckout/card-details",
        element: LazyComponent(<CheckoutDetails />),
      },
      {
        path: "mycart",
        element: LazyComponent(<MyCart />),
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <TopHeader />
      <Navbar />  
      <Outlet />
      <Footer />
    </main>
  );
}

export default function MainApp() {
  return (
    <RouterProvider router={appRouter}>
      <Router />
    </RouterProvider>
  );
}
