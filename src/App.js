import React, { useState } from 'react'
import Expense from './Components/Expense';
import './App.css';
import Income from './Components/Income';
import Item from './Components/Item';

function App() {
  const [balance, setBalance] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [expenseTotal, setExpenseTotal] = useState(0);
  return (
    <div className="App">
      <div>
        <Income setBalance={setBalance} />
      </div>
      <div><Expense balance={balance} setBalance={setBalance} setItemList={setItemList} setExpenseTotal={setExpenseTotal} /></div>
      <div>
        <Item items={itemList} expenseTotal={expenseTotal} />
        <h1><span>Balance:</span><span>₹ {balance}</span></h1>
      </div>
    </div>
  ); 
}

export default App;
