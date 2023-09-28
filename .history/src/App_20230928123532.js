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
  SignUp,
  TopHeader,
} from "./pages/Allpages";
import ThankuScreen from "./components/ThankuScreen";
import ServicePage from "./components/Services/ServicePage";

const LazyComponent = (Component) => {
  return (
    <Suspense
      fallback={
        <div>
          <h1 className="text-8xl">loading</h1>
        </div>
      }
    >
      {Component}
    </Suspense>
  );
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
        path: "signup",
        element: LazyComponent(<SignUp />),
      },
      {
        path: "allproducts",
        element: LazyComponent(<AllProducts />),
      },
      {
        path: "mycart",
        element: LazyComponent(<MyCart />),
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
        children: [
          {
            path: ":service",
            element: <ServicePage />,
          },
        ],
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
        path: "checkIngredients",
        element: LazyComponent(<CheckIngredients />),
      },
      {
        path: "/thankYou",
        element: LazyComponent(<ThankuScreen />),
      },
      {
        path: "/appointment",
        element: LazyComponent(<ThankuScreen />),
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <TopHeader />
      <Navbar />
      <MenuOptions />
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
