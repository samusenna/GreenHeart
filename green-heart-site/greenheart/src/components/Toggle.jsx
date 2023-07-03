import React, { useState } from 'react';

const Toggle = (props) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ display: 'flex' }}>
      <button type="button" className='toggleBtn'
        onClick={() => handleToggle(false)}
        style={{
          backgroundColor: selectedOption === false ? '#04402F' : '#FFFFFF',
          width: '25%',
          border: selectedOption === true ? '0.5px solid #04402F' : '0.5px solid #04402F',
          color: selectedOption === true ? '#000000' : '#F2F2F2',
          borderRadius: '8px 0px 0px 8px',
        }}
      >
        Não
      </button>
      <button type="button" className='toggleBtn'
        onClick={() => handleToggle(true)}
        style={{
          backgroundColor: selectedOption === true ? '#04402F' : '#FFFFFF',
          width: '25%',
          border: selectedOption === true ? '0.5px solid #04402F' : '0.5px solid #04402F',
          color: selectedOption === true ? '#F2F2F2' : '#000000',
          borderRadius: '0px 8px 8px 0px',
        }}
      >
        Sim
      </button>
      <input id={props.id} value={selectedOption} type="text" style={{ display: 'none'}} />
    </div>
  );
};

export default Toggle;
