import React, { useState } from 'react';
import './Dropdown.css'
function DropdownInput({ options }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionClick(option) {
    setSelectedOption(option);
    setShowOptions(false);
  }

  return (
 
<div className='dropdown'>
    <div >
      <div
       className='select'
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="placeholder">
          {selectedOption || (
            <span   >Select Payment Terms</span>
          )}
        </div>
        <div className='arrow'>
          {showOptions ?  (
          <svg width="13.36" height="9" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.460937 9.5H1.77924C1.86889 9.5 1.95327 9.45605 2.006 9.38398L6.99995 2.50039L11.9939 9.38398C12.0466 9.45605 12.131 9.5 12.2207 9.5H13.5391C13.6533 9.5 13.7201 9.36992 13.6533 9.27676L7.45532 0.732034C7.23032 0.422665 6.76978 0.422665 6.54654 0.732034L0.348489 9.27676C0.279931 9.36992 0.346728 9.5 0.460937 9.5Z" fill="#BFBFBF"/>
        </svg>
       
          ): (
            <svg width="13.36" height="9" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.539 0.5H12.2207C12.131 0.5 12.0466 0.543945 11.9939 0.616016L6.99995 7.49961L2.006 0.616016C1.95327 0.543945 1.86889 0.5 1.77924 0.5H0.460885C0.346628 0.5 0.279831 0.630078 0.346628 0.723242L6.54468 9.26797C6.76968 9.57734 7.23022 9.57734 7.45346 9.26797L13.6515 0.723242C13.7201 0.630078 13.6533 0.5 13.539 0.5V0.5Z" fill="#BFBFBF"/>
            </svg>
           
          ) }
        </div>
      </div>
      {showOptions && (
        <ul
          style={{
            position: 'absolute',
            top : '455px',
            left: '489px',
            width : '240px',
            border: '1px solid #ccc',
            borderRadius: '0 0 4px 4px',
            backgroundColor: '#fff',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              style={{
                padding: '6px 10px',
                cursor: 'pointer',
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default DropdownInput;