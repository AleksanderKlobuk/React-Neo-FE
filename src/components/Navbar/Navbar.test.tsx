import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from "../../App";
import { Provider } from 'react-redux';
import store from './../../app/store'



describe ("NavTest", ()=>{
    it("should render", ()=>{

        render(<Provider store={store}><Navbar/></Provider>);
        expect(screen.getByTestId("Card-Render-Test")).toBeInTheDocument();      
    });
});
