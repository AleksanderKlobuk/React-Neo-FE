import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AddTransaction from "./AddTransaction";

describe ("AddTransaction", ()=>{
    it("should render", ()=>{
        render(<AddTransaction/>);
        expect(screen.getByTestId("Card-Render-Test")).toBeInTheDocument();
        
    });

    it("should contain input", ()=>{
        render(<AddTransaction/>);
        expect(screen.getByTestId("input-Income-Text")).toBeInTheDocument();
        expect(screen.getByTestId("input-Income-Amount")).toBeInTheDocument();
        expect(screen.getByTestId("Submit-Income-Button")).toBeInTheDocument();
        expect(screen.getByTestId("input-Expense-Text")).toBeInTheDocument();
        expect(screen.getByTestId("input-Expense-Amount")).toBeInTheDocument();
        expect(screen.getByTestId("Submit-Expense-Button")).toBeInTheDocument();
        
    });
});