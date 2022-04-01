import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";

import Expenses from "./components/Expenses/Expenses.js";

let dummyExpense=[
    




    // {
    //   id: "e1",
    //   title: "School Fee",
    //   amount: 250,
    //   date: new Date(2022, 5, 12),
    // },
    // {
    //   id: "e2",
    //   title: "Books",
    //   amount: 230,
    //   date: new Date(2022, 5, 12),
    // },
    // {
    //   id: "e3",
    //   title: "House Rent",
    //   amount: 700,
    //   date: new Date(2022, 5, 12),
    // },
    // {
    //   id: "e4",
    //   title: "Food",
    //   amount: 240,
    //   date: new Date(2022, 5, 12),
    // },
  ];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
};

export default App;
