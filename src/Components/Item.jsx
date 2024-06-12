import React from 'react'
import './CSS/Item.css'

function Item(props) {
  const {items,setExpenseTotal} = props;
  const expenseSetter = ()=>{
    setExpenseTotal(expenseTotal);
  }
  
  let expenseTotal = 0;
  return (
    <div className='item-container'>
        <p><span>Expense type</span> <span>amount</span></p>
        {
        (items.length === 0) 
        ? 
        (<div className='item-inner-container'>
          <hr />
          <p>No Expense Entry</p>
        </div>) 
        : 
        (items.map((item,i) => {
          expenseTotal += item.amount;
            return (
            <div className='item-inner-container' key={i}>
              <hr />
                <p className='items'><span>{item.type}</span> <span>{item.amount}</span></p>
            </div>
            )
        }))
        }
        <hr />
        <p onClick={expenseSetter()}><span>Total</span><span>{expenseTotal}</span></p>
    </div>
  )
}

export default Item;