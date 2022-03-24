import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ShoppingList from "./ShoppingList";


describe ("AddTransaction", ()=>{
    it("should render", ()=>{

        render(<ShoppingList/>);
        expect(screen.getByTestId("Card-Render-Test")).toBeInTheDocument();      
    });
});
