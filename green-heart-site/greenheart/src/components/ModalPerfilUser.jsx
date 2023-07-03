import '../pages/PerfilUsuario/main.css';
import '../assets/style/global.css';
import AlterarSenha from "./AlterarSenha";
import AlterarInfosUser from "./AlterarInfosUser";
import { useState } from 'react';

function ModalPerfilUser(props) {
    const [exibirAlterarInfos, setExibirAlterarInfos] = useState(true);
    const [exibirAlterarSenha, setExibirAlterarSenha] = useState(false);
    const [botaoSelecionado, setBotaoSelecionado] = useState("conta");
    // const idUsuario = localStorage.getItem('id-user');

    function conta() {
        setBotaoSelecionado("conta");
        setExibirAlterarInfos(true);
        setExibirAlterarSenha(false);
    }

    function senha() {
        setBotaoSelecionado("senha");
        setExibirAlterarSenha(true);
        setExibirAlterarInfos(false);
    }

    return (
        <div className="ModalPerfilUser">
            <div className="optionsDiv">
                <span className="nameUser">Alex Barreira</span>
                <div className="contBtn">
                    <button
                        className={`btnOptModal ${botaoSelecionado === "conta" ? "optBold" : ""}`}
                        onClick={conta}
                    >
                        Conta
                    </button>
                    <button
                        className={`btnOptModal ${botaoSelecionado === "senha" ? "optBold" : ""}`}
                        onClick={senha}
                    >
                        Senha
                    </button>
                </div>
            </div>

            <div className="formDiv">
                {exibirAlterarSenha && <AlterarSenha />}
                {exibirAlterarInfos && <AlterarInfosUser />}
            </div>
        </div>
    );
}

export default ModalPerfilUser;
