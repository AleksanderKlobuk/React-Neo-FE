
type ACTIONTYPE = 
{ 
  type: 'ADD_INCOME'; payload: string }   | 
   { type: 'ADD_EXPENSE'; payload: string }  | 
   { type: 'DELETE_TRANSACTION'; payload: string;  };

  
const AppReducer= (state, action:ACTIONTYPE) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions]
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          incomeTransaction => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          expenseTransaction => expenseTransaction.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export default AppReducer;