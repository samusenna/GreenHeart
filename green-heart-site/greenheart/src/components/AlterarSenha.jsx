import "../pages/PerfilUsuario/main.css";
import "../assets/style/global.css";
import InputExibirSenha from "./InputExibirSenha";
import { useState } from 'react';
import api from '../api';

function AlterarSenha() {


  const idEmpresa = localStorage.getItem("id-user");
  const token = localStorage.getItem("token-user");
  const [erros, setErros] = useState({});

  const [estaEditando, setEstaEditando] = useState(false);

  function editarPerfilEmp(e) {
    e.preventDefault();

    const atualizarUser = {
        senha: e.target.senha.value,
    }



  if (atualizarUser.senha === "" || atualizarUser.senha.length < 8) {
    document.getElementById("senha").style.transition = "1s";
    document.getElementById("senha").style.border = "1px solid red";
    setErros({ ...erros, logradouro: "O campo deve ter mais de 8 caracteres." });
  }

  if (Object.keys(erros).length === 0) {
    console.log("Executar API")
    api.post(`/empresas/${idEmpresa}`, atualizarUser, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 201) {
            window.location.reload();
        }
    }).catch((error) => {
        console.error(error)
    })

    setEstaEditando(false);
    }
}


  return (
    <div id="formPassword">
      <form className="passwordContForm"  onSubmit={(e) => editarPerfilEmp(e)} >
        <span className="titleForm">Redefinir senha</span>

        <div className="divInputFormPerfil">
          <InputExibirSenha
            disabled={estaEditando === true}
            id="senha"
            nomeDiv="Nova-Senha"
          />
        </div>

        <div className="divInputFormPerfil">
          <InputExibirSenha
            disabled={estaEditando === true} id="senha" 
            nomeDiv="Confirmacao-Senha"
          />
        </div>

        <div className='divContBtn'>
                    <div className='contBtnSubForm'>
                        <button type='button' onClick={() => setEstaEditando(!estaEditando)} className='btnFormEdit'>Editar</button>
                    </div>
                    <div className='contBtnSubForm2'>
                        <button type="submit"
                        style={{
                          backgroundColor: estaEditando === true ? "#04402F" : "#CFCFCF",
                          pointerEvents: estaEditando === true ? "auto" : "none",
                          color: estaEditando === true ? "#FFFFFF" : "#999999",
                          border: estaEditando === true ? "1px solid #cccccc" : "none",
                          opacity: estaEditando === true ? "1" : "0.6"
                      }} className='btnForm'>Salvar</button>
                    </div>
                </div>
      </form>
    </div>
  );
}

export default AlterarSenha;
