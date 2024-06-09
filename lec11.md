# Higher order component

  // its is a compoent which takes a compoent as a aargument and returns a new component

  // its contract - input - component ==> new component


  const withPromotedlabel=(RestaurantCard)=>{


     return(props)=> {          // here we are retuning a arrow function which returns some piece of jsx
      return(
            <div>
              <label>Promoted</label>
              <RestaurantCard {...props}/>
            </div>
      );
     };
  };


-> Ui layer is powered by data layer ,data layer is all the data that you have in your application
-> we just filter out the card with item category for removing the veg and non veg toggle and and the addres in the footer.a


# see there a cotrolled components and uncontrolled components
- when a component which is supposed to do some taks and it has its own varable then the component can update the state by its on data changes
  and that is why it is caled uncontrolled component like the xample of the Resturaant category it is responsible ofr showing thw category and 
  and passing the props to the item list so thet from there the Resturant caterogy like recomended the iteems in side recomemnede can be showm 
  here:- 

  const ResturantCategory = (alpha) => {

    //  console.log(alpha?.alpha?.itemCards);

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {

        setShowItems(!showItems)

    };

    return (

        <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {alpha?.alpha?.title}({alpha?.alpha?.itemCards?.length})
                </span>
                <span>▼</span>
            </div>
            {showItems && <ItemList items={alpha?.alpha?.itemCards} />}
        </div>



    );

};

# hence the reatturant card was not a controlled comonent as its parent component was not having full control on it

So here on click the state change and renders item list and vice-versa, addtionally we are going to change this to like anothery category is cilcked the items are rendered then the previous cateory should be closed


# explaninng the working of the expanion of Accordians or categories showing he item list and expaning a particular accordian and minimizing  the others

-> for that expanision of the acoordian of the particular index we send a state variable setshowIndex as a prop to the resturutant category from the resturant menu which is triggers from on click's functions in the resturant category   the setshowitem(index) is given to all the caterogy and the categories are rendered with the setshowindex its an arrow function with the index of the accordian/category and when the category is clicked and then it trigges the setshowIndex and set the index, as the state varible is updates and then the item list of that accordian/category is rendered.

 => in react this thing is called lifting the state up - you can read about it online


 # let us discuss one thing about thing about this parent compnent-that how showItem is updates as it is not a state :
    <!-- { categories.map((category,index) =>(
            <ResturantCategory
             key = {category?.card?.card?.title }
             alpha={category?.card?.card}
             showItems= {index===showIndex?true:false} // here you might think how show item updates on its value as it is not a state var see notes for that 
             showVerify = {()=>setshowIndex(null)}
             setshowIndex = {()=>setshowIndex(index)}
             /> )) 
                      }   

:-  When showIndex updates, React re-renders the ParentComponent, and in turn, it re-evaluates the showItems prop for each ResturantCategory component. Here's the process in detail:

State Update in ParentComponent:

When setShowIndex is called, it updates the state variable showIndex.
This state change triggers a re-render of the ParentComponent.
Re-render of ParentComponent:

During the re-render, the map function iterates over the categories array again.
For each category, the showItems prop is recalculated based on the new showIndex value. Specifically, showItems is set to true if the current index matches showIndex, otherwise, it is false.

-> and in this i have added showVerify to close the component on clicked again

# prop drilling in which the prop is passed from the parent component to the last children like from returant menu to the item list
-> its very imp to manage the data as the data is the new oil
-> suppose this propdrilling for the lagrer data passing it down not only two componets but multiple level of components

-> Prop Drilling is the problem and the user context is the solution
in that we can use hooks like -  createContext and useContext for creation of and using of a data which can be used anywhere
# Context
->and using context in class based componens there is another way bexs there are no hooks in class based components refer to about.js


see ther is a value after the authentiction of the user is given to a tate var in the UserContext value, and the user context wraps the whole
app like this-
 <UserContext.Provider value={{ LoggedInUser: userName }}> // after the fetching the state var is re-rendered with a updated value and updates the val
      <React.Fragment>
        
        <UserContext.Provider value={{ LoggedInUser: "Elon Musk"}}> // here the static value is given so it is the header is always rendered with the static value , and the inner UserContext.Provider takes precedence over the outside one 
          <Header />
        </UserContext.Provider>
        <Outlet />
        <Footer />
      </React.Fragment>
    </UserContext.Provider>



-> and in this in the first place what we did is tied the context with a state variable for changing in the future

-> for changing the context value we will have to change the state variable state var, so we pass the state var in the context provider
-<UserContext.Provider value={{ LoggedInUser: userName ,setuserName }}>  , and then we change it using the onChange event listner like this -<input className="border-4 ml-12 " value={LoggedInUser} onChange={(e) => { value= setuserName(e.target.value) }}></input>

//End of lec


IMP the next lec is the complex one start that by the notes
