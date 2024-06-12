import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Expense from './Components/Expense';
import './App.css';
import Income from './Components/Income';
import Item from './Components/Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [expenseTotal , setExpenseTotal] = useState(0);
  const fetchData = async()=>{
    let localStorage = window.localStorage.getItem("income");
    try{
      if(localStorage  > 0){
        const response = await axios.get("http://localhost:5000/");
        if(localStorage !== 0) setBalance(window.localStorage.getItem("income"));
        setItemList(response.data);
      }else{
        toast.warning("Enter income");
      }
    } catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{  
    fetchData();
  },[balance]);
  
  return (
    <div className="App">
      <div>
        <Income setBalance={setBalance} />
      </div>
      <div><Expense balance={balance} setBalance={setBalance} setItemList={setItemList} /></div>
      <div>
        <Item items={itemList} setExpenseTotal={setExpenseTotal}/>
        <h1><span>Balance:</span><span>₹ {balance - expenseTotal}</span></h1>
      </div>
      <ToastContainer/>
    </div>
  ); 
}

export default App;
