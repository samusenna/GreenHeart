import "../../assets/style/global.css";
import "../CadastroEmpresa/main.css";
import NavForm from "../../components/NavForm";
import img_cad_emp from "../../assets/images/img_cad_emp1.jpg";
import InputForm from "../../components/InputForm";
import InputExibirSenha from "../../components/InputExibirSenha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import VLibras from '@djpfs/react-vlibras';
import { useState } from "react";

function CadastroEmpresa() {

  const location = useLocation();
  const jsonData = location.state?.data;

  const navegar = useNavigate();
  const [erros, setErros] = useState({});

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

  function handleSubmit(e) {
    e.preventDefault();

    const errors = {};

    const novaEmpresa = {
      nome: e.target.nome.value,
      cnpj: e.target.cnpj.value,
      email: e.target.email.value,
      senha: e.target.senha.value,
      telefone: e.target.telefone.value,
      fkPlano: jsonData,
      endereco: {
        cep: e.target.cep.value,
        logradouro: e.target.logradouro.value,
        numero: e.target.numero.value,
      },
    };

    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

    if (novaEmpresa.nome === "") {
      document.getElementById("nome").style.transition = "1s";
      document.getElementById("nome").style.border = "1px solid red";
      setErros(erros.nome = "Nome inválido, Preencha o campo") ;
    }

    if (
      !cnpjRegex.test(novaEmpresa.cnpj) ||
      novaEmpresa.cnpj === "" ||
      novaEmpresa.cnpj.length !== 18
    ) {
      errors.cnpj = "CNPJ inválido.";
      document.getElementById("cnpj").style.transition = "1s";
      document.getElementById("cnpj").style.border = "1px solid red";
      // setErros("CNPJ inválido, Preencha o campo", novaEmpresa.cnpj);
    }
    if (
      novaEmpresa.email === "" ||
      !novaEmpresa.email.includes("@") ||
      !novaEmpresa.email.includes(".")
    ) {
      errors.email = "Email inválido, Preencha o campo. 'example@example.com'";
      document.getElementById("email").style.transition = "1s";
      document.getElementById("email").style.border = "1px solid red";
      // document.getElementById("email").style.display = "block";
      // setErros("Email inválido, Preencha o campo", novaEmpresa.email);

    }

    if (novaEmpresa.senha === "" || novaEmpresa.senha.length < 8) {
      errors.senha = "Senha fraca. Mínimo 8 caracteres.";
      document.getElementById("senha").style.transition = "1s";
      document.getElementById("senha").style.border = "1px solid red";
      // document.getElementById("senha").style.display = "block solid red";
    }

    if (novaEmpresa.endereco.logradouro === "") {
      errors.logradouro = "Endereço inválido. Preencha o campo";
      document.getElementById("logradouro").style.transition = "1s";
      document.getElementById("logradouro").style.border = "1px solid red";
      // document.getElementById("logradouro").style.display = "block solid red";
    }

    if (
      novaEmpresa.endereco.numero === "" ||
      novaEmpresa.endereco.numero === null ||
      novaEmpresa.endereco.numero.length < 0
    ) {
      errors.numero = "Número inválido.";
      document.getElementById("numero").style.transition = "1s";
      document.getElementById("numero").style.border = "1px solid red";
      // document.getElementById("erro").style.display = "block solid red";
    }

    if (
      novaEmpresa.endereco.cep === "" ||
      novaEmpresa.endereco.cep === null ||
      novaEmpresa.endereco.cep < 9
    ) {
      errors.cep = "CEP inválido.";
      document.getElementById("cep").style.transition = "1s";
      document.getElementById("cep").style.border = "1px solid red";
      // document.getElementById("cep").style.display = "block solid red";
    }

    // Validação do campo telefone com a expressão regular
    const telefoneRegex = /^(?:\()?\d{2}(?:\))?(?:\d{4,5}-\d{4})$/;
    if (
      !telefoneRegex.test(novaEmpresa.telefone) ||
      novaEmpresa.telefone.length < 11
    ) {
      errors.telefone = "Telefone inválido.";
      document.getElementById("telefone").style.transition = "1s";
      document.getElementById("telefone").style.border = "1px solid red";
      // document.getElementById("telefone").style.display = "block solid red";
    }

    if (Object.keys(errors).length === 0) {
      api
        .post("/empresas/cadastrar", novaEmpresa)
        .then((response) => {
          if (response.status === 201) {
            mostrarSucesso();
            const loginUser = {
              email: novaEmpresa.email,
              senha: novaEmpresa.senha
            };
            api.post("/usuarios/login", loginUser)
              .then((response) => {
                if (response.status === 200) {
                  if (response.data.token != null && response.data.tipoUsuario === "Empresa") {
                    localStorage.setItem("token-user", response.data.token);
                    localStorage.setItem("type-user", response.data.tipoUsuario);
                    localStorage.setItem("id-user", response.data.id);
                    setTimeout(() => {
                      navegar('/processar-pagamento', { state: { data: jsonData.valor } });
                    }, 1500);
                  }
                }
              }).catch((erro) => {
                console.log(erro)
                document.getElementById('erro').style.display = 'block';
              });
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
      console.log(errors);
    }
  }

  return (
    <div className="CadastroEmpresa">
      <div className="App">
        <VLibras forceOnload={true} />
      </div>
      <div className="divContent">
        <NavForm />

        <div className="divForm">
          <div className="contTextEmpresa">
            <span className="titleFormEmpresa">Bem vindo ao Green Heart!</span>
            <span className="subTitleForm">Inscreva-se para continuar.</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="contColumnsFormEmp">
              <div className="divFormColumn1">
                <InputForm
                  id="nome"
                  nomeDiv="Razão Social"
                  exemplo="ONG Cidade Sem Fome"
                  idErro="erro"
                  erro={erros.nome}
                />

                <InputForm 
                id="cnpj"
                nomeDiv="CNPJ" 
                exemplo="00.000.000/0000-00" 
                mask="99.999.999/9999-99" 
                idErro="erro"
                />

                <InputForm 
                id="email"
                nomeDiv="Email"
                exemplo="ong@email.com"
                idErro="erro"
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
                  idErro="erro"
                />

                <InputForm
                  id="logradouro"
                  nomeDiv="Logradouro"
                  exemplo="Rua Paraná"
                  idErro="erro"
                />

                <InputForm 
                id="numero"
                nomeDiv="Número"
                exemplo="278"
                idErro="erro"
                 />

                <InputForm id="telefone"
                  nomeDiv="Telefone"
                  exemplo="(24) 90001-2839"
                  mask="(99)99999-9999"
                  idErro="erro"
                />
              </div>
            </div>

            <div className="contLowEmpresa">
              <button className="btnFormEmpresa">Criar conta</button>
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

      <div className="imageCadEmp">
        <img src={img_cad_emp} alt="" />
      </div>
    </div>
  );
}

export default CadastroEmpresa;