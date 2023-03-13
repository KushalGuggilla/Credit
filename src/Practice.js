import { Progress } from 'antd';
import './practice.css';
import React from 'react';
const Hi = (props) => (
  <div className='hi'
    style={{
      width: 338,
     
    }}
  >
    <p> profit Margin</p>
    <Progress percent={props.prof*20} size="small" />
    <p>Return on Asset</p>
    <Progress percent={props.ret *20} size="small" />
    <p>Debt Ratio</p>
    <Progress percent={props.debt*20} size="small"  />
    <p>Current Ratio</p>
    <Progress percent={props.curr *20} size="small" />
  </div>
);
export default Hi;