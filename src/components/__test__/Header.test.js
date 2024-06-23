// this is unit testing of the header component/ it is like testing one component in isolation. 

import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

// test("should render with the login button in the component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginbutton = screen.getByRole("button",{name:"login"}); // if there are muliple button and we want tofind the specific login button 
  


//   expect(loginbutton).toBeInTheDocument();
// });
// test("should render with the login button in the component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

  
//   const loginbutton = screen.getByText("login"); // we also get the login button by this using getByText


  

//   expect(loginbutton).toBeInTheDocument();
// });
test("should render with cart item - 0 in the component in the component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton = screen.getByRole("button",{name:"login"}); // if there are muliple button and we want tofind the specific login button 
  // const loginbutton = screen.getByText("login"); // we also get the login button by this using getByText


  const cartItems = screen.getByText("Cart(0)-items"); // regex can also be passed like this -> /cart/

  expect(cartItems).toBeInTheDocument();
});
// test("should render with the login button in the component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginbutton = screen.getByRole("button",{name:"login"}); // if there are muliple button and we want tofind the specific login button 
  
//    fireEvent.click(loginbutton);

//    const logoutbutton = screen.getByRole("button",{name:"logout"});

//   expect(logoutbutton).toBeInTheDocument();
// });