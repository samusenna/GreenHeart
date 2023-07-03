import { useState } from "react";
import "../assets/style/global.css";
import InputMask from "react-input-mask";

function InputForm(props) {
  const [valorInput, setValorInput] = useState("");

  const handleInput = (event) => {
    document.getElementById(props.id).style.border = "1px solid #5F806D";
    setValorInput(event.target.value);
  };

    return (
        <div className='divInputForm'>
            <span>{props.nomeDiv}</span>
            <InputMask id={props.id} disabled = {props.disabled === false} mask={props.mask} maskChar={props.maskChar} onChange={handleInput} value={valorInput} className="InputForm" placeholder={props.exemplo} />
                <span id={props.idErro}>{props.erro}</span>

            
        </div>
    )
}

export default InputForm;
