
export interface Todo {
    id:number;
    todo:string;
    isDone: boolean;
}


const uniqueId = () => {
    return Math.round(Math.random() * 1000000);
}

export {
    uniqueId
}


export interface BudgetProps {
  expenseTransactions:{
    expenseTransactions:number,
    id:any,
    expenseAmount:any,
  }[]

  incomeTransactions:{
    incomeTransaction:Object,
    id:any,
    incomeAmount:any,
  }[]

  incomeTransaction:{
    incomeTransaction:number,
    id:any,
    expenseAmount:number, 
  }[]
}