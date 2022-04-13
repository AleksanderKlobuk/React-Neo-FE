import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Weather from "./Weather";


describe ("Weather", ()=>{
    it("should contain Class in Component /Soluton 1", ()=>{
        render(<Weather/>);    
        expect(screen.getByTestId("Test-ID")).toHaveClass("app");;
        /*SPOSON 1*/
        }); 


    it("should contain Class in Component /Solution 2 With element", ()=>{
        render(<Weather/>);    
        const element = screen.getByTestId("Test-ID");
        expect(element).toHaveClass("app");
        expect(element.firstChild).toHaveClass("search"); 
        /*SPOSOB 2 Dzieki temu, ze uzywamy elemen mozemy szukac w childs
        sposobem numer 1*/
        });        

});