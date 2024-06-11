import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Expense from './Components/Expense';
import './App.css';
import Income from './Components/Income';
import Item from './Components/Item';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [balance, setBalance] = useState(15000);
  const [itemList, setItemList] = useState([]);
  const fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/");
      setItemList(response.data);
      console.log(itemList);
    } catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div className="App">
      <div>
        <Income setBalance={setBalance} />
      </div>
      <div><Expense balance={balance} setBalance={setBalance} setItemList={setItemList} /></div>
      <div>
        <Item items={itemList} setBalance={setBalance}/>
        <h1><span>Balance:</span><span>₹ {balance}</span></h1>
      </div>
      <ToastContainer/>
    </div>
  ); 
}

export default App;
