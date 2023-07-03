import '../pages/PerfilUsuario/main.css'
import '../assets/style/global.css'
import InputForm from "./InputForm";
import { useState } from 'react';
import api from '../api';

function AlterarInfosUser() {
    const idEmpresa = localStorage.getItem("id-user")
    const token = localStorage.getItem("token-user")
    const [erros, setErros] = useState({})

    const [estaEditando, setEstaEditando] = useState(false);

    function editarPerfilEmp(e) {
        e.preventDefault();

        const atualizarEmpresa = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            telefone: e.target.telefone.value,
            endereco: {
                cep: e.target.cep.value,
                logradouro: e.target.logradouro.value,
                numero: e.target.numero.value,
            }
        }


        const regex = /^[a-zA-Z0-9 ]*$/;
        if (!regex.test(atualizarEmpresa.nome)) {
            document.getElementById("nome").style.transition = "1s";
            document.getElementById("nome").style.border = "1px solid red";
            setErros({ ...erros, nome: "O campo não pode conter caracteres especiais." });
        }
        if (!regex.test(atualizarEmpresa.numero)) {
            document.getElementById("numero").style.transition = "1s";
            document.getElementById("numero").style.border = "1px solid red";
            setErros({ ...erros, numero: "O campo não pode conter caracteres especiais." });
        }

        if (!regex.test(atualizarEmpresa.logradouro)) {
            document.getElementById("logradouro").style.transition = "1s";
            document.getElementById("logradouro").style.border = "1px solid red";
            setErros({ ...erros, logradouro: "O campo não pode conter caracteres especiais." });
        }

        if (atualizarEmpresa.nome === "") {
            document.getElementById("nome").style.transition = "1s";
            document.getElementById("nome").style.border = "1px solid red";
            setErros({ ...erros, nome: "Preencha o campo." })
        }
        if (atualizarEmpresa.email === "" || !atualizarEmpresa.email.includes('@') || !atualizarEmpresa.email.includes('.')) {
            document.getElementById("email").style.transition = "1s";
            document.getElementById("email").style.border = "1px solid red";
            setErros({ ...erros, email: "Preencha o campo abaixo corretamente." })
        }

        if (
            atualizarEmpresa.endereco.cep === "" ||
            atualizarEmpresa.endereco.cep === null ||
            atualizarEmpresa.endereco.cep < 9
        ) {
            erros.cep = "CEP inválido.";
            document.getElementById("cep").style.transition = "1s";
            document.getElementById("cep").style.border = "1px solid red";
        }

        if (atualizarEmpresa.endereco.numero === "" || atualizarEmpresa.numero === null || atualizarEmpresa.numero === 0) {
            document.getElementById("numero").style.transition = "1s";
            document.getElementById("numero").style.border = "1px solid red";
            setErros({ ...erros, numero: "Preencha o campo." })
        }

        if (atualizarEmpresa.endereco.logradouro === "") {
            document.getElementById("logradouro").style.transition = "1s";
            document.getElementById("logradouro").style.border = "1px solid red";
            setErros({ ...erros, logradouro: "Preencha o campo." })
        }

        const telefoneRegex = /^(?:\()?\d{2}(?:\))?(?:\d{4,5}-\d{4})$/;
        if (!telefoneRegex.test(atualizarEmpresa.telefone)) {
            document.getElementById("telefone").style.transition = "1s";
            document.getElementById("telefone").style.border = "1px solid red";
            setErros({ ...erros, telefone: "Telefone inválido." })
        }

        if (Object.keys(erros).length === 0) {
            console.log("Executar API")
            api.post(`/empresas/${idEmpresa}`, atualizarEmpresa, {
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
        <div id='contFormName'>
            <span className='titleForm'>Seus dados</span>
            <form onSubmit={(e) => editarPerfilEmp(e)} className='contFormEmp'>
                <div className='contInpForm'>
                    <div className='contInputInfo1'>
                        <div className='divInputFormPerfil'>
                            <InputForm
                                style={{
                                    backgroundColor: estaEditando === true ? '#04402F' : '#FFFFFF',
                                    border: estaEditando === true ? 'none' : '0.5px solid #04402F',
                                }}
                                disabled={estaEditando === true} id="nome" nomeDiv="Nome" />

                        </div>

                        <div className='divInputFormPerfil'>
                            <InputForm disabled={estaEditando === true} id="email" nomeDiv="Email" />

                        </div>
                        <div className='divInputFormPerfil'>
                            <InputForm disabled={estaEditando === true} mask="(99)99999-9999" id="telefone" nomeDiv="Telefone" />

                        </div>
                    </div>
                    <div className='contInputInfo2'>
                        <div className='divInputFormPerfil'>
                            <InputForm disabled={estaEditando === true} mask="99999-999" id="cep" nomeDiv="CEP" />

                        </div>

                        <div className='divInputFormPerfil'>
                            <InputForm disabled={estaEditando === true} id="numero" nomeDiv="Número" />

                        </div>
                        <div className='divInputFormPerfil'>
                            <InputForm className={estaEditando ? 'InputForm' : 'InputFormDisabled'} disabled={estaEditando === true} id="logradouro" nomeDiv="Logradouro" />

                        </div>
                    </div>
                </div>
                <div className='divContBtn'>
                    <div className='contBtnSubForm'>
                        <button type='button' onClick={() => setEstaEditando(!estaEditando)} className='btnFormEdit'>Editar</button>
                    </div>
                    <div className='contBtnSubForm2'>
                        <button type="submit" style={{
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
    )

}

export default AlterarInfosUser;