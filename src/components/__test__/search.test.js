import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestList.json";
import Body from "../Body";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  // this is we are mocking the fetch function as js dom doesnt have it and the original fetch in the body that jest cannot understand

  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});




it("shold render the body component with search", async () => {
  // when we are using a component which has state and fetch then we should wra that in a act , and for act we use async await
   // then we arap it ina bowser router as link is not understood by jest
  await act(async () =>
    
    render(

        <BrowserRouter>  
        <Body />
        </BrowserRouter>
    
   ));
      
    const searchBtn = screen.getByRole("button",{name:"search"})

    const seacrhInput = screen.getByTestId
// assertion
    expect(searchBtn).toBeInTheDocument()

});
it("shold render specific no of card with the search done accordingly", async () => {
  // when we are using a component which has state and fetch then we should wra that in a act , and for act we use async await
  // then we arap it ina bowser router as link is not understood by jest
  await act(async () =>
    render(
      <BrowserRouter>
     
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "search" });

  const seacrhInput = screen.getByTestId("searchInput"); // we give data-testid="searchInput" to uniquely identify and left with no other options
  fireEvent.change(seacrhInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
 
  // assertion
  expect(cards.length).toBe(3);
});