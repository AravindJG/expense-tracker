import logo from './logo.svg';
import React,{useState} from 'react'
import Expense from './Components/Expense';
import './App.css';
import Income from './Components/Income';
import Item from './Components/Item';

function App() {
  const [total,setTotal] = useState(0);
  const [itemList, setItemList] = useState([{type:'milk',amount:'50'},{type:'food',amount:'150'}])
  return (
    <div className="App">
      <Income setTotal={setTotal}/>
      <Expense total={total}/>
      <Item items={itemList}/>
      <h1>Balance:{total}</h1>
    </div>
  );
}

export default App;
