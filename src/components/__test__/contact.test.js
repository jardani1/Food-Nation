import { render,screen } from "@testing-library/react"
import Contact from "../contact"
import "@testing-library/jest-dom"
  // rtl  barbejestl depen configured parcel not to  install js dom 

// it and test are the same thing
describe("contact us page test cases ", ()=>{

  
    test('should render my contact page - heading', () => { 

        render(<Contact/>)// this renders it on the js dom adn to ru=u ad test jsxx we have to install 
    
        const hyphon = screen.getByRole("heading"); // screeen gives us acsess to the component rendered in js dom
    
    
    
        // assertion
       expect(hyphon).toBeInTheDocument();
     });
    test('should render by my placeholders element', () => { 
    
        render(<Contact/>)// this renders it on the js dom adn to ru=u ad test jsxx we have to install 
    
        const heroic = screen.getByPlaceholderText("message"); // screeen gives us acsess to the component rendered in js dom
    
    
    
        // assertion
       expect(heroic).toBeInTheDocument();
     });
    test("should render my 2 input boxes or element" , () => { 
    
        render(<Contact/>)
    
        const inputbox = screen.getAllByRole("textbox")// as they are multiple text box so we used getALl and textbox gives us the input boxes
    
       // console.log(inputbox); // this will console the jsx / react element / object
    
    
        // assertion
       expect(inputbox).toHaveLength(2);
     });  
})

