import { render } from "@testing-library/react";
import InputField from "./todolist_input";
import React, { SetStateAction } from "react";
import { FormEvent } from "react";



describe("Input Test",() =>{
    it('search if submit button "submit-button" exists', 
    ()=>{
        const {queryByTestId} = render(<InputField todo={""} setTodo={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
        } } handleAdd={function (e: FormEvent<Element>): void {
            throw new Error("Function not implemented.");
        } }/>)
        expect(queryByTestId('submit-button')).toBeTruthy();
    });

    it('search if placeholder button exists', 
    ()=>{
        const {queryByPlaceholderText} = render(<InputField todo={""} setTodo={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
        } } handleAdd={function (e: FormEvent<Element>): void {
            throw new Error("Function not implemented.");
        } }/>)
        expect(queryByPlaceholderText('Enter a Todo')).toBeTruthy();
    });
});

