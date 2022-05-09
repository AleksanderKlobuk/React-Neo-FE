import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { Provider } from 'react-redux'
// Import your own reducer
import { BrowserRouter } from 'react-router-dom'
import { store as Store } from './app/store'

const server = setupServer(
    rest.post<{ email: string }>('/auth/login', (req, res, ctx) => {
      return res(ctx.json({email: req.body?.email}))
    }),
    rest.post('/user/', (req, res, ctx) => {
    
      return res(ctx.json({mocked: true}));
    }),
)

function render(
  ui,
  {
    store = Store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
        <BrowserRouter>
            <Provider store={store}>{children}</Provider>
        </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper as any, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render, server }