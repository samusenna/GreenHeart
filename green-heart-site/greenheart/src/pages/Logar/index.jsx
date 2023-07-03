import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/global.css";
import "./main.css";
import img_log1 from "../../assets/images/img_log.jpg";
import NavForm from "../../components/NavForm";
import InputForm from "../../components/InputForm";
import InputExibirSenha from "../../components/InputExibirSenha";
import api from "../../api";
import VLibras from '@djpfs/react-vlibras';

function Logar(props) {

  function handleSubmit(e) {
    e.preventDefault();

    const loginUser = {
      email: e.target.email.value,
      senha: e.target.senha.value,
    };

    if (loginUser.email === "" || loginUser.senha === "") {
      document.getElementById("email").style.transition = "1s";
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("senha").style.transition = "1s";
      document.getElementById("senha").style.border = "1px solid red";
      document.getElementById("erro").style.display = "block"
    }

    api
      .post("/usuarios/login", loginUser)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.token != null && response.data.tipoUsuario === "Voluntario") {
            localStorage.setItem("token-user", response.data.token);
            localStorage.setItem("type-user", response.data.tipoUsuario);
            localStorage.setItem("id-user", response.data.id);
            window.location.href = '/feed-voluntario';
          } else if (response.data.token != null && response.data.tipoUsuario === "Empresa") {
            localStorage.setItem("token-user", response.data.token);
            localStorage.setItem("type-user", response.data.tipoUsuario);
            localStorage.setItem("id-user", response.data.id);
            window.location.href = '/feed-empresa';
          }
        }
      }).catch((erro) => {
        document.getElementById("erro").style.display = "block"
        console.log(erro)
      });
  }

  return (
    <div className="Login">
                                <div className="App">
      <VLibras forceOnload={true} />
    </div>
      <div className="divContent">
        <NavForm />
        <div className="divForm">
          <div className="contTextLogin">
            <span className="titleFormLogin">
              Bem vindo de volta ao Green Heart!
            </span>
            <span className="subTitleForm">Acesse sua conta abaixo.</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="contColumnsForm">
              <div className="divFormColumn1">
                <InputForm id="email" nomeDiv="Email" />

                <InputExibirSenha id="senha" nomeDiv="Senha" />
                <div id="erro">E-mail ou senha inválido, tente novamente</div>
              </div>
              <button type="submit" className="btnFormLogin">
                Entrar
              </button>
            </div>

            <div className="contLowLogin">
              <span className="create_account_login">
                Ainda não possui conta? Cadastar{" "}
              </span>
              <b>
                <Link to="/cadastro-voluntario" className="noLink">
                  voluntário
                </Link>
                /
                <Link to="/planos" className="noLink">
                  empresa.
                </Link>
              </b>
            </div>
          </form>
        </div>
      </div>

      <div className="imageLogin">
        <img src={img_log1} alt="" />
      </div>
    </div>
  );
}

export default Logar;
