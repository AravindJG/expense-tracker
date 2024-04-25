import React from 'react'

function Expense() {
  return (
    <div className='expense-container'>
        <form action="">
            <label for='type'>Enter type of expense:</label>
            <input name='type' type="text" /><br />
            <label for='amount'>Amount:</label>
            <input type='number' name='amount' /><br />
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default Expense