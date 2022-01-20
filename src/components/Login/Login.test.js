import { render, fireEvent,} from "@testing-library/react";
import SignUp from "./Login";
import React from "react";
import { act } from "react-dom/test-utils";

describe("SignUp",() =>{
    describe("SignUp",() =>{
        it("calls in submit function", async()=>{
            const mockOnSubmit = jest.fn()
            const  {getByLabelText, getByRole} = render(<SignUp onSubmit={mockOnSubmit}/>)

            await act(async()=>{

                fireEvent.change(getByLabelText("name"),{target:{value:"alek"}})
                fireEvent.change(getByLabelText("email"),{target:{value:"alek@gmail.com"}})
                fireEvent.change(getByLabelText("email"),{target:{value:"123"}})
            }); 
            

            await act(async ()=>{
                fireEvent.click(getByRole("button"))
            })

            expect(mockOnSubmit).toHaveBeenCalled()


            

        })





   
    });
   
})