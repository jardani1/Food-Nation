import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/header";
import Footer from "./src/components/Footer";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/error";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from  "./src/utils/appStore"

// import Grocery from "./src/components/Grocery";   but we will not import iy like  we will use lazy import


const Grocery = lazy(() => import("./src/components/Grocery"));         // used for lazy loading as it is a big another componet a seprate bundle it 
// should be wrapped in a suspence and withoy wraping grocery in a suspence you can see that it will show an error becs of time it takes to render grocery is large comparatively and for that react rencders immediately in the meanwhile time then it shows an error that it should wrapped inside a suspence 
//with a fallback ehich renders like loading page or kind of like the shimmer ui in the mean time till the grocery is fetched.


const AppLayout = () => {
  const [userName, setuserName] = useState();

  // authenticaton logic

  useEffect(() => {
    const data = {
      name: "Sumukh-Shrivastav"
    }

    setuserName(data.name);
  }, [])


  return (



    // in this context provider i have grouped my whole app every where value of user name is updated like this if we would have groped only header then the in thder only it works username - updates
    // the sore is provided to the whole app
    <Provider store={appStore} >
      <UserContext.Provider value={{ LoggedInUser: userName, setuserName }}>
        <React.Fragment>

          {/* <UserContext.Provider value={{ LoggedInUser: "Elon Musk"}}>  */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          <Footer />
        </React.Fragment>
      </UserContext.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about"
        , element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
      path : "/resturants/:Resid",
      element : <ResturantMenu/>

      }
    ],
    errorElement: <Error />,

  }
  ,
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);