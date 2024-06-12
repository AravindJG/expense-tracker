import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Expense from './Components/Expense';
import './App.css';
import Income from './Components/Income';
import Item from './Components/Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [balance, setBalance] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [expenseTotal , setExpenseTotal] = useState(0);
  const fetchData = async()=>{
    try{
      if(balance  > 0){
        const response = await axios.get(BACKEND_URL);
        setItemList(response.data);
      }
      else if(window.localStorage.getItem("income") === '0'){
        toast.warning("Please Enter income");
      }
    } catch(error){
      toast.error("Failed to connect to backend");
      console.log(error);
    }
  }
  useEffect(()=>{
    if(window.localStorage.getItem("income") !== '0') setBalance(window.localStorage.getItem("income"));
  },[]);
  
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
