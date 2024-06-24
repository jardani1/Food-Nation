# single responsibility principle

=> the name explains its all every componets should have its single responsibility
modularity mean breaking the app in several componets and you can see we divided in resturant menu & reasturant card, header and other components
and in this way we can maintain the code easily , and update them easily,reusable and testable also.
S

# hooks are utility functions they are like helper functions are simple js functions but special ones which are given to us by react

->we have seprated the fetching pf the data from the resturantsmenu component and we have made a custom hook for fetching the data
and by that we can see that is any problem/bug arises in future which would be fetching error rgeb we can directly look into the useResturantMenu hook insted of searching it in the Resturantmenu component.

-> we have made one custom hook for showing online status

-> i have confusion in what order hooks should be rendered , -the hooks should be written in order for state managemnt and avoid re rendering unnessacerially #research on this


# bundling -> chunking

-> see there is a process of breaking the js files into smaller components to bundle it is called spliting, chunking
all the js files are in one single file when it load in the browser it make s the work of browser easier then to call hundreads of files
so the best way to split the componets in files for faster loading and this is also not goog to have hundreads if files in ine single js file
so basically we do spliting or chunking there are various other name like dynamic bundling and lazy loading and on-demand loading in the case of grocery

=> bundling is logically breaking of a large application into smaller application/ the small applications are features like flights section on  
 make my trip

->it all is done that making of small bundles so that tha loading of that single js file is easy in the browser and that does not
becomes to much to load in the bunlding of the single js file


# lazy loading and on-demand loading in the case of grocery component  , this should connect some dots in your mind/ system design

- we suppposed here the grocery is a very big component

- we make grocery and use lazy import to show that slpilty of js file into two bundle a separate bundle for grocery making of a seprate js file for grocery

- in the dist you can see that seprate grocery js and grocery map file 


->const Grocery = lazy(()=>import("./src/components/Grocery"));         // used for lazy loading as it is a big another componet a seprate bundle it should be wrapped in a suspence and withoy wraping grocery in a suspence you can see that it will show an error becs of time it takes to render grocery is large comparatively and for that react rencders immediately in the meanwhile time then it shows an error that it should wrapped inside a suspence with a fallback ehich renders like loading page or kind of like the shimmer ui in the mean time till the grocery is fetched.
