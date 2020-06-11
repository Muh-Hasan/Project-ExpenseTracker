import React from 'react';
import './App.css';
import Header from './component/header'
import Balance from './component/balance'
import IncomeExpense from './component/incomeexpense'
import TransactionList from './component/transactionlist'
import  AddTransaction  from './component/addtransaction'
import GlobalProvider from './context/globalstate'


function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
