->useEffect() this take tworguments one is a callback function and another is an dependency array - useEffect(()=>{},[])
->if no dependency array -> useEffect is called on every render
->if empty dependency array -> useEffect is called on only initial render
->if the dependency array is a state variable useEffect(()  =>{},[state variable])  -> useEffeect is called every time state variable is updated.
-> it will always be called after initial rennder in all the cases.
->  import {createBrowserRouter ,RouterProvider} from "react-router-dom";
-> hooks should always be called inside the body function.
-> try to call the hooks on the top indsde the body function
-> dont create hooks inside if conditions it creaes inconsistency.


..................***********************************************************................................................*********************

react router dom is library which helps us to route to the diffrent webpages

we write routing confi
RouterProvider giver the routing configuraton to render(to the browser)

-> createBrowserRouter take a list an array of objects as configuration.
-> import { createBrowserRouter,RouterProvider } from "react-router-dom";
   the secound one which is RouterProvider provides the routes to the root element and all the things render by router provider through configs
-> react router dom gives us a hook whicch is a fuction basically - useRouterError-> wich gives us the info about the error at that time

-> if we want to keep the header/footer intact that header/footer should be there rest the body should change, we create children routes within the cofiguration and then the react-router-dom gives the "<outlet />" which when the path is changed it is filled / it is replaced with the diffrent components like when 
path is /about the outlet is replaced by <About /> when the path is  / then it is replaced by <body /> .

examples:-
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const approuter = createBrowserRouter([
  {
    path : "/",
    element:<AppLayout/>,
    children:[
      {
         path : "/",
         element: <Body />,
      },
      {
      path : "/about"
      , element: <About />,
    },
    {
      path : "/contact", 
      element: <Contact/>,
    }],
    errorElement:<Error/>,
  }
])


see there is diffrence why should we use link and not anchor tag <a href =""> becs when we use <a> <a/>  this refreshes the whole page and the link only refreshes the component.
we import link from react-router-dom
thats why react is efficient it has thse super powers that only the component loads not the whole page refreshes the outlet is replaced .
these are the powers that makes react efficient and fast.

# there are two type of routing
-> Sever side routing - in this suppose we have to click on about us the it makes network call fetches the aboutus.html then it renders
-> Client side routing - in this there is no netrork call - the first time we render our it hass all the other components like aboutus 
   so when we click it just loads the component

# New Changes

- we have done first we linked all the resturant cards with link tag -> <Link  key = {restaurant.info.id} to=
  {"/resturants/"+restaurant.info.id}   ><RestaurantCard resData={restaurant} /></Link>; *

  to the resturantmenu with+id and the id is the diffrentiator b/w
  the cards by which the specefic card is called by the url + id the changes the url and calls the desired card menu
  we give the id in the body.js by the resturant id and we retain the id from the useParams() hook-> <const { Resid } = useParams();
                                                                                                     <console.log(Resid);

  the idea we got was from the seeing the link by opening from the original swiggy application we have seen there was the restaurantid was the key which chages then we checked for the id it the key when we were passing the props for the resturant card in body.js then by use Params we re retained the is and we modified the url with id  ->   <Menu_url + Resid
  then with the change we started fetcing the name and the menu of the restaurants