import React, { useState } from 'react'
import './CSS/Income.css';
function Income({setBalance}) {
    const [income, setIncome] = useState("");
    function addIncome(e){
        setBalance(income);
        setIncome("");
        e.preventDefault();
    }
  return (
    <div className='income-container'>
        <form onSubmit={addIncome}>
            <label htmlFor='income'>Enter income:</label>
            <input type='number' id='income' value={income} onChange={(e)=>{setIncome(e.target.value)}} required/>
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default Income