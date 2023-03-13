import React from 'react';
import './App.css';
import imag from './Bannerimage.svg';
 import Dropdown from './Dropdown.js'
import {Tooltip} from 'antd';
import { Button, DatePicker } from 'antd';

import { useState } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Hi from './Practice';
import { Progress } from 'antd';



let obj = [
  { total : 1900000,
   profit : 3 ,
   return : 4,
   debt : 3,
    current : 5
  }
]
function App() {
   
 
   let [boolval , setboolval] = useState (false);
   function submithandler  ()  {

      setboolval(true);
       
   }
   
  const options = ['3 Months', '6 Months', '9 Months', '12 Months'];
  return (
 
  <>

   <div className='test'> </div>
   <div className='black'>
   
  </div>
   
   <div className='sidebar'>
   <div className='dashboard'>
 
   <h1 className='title'>Credit Limit Assessment</h1>

</div>
<div >
  <img className='image' src={imag} alt = 'image not found'/>
   </div>
 

   </div>
   
   <p className='head'>Please provide your MCA issued CIN (Company Identification Number)</p>
   
   <input  maxLength={21} className='input'  onKeyDown="if(this.value.length==10) return false;"  type="number"
      id="name"   placeholder="21-digit-CIN" >
   
   </input>
   
   <div className='circle'>
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.125C3.65117 0.125 0.125 3.65117 0.125 8C0.125 12.3488 3.65117 15.875 8 15.875C12.3488 15.875 15.875 12.3488 15.875 8C15.875 3.65117 12.3488 0.125 8 0.125ZM11.4014 5.42832L7.69941 10.5611C7.64767 10.6334 7.57946 10.6922 7.50044 10.7328C7.42142 10.7734 7.33386 10.7946 7.24502 10.7946C7.15618 10.7946 7.06862 10.7734 6.9896 10.7328C6.91057 10.6922 6.84237 10.6334 6.79063 10.5611L4.59863 7.52363C4.53184 7.43047 4.59863 7.30039 4.71289 7.30039H5.5373C5.7166 7.30039 5.88711 7.38652 5.99258 7.53418L7.24414 9.2709L10.0074 5.43887C10.1129 5.29297 10.2816 5.20508 10.4627 5.20508H11.2871C11.4014 5.20508 11.4682 5.33516 11.4014 5.42832Z" fill="#0BA968"/>
</svg>

   </div>
 
    <Dropdown options={options}/>

 





     <div className='button1'>
     <button type="submit" className="button" onSubmit={submithandler}>Proceed</button>
   
     </div>
     <div className='card'>
      <p className='cardhead'>Credit Limit Available for Smartpaddle Technologies Private Limited</p>
     
     
     
     
      <p className ></p>
     
       
     
   
   
   
     <Hi prof = {obj[0].profit} ret = {obj[0].return } debt = {obj[0].debt} curr = {obj[0].current} />
     </div>
   
     <p className = 'subhead'> Credit limit available &nbsp; : </p>
     
     <p className = 'sub'>  INR &nbsp; {obj[0].total} </p>
     
     
 
   </>
  );
}

export default App;
