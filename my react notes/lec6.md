1-> A monolithic application is built as a single unified 
    unit while a microservices architecture is a collection of smaller, independently deployable services./ single resposibility principles
    
    ->2>
      
       refer to image mordern practice is 2nd one --> 
       ![Alt text](image-1.png)

2->hooks are normal javascript function which react gives us , diffrent hooks have diffrent use case

3-> UseEffect(()=>{},[]) , UseEffect is a js function which takes two arguments 1st is a callback function and 2nd is a dependecy array

4 ->the UseEffect's callback function will be called after the component is rendered -- imp*
4 ->the UseEffect's callback function wi;; be called after the component is rendered it is called after the dummy data is rendered like shimmer ui -- imp*
4- first the cpomponent's body will be rendered then the useeffect will be called
5-> if we want to make changes in our component we use local state varible like useState\

6-> after using the useState varible like 
    const [btnname, Setbtnname] = useState("login)
    when we set new value logout to the varible by using Setbtnname
    it re-renders and creates a new var - btnname and gives a new value to it     (const is not assigned with a new value the btnname is new and a new btnname is created)
    the new btnname is creaated with a new value 

 ->   this btnname is used as a value of a button tag  inside a header function and  when the Setbtnname is used to change value 
    the header function is called again.

7-> whenever state vaiable changes , react triggers reconcilliation cycle (it re-renders components)
