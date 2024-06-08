import React, { useState, useEffect} from 'react'
import './Donate.scss';
import { Close } from '@mui/icons-material';
import axios from 'axios';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';



const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};


export default function Donate() {
  
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  
  const handleClose = () => {
    if(document.querySelector('.donate').classList.contains('active')) {
      document.querySelector('.donate').classList.remove('active');
    }
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(!isPhoneValid(phoneNumber)){
      setError("invalid phone number");
      return;
    } 
    
    if(phoneNumber <= 0){
      setError("amount can not be empty");
      return;
    } 
    
    const numberArray = phoneNumber.split("");
    numberArray.shift();

    const requestBody =  {
      "BusinessShortCode": 174379,
      "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNTI5MDMwMDUy",
      "Timestamp": Date.now,
      "TransactionType": "CustomerPayBillOnline",
      "Amount": 1,
      "PartyA": numberArray.join(""),
      "PartyB": 174379,
      "PhoneNumber": numberArray.join(""),
      "CallBackURL": "https://mydomain.com/path",
      "AccountReference": "CompanyXLTD",
      "TransactionDesc": "Payment of X" 
    }

    fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      mode:  'cors',
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==",
    }}).then(response => console.log(response))
      .catch(error => console.error(error));
    
    
    await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',{
      body: requestBody,
      headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YZMLSeRyhUqbjLfydaZpQFfoYLWG',
      'Access-Control-Allow-Origin' : '*',
    }})
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    }).catch(error => {
      console.log(error);
    })
  };
  
  
  useEffect(() => {
    error && setTimeout(() => {
      setError(null);
    }, 1000);
  }, [error]);
  
  return (
    <div className='donate' id='donate'>
        <Close className='close' onClick={handleClose}/>
        <h1>Be Part Of Us</h1>
        <h4>How it works:</h4>
        <ul>
            <li>&raquo; Enter your phone number</li>
            <li>&raquo; Select the amount you wish to donate and click "SEND NOW"</li>
            <li>&raquo; Complete the transaction by entering you pin and submit</li>
        </ul>
        <form onSubmit={handleSubmit}>
            <h4>Get started:</h4>
            <label htmlFor='name'>Phone number</label>
            <PhoneInput
              defaultCountry='ke'
              value={phoneNumber}
              onChange={phone => setPhoneNumber( phone)}
              hideDropdown
              className='input'
            />
            
            <label htmlFor='amount'>Amount</label>
            <input type="number" name="amount" id="amount" placeholder={1000} required value={amount} onChange={e => setAmount(e.target.value)} min={5} step={5}/>
            <button className="btn" type='submit' role='button' title='send'>SEND NOW</button>
            {
              error && <h4 className='error'>Invalid Phone Number</h4>
            }
        </form>
    </div>
  )
}
