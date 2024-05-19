import React, { useState } from 'react'
import './CSS/Expense.css'

function Expense(props) {
  const { setBalance, setItemList, setExpenseTotal, balance } = props;
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  function addItem(e) {
    if (balance - Number(amount) >= 0) {
      setItemList(prevItems => [...prevItems, { type: expenseType, amount: amount }]);
      setExpenseTotal(e => e + Number(amount));
      setBalance(t => t - Number(amount));
    }
    else {
      alert("Insufficient Balance");
    }
    setExpenseType("");
    setAmount("");
    e.preventDefault();
  }
  return (
    <div className='expense-container'>
      <form onSubmit={addItem}>
        <label htmlFor='type'>Type of expense:</label>
        <input id='type' type="text" name='type' value={expenseType} onChange={(e) => { setExpenseType(e.target.value) }} required /><br />
        <label htmlFor='amount'>Amount:</label>
        <input type='number' id='amount' value={amount} name='amount' onChange={(e) => { setAmount(e.target.value) }} required /><br />
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}

export default Expense