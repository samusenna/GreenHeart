import "../assets/style/global.css";
import "../pages/FeedEmpresa/main.css";
import btnClose from "../assets/images/x.png";
import Toggle from "./Toggle";
import InputMask from 'react-input-mask'
import { Link } from "react-router-dom";
import api from "../api";
import { useState } from "react";

function CriarPub(props) {

    const idEmpresa = localStorage.getItem("id-user")
    const token = localStorage.getItem("token-user")
    const [erros, setErros] = useState({})

    function criarPublicacao(e) {
        e.preventDefault();

        api.get(`/empresas/buscar-por-id/${idEmpresa}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    const publicacao = {
                        titulo: e.target.titulo.value,
                        descricao: e.target.descricao.value,
                        tipoAcao: e.target.tipoAcao.value,
                        totalHrTrabalho: e.target.totalHrTrabalho.value,
                        localEvento: e.target.localEvento.value,
                        DataHoraEvento: e.target.DataHoraEvento.value,
                        nomeOrganizador: e.target.nomeOrganizador.value,
                        emailOrganizador: e.target.emailOrganizador.value,
                        telOrganizador: e.target.telOrganizador.value,
                        fkEmpresa: response.data,
                        beneficio: {
                            alimentacao: e.target.alimentacao.value,
                            transporte: e.target.transporte.value,
                            hospedagem: e.target.hospedagem.value
                        }
                    }

                    const regex = /^[a-zA-Z0-9 ]*$/;
                    if (!regex.test(publicacao.titulo)) {
                        document.getElementById("titulo").style.transition = "1s";
                        document.getElementById("titulo").style.border = "1px solid red";
                        setErros({ ...erros, tipoAcao: "O campo não pode conter caracteres especiais." });
                    }

                    if (!regex.test(publicacao.localEvento)) {
                        document.getElementById("localEvento").style.transition = "1s";
                        document.getElementById("localEvento").style.border = "1px solid red";
                        setErros({ ...erros, localEvento: "O campo não pode conter caracteres especiais." });
                    }

                    if (!regex.test(publicacao.nomeOrganizador)) {
                        document.getElementById("nomeOrganizador").style.transition = "1s";
                        document.getElementById("nomeOrganizador").style.border = "1px solid red";
                        setErros({ ...erros, nomeOrganizador: "O campo não pode conter caracteres especiais." });
                    }

                    if (!regex.test(publicacao.descricao)) {
                        document.getElementById("descricao").style.transition = "1s";
                        document.getElementById("descricao").style.border = "1px solid red";
                        setErros({ ...erros, descricao: "O campo não pode conter caracteres especiais." });
                    }

                    if (publicacao.tipoAcao === "Escolha uma opção") {
                        document.getElementById("tipoAcao").style.transition = "1s";
                        document.getElementById("tipoAcao").style.border = "1px solid red";
                        setErros({ ...erros, tipoAcao: "Selecione uma opção." })
                    }

                    if (publicacao.totalHrTrabalho === "" || publicacao.totalHrTrabalho === "00:00:00") {
                        document.getElementById("totalHrTrabalho").style.transition = "1s";
                        document.getElementById("totalHrTrabalho").style.border = "1px solid red";
                        setErros({ ...erros, totalHrTrabalho: "Horáro inválido, Preencha o campo corretamente." })
                    }

                    if (publicacao.titulo === "") {
                        document.getElementById("titulo").style.transition = "1s";
                        document.getElementById("titulo").style.border = "1px solid red";
                        setErros({ ...erros, titulo: "Título inválido, Preencha o campo." })
                    }

                    if (publicacao.localEvento === "") {
                        document.getElementById("localEvento").style.transition = "1s";
                        document.getElementById("localEvento").style.border = "1px solid red";
                        setErros({ ...erros, localEvento: "Preencha o campo corretamente." })
                    }

                    if (publicacao.DataHoraEvento === "") {
                        document.getElementById("DataHoraEvento").style.transition = "1s";
                        document.getElementById("DataHoraEvento").style.border = "1px solid red";
                        setErros({ ...erros, localEvento: "Preencha o campo corretamente." })
                        if (!regex.test(publicacao.DataHoraEvento)) {
                            setErros('O campo não pode conter caracteres especiais.');
                            return;
                        }
                    }

                    if (publicacao.descricao === "") {
                        document.getElementById("descricao").style.transition = "1s";
                        document.getElementById("descricao").style.border = "1px solid red";
                        setErros({ ...erros, localEvento: "Preencha o campo corretamente." })
                    }

                    if (publicacao.DataHoraEvento === "") {
                        document.getElementById("DataHoraEvento").style.transition = "1s";
                        document.getElementById("DataHoraEvento").style.border = "1px solid red";
                        setErros({ ...erros, localEvento: "Preencha o campo corretamente." })
                        if (!regex.test(publicacao.DataHoraEvento)) {
                            setErros('O campo não pode conter caracteres especiais.');
                            return;
                        }
                    }

                    if (publicacao.nomeOrganizador === "") {
                        document.getElementById("nomeOrganizador").style.transition = "1s";
                        document.getElementById("nomeOrganizador").style.border = "1px solid red";
                        setErros({ ...erros, nomeOrganizador: "Preencha o campo corretamente." })
                        if (!regex.test(publicacao.nomeOrganizador)) {
                            setErros('O campo não pode conter caracteres especiais.');
                            return;
                        }
                    }

                    if (publicacao.emailOrganizador === "" || !publicacao.emailOrganizador.includes('@') || !publicacao.emailOrganizador.includes('.')) {
                        document.getElementById("emailOrganizador").style.transition = "1s";
                        document.getElementById("emailOrganizador").style.border = "1px solid red";
                        setErros({ ...erros, emailOrganizador: "Email inválido, Preencha o campo. 'example@example.com'" })
                    }

                    const telefoneRegex = /^(?:\()?\d{2}(?:\))?(?:\d{4,5}-\d{4})$/;
                    if (!telefoneRegex.test(publicacao.telOrganizador)) {
                        document.getElementById("telOrganizador").style.transition = "1s";
                        document.getElementById("telOrganizador").style.border = "1px solid red";
                        setErros({ ...erros, telOrganizador: "Telefone inválido." })
                    }

                    if (Object.keys(erros).length === 0) {
                        api.post("/publicacoes", publicacao, {
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
                    }
                }
            })
            .catch((erro) => console.log(erro))
    }

    return (
        <div>

            <div className="CriarPub">

                <div className="backgroundShadow">

                    <div className="NewPost">
                        <div className="divBtnClose">
                            <Link to={"/feed-empresa"}>
                                <img
                                    onClick={props.fechar}
                                    className="btnClose"
                                    alt="Botao fechar"
                                    src={btnClose}
                                />
                            </Link>
                        </div>
                        <form onSubmit={(e) => criarPublicacao(e)} className="formNewPost">
                            <div className="boxForm1">
                                <span className="titulo">Ação social</span>
                                <div className="selector">
                                    <span className="infoTitelPub">Tipo ação</span>
                                    <select id="tipoAcao" className="comboBoxForm">
                                        <option className="optComboBox">Escolha uma opção</option>
                                        <option className="optComboBox">Plantação</option>
                                        <option className="optComboBox">Horta</option>
                                        <option className="optComboBox">Reciclagem</option>
                                        <option className="optComboBox">Limpeza das águas</option>
                                        <option className="optComboBox">Coleta de lixo</option>
                                    </select>
                                    <span className="infoTitelPub">Carga Horária</span>

                                    <InputMask id="totalHrTrabalho" mask="99:99:99" className="infoTrabalho" />
                                </div>
                                <div className="comboBox2">
                                    <span className="tituloBneficio">Benefícios</span>
                                    <div className="opcoes-beneficios">
                                        <div id="beneficios" className="optionsPub">
                                            <span className="infoTitelPub">Alimentação</span>
                                            <Toggle id="alimentacao" />
                                            <span className="infoTitelPub">Transporte</span>
                                            <Toggle id="transporte" />
                                            <span className="infoTitelPub">Hospedagem</span>
                                            <Toggle id="hospedagem" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxForm2">
                                <span className="titulo2">Sobre o evento</span>
                                <div className="comboBox3">

                                    <span className="infoTitelPub">Título</span>

                                    <input id="titulo" className="infoTrabalho"></input>

                                    <span className="infoTitelPub">Local do evento</span>
                                    <input id="localEvento" className="infoTrabalho"></input>

                                    <span className="infoTitelPub">Data do evento</span>

                                    <input id="DataHoraEvento" className="infoTrabalho date" type="datetime-local"></input>

                                    <span className="infoTitelPub">Descrição</span>
                                    <textarea id="descricao" className="txtArea"></textarea>

                                </div>
                            </div>
                            <div className="boxForm3">
                                <div className="comboBox3">
                                    <span className="titulo3">Informações organizador</span>

                                    <span className="infoTitelPub">Nome</span>
                                    <input id="nomeOrganizador" className="infoTrabalho"></input>

                                    <span className="infoTitelPub">E-mail</span>
                                    <input id="emailOrganizador" className="infoTrabalho"></input>

                                    <span className="infoTitelPub">Telefone</span>

                                    <InputMask mask="(99)99999-9999" id="telOrganizador" className="infoTrabalho" />

                                    <button type="submit" className="btnPublicar">Publicar</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriarPub;
