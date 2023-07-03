import "../assets/style/global.css";
import "../pages/FeedVoluntario/main.css";
import btnClose from "../assets/images/x.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
// import { Link } from "react-router-dom";
// import { useState } from "react";

function InscricaoUsuario(props) {

    // const [exibirCriarPub, setExibirCriarPub] = useState();

    // const closeModal = () => {
    //     setExibirCriarPub(true);
    //   };

    const navegar = useNavigate();
    const token = localStorage.getItem('token-user')
    const [publicacao, setPublicacao] = useState([])
    const [data, setData] = useState({}) 

    setData({id: props.idPublicacao})

    useEffect(() => {
        const buscarPost = () => {
            api
                .get(`/publicacoes/${data.id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })  
                .then((response) => {
                    setPublicacao(response.data);
                })
                .catch((erro) => {
                    console.log(erro);
                });
        };

        return buscarPost;

    }, [navegar, token, data]);

    return (
        <div>
            {/* {exibirCriarPub && <InscricaoUsuario/>} */}
            <div className="InscricaoUsuario">

                <div className="backgroundShadowVol">

                    <div className="NewPostVol">
                        <div className="divBtnCloseVol">

                            <img
                                onClick={props.fechar2}
                                className="btnCloseVol"
                                alt="Botao fechar"
                                src={btnClose}
                            />

                        </div>
                        <form className="formPostVol">
                            <div className="boxForm1Vol">
                                <span className="tituloVol">Trabalho</span>
                                <div className="selectorVol">
                                    <span className="infoTrabalhoVol">Tipo ação</span>
                                    <div className="divDisplayInfo">{publicacao.tipoAcao}
                                    </div>
                                </div>
                                <div className="horasTrabalhoVol">
                                    <span className="infoTrabalhoVol">Carga horária</span>
                                    <div className="divDisplayInfo">{publicacao.totalHrTrabalho}
                                    </div>
                                </div>
                                <div className="comboBox2Vol">
                                    <span className="tituloVol">Benefícios</span>
                                    <div className="opcoes-beneficios">
                                        <div className="optionsPub">
                                            <span className="infoTrabalhoVol">Alimentação</span>
                                            <div className="contDivBeneficio">
                                                <i className="uil uil-utensils"></i>
                                                <span className="divBenefcio"></span>
                                            </div>
                                            <span className="infoTrabalhoVol">Transporte</span>
                                            <div className="contDivBeneficio">
                                                <i className="uil uil-bus"></i>
                                                <span className="divBenefcio"></span>
                                            </div>
                                            <span className="infoTrabalhoVol">Acomodação</span>
                                            <div className="contDivBeneficio">
                                                <i className="uil uil-bed"></i>
                                                <span className="divBenefcio"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxForm2">
                                <span className="tituloVol2">Sobre o evento</span>
                                <div className="comboBox3Vol">
                                    <div className="infoEventoVol">
                                        <span className="infoTrabalhoVol">Título</span>
                                        <div className="divDisplayInfo">{publicacao.titulo}
                                        </div>
                                    </div>
                                    <div className="infoEventoVol">
                                        <div className="infoEventoVol">
                                            <span className="infoTrabalhoVol">Local do evento</span>
                                            <div className="divDisplayInfo">
                                            </div>
                                        </div>
                                        <span className="infoTrabalhoVol">Data do evento</span>

                                        <input disabled className="inputDateVol" type="date"></input>
                                    </div>
                                    <div className="infoEventoVol">
                                        <span className="infoTrabalhoVol">Descrição</span>
                                        <div className="divDisplayInfo">{publicacao.descricao}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="boxForm2">
                                <span className="tituloVol2">Informações do evento</span>
                                <div className="comboBox3Vol">
                                    <div className="infoEventoVol">
                                        <span className="infoTrabalhoVol">Nome</span>
                                        <div className="divDisplayInfo">{publicacao.nomeOrganizador}
                                        </div>
                                    </div>
                                    <div className="infoEventoVol">
                                        <span className="infoTrabalhoVol">E-mail</span>
                                        <div className="divDisplayInfo">{publicacao.emailOrganizador}
                                        </div>
                                    </div>
                                    <div className="infoEventoVol">
                                        <span className="infoTrabalhoVol">Telefone</span>
                                        <div className="divDisplayInfo">{publicacao.telOrganizador}
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btnPublicarVol">Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InscricaoUsuario;
