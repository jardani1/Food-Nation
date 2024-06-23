import { fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import ResturantMenu from "../ResturantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load the resturants menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Leon's Gourmet Collection(4)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("itemList").length).toBe(4);

 const addBtns= screen.getAllByRole("button",{name : "Add +"})
 fireEvent.click(addBtns[0]);

   expect(screen.getByText("Cart(1)-items")).toBeInTheDocument();
});
