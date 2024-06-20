export type Expense ={
    id:string
    expenseName:string
    amount:number
    category:string
    date: Value
}
 //este type es igual al otro salvo que, con el omit no toma el id, para ahorrar codigo
export type DraftExpense = Omit<Expense, 'id'>

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category ={
    id: string;
    name: string;
    icon: string;
}