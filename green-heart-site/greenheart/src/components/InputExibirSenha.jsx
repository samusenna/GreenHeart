import '../assets/style/global.css';
import React, { useState } from 'react';

function InputExibirSenha(props) {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    // document.getElementById(props.id).style.border = '1px solid #l'
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='divInputForm'>
      <span>{props.nomeDiv}</span>
      <div className="inputContainer">
        <input className='InputFormPass'
          type={showPassword ? 'text' : 'password'}
          id={props.id}
          value={password}
          onChange={handlePasswordChange}
          placeholder={props.exemplo}
          disabled={props.disabled === false}
        />
        <i onClick={handleTogglePasswordVisibility} className={showPassword ? "uil uil-eye" : "uil uil-eye-slash"}></i>
      </div>
    </div>
  );
}

export default InputExibirSenha;
