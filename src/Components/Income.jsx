import React from 'react'

function Income() {
    // function addIncome(){}
  return (
    <div className='income-container'>
        <form>
            <label>Enter income:</label>
            <input type='number' />
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default Income