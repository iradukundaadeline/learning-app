import React from 'react'

const Test = () => {
    const name = "Adeline";
    const hourlyRate = 5;
    const totalHours = 40;
    const salary = hourlyRate * totalHours;
    
    let message = "";
    const age = 14;
  
    if(age < 16) {
      message = "You are underage";
    } else {
      message = "You are old enough";
    }
  
    const status = "SUCCESS";
    const showStatus = false;
  
    const isLoggedIn = false;
    const accountBalance = 2000000;
  
  
    return (
      <>
        <div>Hello {name}</div>
        <p>Your salary: {salary}</p>
        <p>Status: {message}</p>
        { showStatus && <h2>{status}</h2>}
        { isLoggedIn && <p>Your Balance: {accountBalance}</p>}
      </>
    )
  }
  
  export default Test