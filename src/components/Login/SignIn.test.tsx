import React from 'react';
import * as ReactDOM from 'react-dom';
import SignIn from './SignIn';
import '@testing-library/jest-dom'
import { render, fireEvent, server } from "../../test-utils";
import { store } from '../../app/store';
import { act, waitFor } from '@testing-library/react';
import { DefaultResponseResolver, mockHandler } from "msw-expect";
import { rest } from "msw";


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('SignIn component tests', () => {
    it('Renders Sign In Inputs', () => {
        render(<SignIn />);
        expect(document.querySelectorAll("input").length).toBe(3);
    });

    it('SignIn request is sent', async () => {
        const fn = jest.fn();
        server.use(
          rest.post(
            "/users/",
            fn
          )
        );

        const { getByText, getByPlaceholderText } = render(<SignIn />); 
        fireEvent.change(getByPlaceholderText("Email"), { target: { value: "Test" } });
        fireEvent.click(getByText(/Submit/));

        await waitFor(() => expect(fn.mock.calls[0][0].body).toEqual({
            email: "Test",
            password: ""
        }));
        // expect(fn.mock.calls[0]).toEqual({});
        await waitFor(() => expect(store.getState().auth?.user).toEqual({email: "Test"}));
    }); 

    it('SignIn request is sent with mockHandler', async () => {
        const handler = mockHandler((req, res, ctx) => {
            res(ctx.json({email: "Test"}));
        });
        server.use(
          rest.post(
            "/users/",
            handler as DefaultResponseResolver
          )
        );
            
        const { getByText, getByPlaceholderText } = render(<SignIn />); 
        fireEvent.change(getByPlaceholderText("Email"), { target: { value: "Test" } });
        fireEvent.click(getByText(/Submit/));

        await waitFor(() => expect((handler.getRequest() as any).body).toEqual({
            email: "Test",
            password: ""
        }));
        await waitFor(() => expect(store.getState().auth?.user).toEqual({email: "Test"}));
    }); 
});
 