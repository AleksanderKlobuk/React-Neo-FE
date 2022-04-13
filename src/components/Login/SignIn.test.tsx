import React from 'react';
import SignIn  from './../../App';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './../../app/store';


describe('SignIn component tests', () => {

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Provider store={store}><SignIn/></Provider>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders Sign In Input', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs.length).toBe(1);

    });
});
