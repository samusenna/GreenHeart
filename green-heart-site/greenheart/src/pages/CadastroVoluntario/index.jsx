import React from "react";
import "../../assets/style/global.css";
import "./main.css";
import img_cad_vol1 from "../../assets/images/img_cad_vol1.jpg";
import logoGreen from "../../assets/images/green heart - logotipo.png";
import InputForm from "../../components/InputForm";
import InputExibirSenha from "../../components/InputExibirSenha";
import { Link } from "react-router-dom";
import api from "../../api";
import Swal from "sweetalert2";
import VLibras from "@djpfs/react-vlibras";

function CadastroVoluntario() {
  function mostrarSucesso() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cadastro realizado",
      footer: "<b>Redirecionando para Login</b>",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const messageErro = {};

  function handleSubmit(e) {
    e.preventDefault();
    let dataNascimento = `${e.target.dtNasc.value.substr(
      6,
      10
    )}-${e.target.dtNasc.value.substr(3, 2)}-${e.target.dtNasc.value.substr(
      0,
      2
    )}`;

    const novoVoluntario = {
      nome: e.target.nome.value,
      cpf: e.target.cpf.value,
      email: e.target.email.value,
      senha: e.target.senha.value,
      telefone: e.target.telefone.value,
      dtNasc: dataNascimento,
      endereco: {
        cep: e.target.cep.value,
        logradouro: e.target.logradouro.value,
        numero: e.target.numero.value,
        complemento: e.target.complemento.value,
      },
    };

    if (novoVoluntario.nome === "") {
      document.getElementById("nome").style.transition = "1s";
      document.getElementById("nome").style.border = "1px solid red";
      messageErro.nome = "Nome inválido, Preencha o campo";
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (
      !cpfRegex.test(novoVoluntario.cpf) ||
      novoVoluntario.cpf === "" ||
      novoVoluntario.cpf.length !== 14
    ) {
      document.getElementById("cpf").style.transition = "1s";
      document.getElementById("cpf").style.border = "1px solid red";
      messageErro.cpf = "CPF inválido.";
    }

    if (novoVoluntario.email === "") {
      document.getElementById("email").style.transition = "1s";
      document.getElementById("email").style.border = "1px solid red";
      messageErro.email = "Preencha o campo.";
    } else if (
      !novoVoluntario.email.includes("@") ||
      !novoVoluntario.email.includes(".")
    ) {
      document.getElementById("email").style.transition = "1s";
      document.getElementById("email").style.border = "1px solid red";
      messageErro.email = "Email inválido";
    }

    if (novoVoluntario.senha === "" || novoVoluntario.senha.length < 8) {
      document.getElementById("senha").style.transition = "1s";
      document.getElementById("senha").style.border = "1px solid red";
      messageErro.senha = "Senha fraca. Mínimo 8 caracteres.";
    }

    if (novoVoluntario.endereco.logradouro === "") {
      document.getElementById("logradouro").style.transition = "1s";
      document.getElementById("logradouro").style.border = "1px solid red";
      messageErro.logradouro = "Endereço inválido. Preencha o campo";
    }

    if (
      novoVoluntario.endereco.numero === "" ||
      novoVoluntario.endereco.numero === null ||
      novoVoluntario.endereco.numero.length < 0
    ) {
      document.getElementById("numero").style.transition = "1s";
      document.getElementById("numero").style.border = "1px solid red";
      messageErro.numero = "Número inválido.";
    }

    if (
      novoVoluntario.dtNasc === "" ||
      novoVoluntario.dtNasc.numero === null ||
      novoVoluntario.dtNasc.length < 10 ||
      novoVoluntario.dtNasc > Date.now()
    ) {
      document.getElementById("dtNasc").style.transition = "1s";
      document.getElementById("dtNasc").style.border = "1px solid red";
      messageErro.dtNasc = "Data inválida.";
    }

    if (
      novoVoluntario.endereco.cep === "" ||
      novoVoluntario.endereco.cep === null
    ) {
      document.getElementById("cep").style.transition = "1s";
      document.getElementById("cep").style.border = "1px solid red";
      messageErro.cep = "CEP inválido.";
    }

    const telefoneRegex = /^(?:\()?\d{2}(?:\))?(?:\d{4,5}-\d{4})$/;
    if (!telefoneRegex.test(novoVoluntario.telefone)) {
      document.getElementById("telefone").style.transition = "1s";
      document.getElementById("telefone").style.border = "1px solid red";
      messageErro.telefone = "Telefone inválido.";
    }

    console.log(messageErro);

    if (Object.keys(messageErro).length === 0) {
      api
        .post("/voluntarios/cadastrar", novoVoluntario)
        .then((response) => {
          if (response.status === 201) {
            mostrarSucesso();
            setTimeout(() => {
              window.location.href = "/login";
            }, 1500);
          }
        })
        .catch((erro) => {
          if (erro.status === 404) {
            console.log("URL não encontrada");
          } else {
            console.log(erro.message);
          }
        });
    } else {
      console.log(messageErro);
    }
  }
  return (
    <div className="CadastroVoluntario">
      <div className="App">
        <VLibras forceOnload={true} />
      </div>
      <div className="divContent">
        <div className="divForm">
          <div className="container_nav">
            <Link to="/">
              <div className="container_img">
                <img src={logoGreen} alt="Logo Greenheart" />
              </div>
            </Link>
            <div className="contTextVoluntario">
              <span className="titleFormVoluntario">
                Bem vindo ao Green Heart!
              </span>
              <span className="subTitleForm">Inscreva-se para continuar.</span>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="contColumnsFormVol">
              <div className="divFormColumn1">
                <InputForm
                  id="nome"
                  nomeDiv="Nome"
                  exemplo="Mariana Oliveira"
                  idErro="nome"
                  messageErro={messageErro.nome}
                />

                <InputForm
                  id="cpf"
                  nomeDiv="CPF"
                  exemplo="000.000.000-00"
                  mask="999.999.999-99"
                />

                <InputForm
                  id="dtNasc"
                  nomeDiv="Data Nascimento"
                  exemplo="12/12/2023"
                  mask="99/99/9999"
                />

                <InputForm
                  id="email"
                  nomeDiv="Email"
                  exemplo="mariana@email.com"
                />

                <InputExibirSenha
                  id="senha"
                  nomeDiv="Senha"
                  exemplo="********"
                />
              </div>
              <div className="divFormColumn2">
                <InputForm
                  id="cep"
                  nomeDiv="CEP"
                  exemplo="00000-000"
                  mask="99999-999"
                />

                <InputForm
                  id="logradouro"
                  nomeDiv="Logradouro"
                  exemplo="Rua Paraná"
                />

                <InputForm id="numero" nomeDiv="Número" exemplo="278" />

                <InputForm
                  id="complemento"
                  nomeDiv="Complemento"
                  exemplo="Casa 2"
                />

                <InputForm
                  id="telefone"
                  nomeDiv="Telefone"
                  exemplo="(24) 90001-2839"
                  mask="(99)99999-9999"
                />
              </div>
            </div>
            <div className="contLowVoluntario">
              <button className="btnFormVoluntario">Criar conta</button>
              <span className="createAccount">
                Já possui conta?
                <b>
                  <Link to="/login" className="noLink">
                    {" "}
                    Login
                  </Link>
                </b>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className="imageCadVol">
        <img src={img_cad_vol1} alt="" />
      </div>
    </div>
  );
}

export default CadastroVoluntario;
