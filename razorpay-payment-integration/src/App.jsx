import React, { useState } from 'react'
// import { useRazorpay } from "react-razorpay";
import './App.css'
import PaymentComponent from './Components/PaymentComponent/PaymentComponent';

function App() {
  //  const { error, isLoading, Razorpay } = useRazorpay();

  return (
    <>
     Paymement Integration  
     <PaymentComponent/>
    </>
  )
}

export default App
