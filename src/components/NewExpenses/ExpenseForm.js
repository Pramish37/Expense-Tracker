
// import React from "react";
import './ExpenseForm.css';
import React, {useState} from "react";

const ExpenseForm=(props)=>{

    const[enteredTitle, setEnteredTitle]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{setEnteredTitle(event.target.value)};

    const amountChangeHandler=(event)=>{setEnteredAmount(event.target.value)};

    const dateChangeHandler=(event)=>{setEnteredDate(event.target.value)};

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseDate(expenseDate);
        console.log(expenseDate);

        setEnteredTitle(' ');
        setEnteredAmount(' ');
        setEnteredDate(' ');
    };

    return(
        <div className="new-expense__controls">

        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="numer" min="1" step="1" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>

        <div className="new-Expense__actions">
            <button type="submit" onClick={submitHandler}>Add Expense</button>
        </div>
        
        </div>
       
    )
};

export default ExpenseForm;
