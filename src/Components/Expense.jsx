import React, { useState } from 'react'
import './CSS/Expense.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../App';

function Expense(props) {
  const { setBalance, balance } = props;
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  async function addItem(e) {
    if (balance - Number(amount) >= 0) {
      toast.success("Expenses updated successfully");
      try{
        await axios.post(BACKEND_URL,{ type: expenseType, amount: amount });
        setBalance(t => t - Number(amount));
      } catch (error){
        console.log(error);
      }
    }
    else {
      toast.error("Insufficient Balance");
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