import logotipo from "../assets/images/green heart - logotipo.png";
import '../pages/PerfilUsuario/main.css'
import CriarPub from "./CriarPub";
import { Link } from 'react-router-dom';
import { useState } from 'react';


function NavPosLogin(props) {

    const [exibirCriarPub, setExibirCriarPub] = useState(false);

    const criarPublicacao = () => {
        setExibirCriarPub(true);
    };

    const closeModal = () => {
        document.body.classList.remove('modal-open');
        setExibirCriarPub(false);
    };

    const limparLocalStorage = () => {
        localStorage.clear();
    }

    return (
        <div className="NavPosLogin">
            {exibirCriarPub && <CriarPub fechar={closeModal} />}
            <div className="txtNav">
                <div className="image">
                    <img src={logotipo} alt="" />
                </div>
                <div className="divOpcBtn">
                    <Link to="/feed-voluntario"><button className="btnNavPosLogin">{props.feed}</button></Link>
                    <Link to="/perfil-usuario"><button className="btnNavPosLogin">{props.perfil}</button></Link>
                    <button onClick={criarPublicacao} className="btnNavPosLogin">{props.publicacao}</button>
                </div>
            </div>

            <div className="divBtnSair">
                <Link to="/login" className="noLink2"><button onClick={() => limparLocalStorage()} className="btnNavPosLogin">Sair</button></Link>
                <div className="divNull"></div>
            </div>


        </div>
    )

}

export default NavPosLogin;