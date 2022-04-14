import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, server } from "../../test-utils";
import Login from "./Login";
import { store } from '../../app/store';
import { act, waitFor } from '@testing-library/react';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Login component tests', () => {
    it('Renders Login Input', () => {
        render(<Login />);
        expect(document.querySelectorAll("input").length).toBe(2);
    });

    it('Login Input has correct placeholder', () => {
        render(<Login />);
        expect(document.querySelector("input")?.getAttribute("placeholder")).toBe("Email");
    });

    it('Login request is sent', () => {
        act(() => {
            const { getByText, getByPlaceholderText } = render(<Login />);
            fireEvent.change(getByPlaceholderText("Email"), { target: { value: "Test" } });
            fireEvent.click(getByText(/Submit/));
        });

        waitFor(() => expect(store.getState().auth?.user).toEqual({email: "Test"}));
    });
});

