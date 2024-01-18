/** @format */

import {
  Outlet,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, useEffect } from "react";
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
  MyCart,
  Navbar,
  PaymentPlan,
  RecomendedProduct,
  ServiceTab,
  Shop,
  TopHeader,
} from "./pages/Allpages";
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
import ProductDetails from "./components/ProductDetails";
import GuestCheckout from "./components/GuestCheckout";
import CheckoutDetails from "./components/CheckoutDetails";
import { ReactNotifications } from "react-notifications-component";
import "./CSS/mobile.css";
import MyProfile from "./components/MyProfile";
import Failed from "./components/Failed";
import PasswordChanged from "./components/PasswordChanged";
import VerifySubScription from "./components/VerifySubScription";
import AllNews from "./components/AllNews";
import ReturningMember from "./components/ReturningMember";
import ProductOrder from "./components/Orders/ProductOrder";
import ServiceOrder from "./components/Orders/ServiceOrder";
import PastServiceOrder from "./components/Orders/PastServiceOrder";
import CardSaver from "./components/Card/CardSaver";
import { getSession } from "./Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "./store/authSlice";
import OneNews from "./components/News/OneNews";
import ShippingPrivacy from "./components/ShippingPrivacy";
import ReturnPrivacy from "./components/ReturnPrivacy";
import GuestThanks from "./components/GuestThanks";
import GuestFailed from "./components/GuestFailed";

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
        path: "/allproducts/:type/:id/:name",
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
        path: "services/:name",
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
        path: "/thanks/:id",
        element: LazyComponent(<Thanks />),
      },
      {
        path: "/failed/:id",
        element: LazyComponent(<Failed />),
      },
      {
        path: "/indi-services/:id",
        element: LazyComponent(<ServicePage />),
      },
      {
        path: "/privacy-policy",
        element: LazyComponent(<Privacy />),
      },
      {
        path: "/shipping-policy",
        element: LazyComponent(<ShippingPrivacy />),
      },
      {
        path: "/return-policy",
        element: LazyComponent(<ReturnPrivacy />),
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
      {
        path: "/my-profile",
        element: LazyComponent(<MyProfile />),
      },
      {
        path: "/password-changed",
        element: LazyComponent(<PasswordChanged />),
      },
      {
        path: "/verifySubscription/:id",
        element: LazyComponent(<VerifySubScription />),
      },
      {
        path: "/allNews",
        element: LazyComponent(<AllNews />),
      },
      {
        path: "/news/:id",
        element: LazyComponent(<OneNews />),
      },
      {
        path: "/returningMember",
        element: LazyComponent(<ReturningMember />),
      },
      {
        path: "/product-orders",
        element: LazyComponent(<ProductOrder />),
      },
      {
        path: "/upcoming-orders",
        element: LazyComponent(<ServiceOrder />),
      },
      {
        path: "/past-orders",
        element: LazyComponent(<PastServiceOrder />),
      },
      {
        path: "/card_saver",
        element: LazyComponent(<CardSaver />),
      },
      {
        path: "/guestthanks",
        element: LazyComponent(<GuestThanks />),
      },
      {
        path: "/guestfailed",
        element: LazyComponent(<GuestFailed />),
      },
      {
        path: "/guestfailed",
        element: LazyComponent(<GuestFailed />),
      },
    ],
  },
]);

function App() {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getSession());
    }
  }, [isLoggedIn]);

  return (
    <main>
      <ReactNotifications />
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
