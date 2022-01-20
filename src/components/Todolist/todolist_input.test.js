import { render, fireEvent, queryByPlaceholderText, queryAllByPlaceholderText } from "@testing-library/react";
import InputField from "./todolist_input";
import React from "react";

describe("Input Test",() =>{
    it('search if submit button "submit-button" exists', 
    ()=>{
        const {queryByTestId} = render(<InputField/>)
        expect(queryByTestId('submit-button')).toBeTruthy();
    });

    it('search if placeholder button exists', 
    ()=>{
        const {queryByPlaceholderText} = render(<InputField/>)
        expect(queryByPlaceholderText('Enter a Todo')).toBeTruthy();
    });
});

