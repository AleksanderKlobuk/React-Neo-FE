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