import React from "react";
import {useEffect,  } from "react";
import AppReducer from "./AppReducer";


const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")!) || [],/*ions")!) is necessary with Typescript here*/
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")!) || [] /*ions")!)  is necessary with Typescript here*/
};

export const GlobalContext = React.createContext<any>(initialState);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });


  const deleteTransaction = (id:string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };

  const addExpense = (expenseTransaction:any) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};