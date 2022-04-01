import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";


const NewExpense=(props)=>{


const onSaveExpenseDateHandler =(enteredExpenseData)=>

{const expenseDate ={
    ...enteredExpenseData,
     id: Math.random().toString()
}
props.onAddExpense(expenseDate);

console.log(expenseDate);
};

//Here we received data form ExpenseForm.js(child to parent) in the form of enteredExpenseDate.

    return(
        <div className="new-expense">
        <form>
            <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler}/>

        </form>
        </div>
    )
}

export default NewExpense;