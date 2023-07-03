import "../assets/style/global.css"
import "../pages/FeedEmpresa/main.css"
import CriarPub from "./CriarPub";
import { useState } from 'react';

function ModalFeedNovaPub() {

    const [exibirCriarPub, setExibirCriarPub] = useState(false);

    const criarPublicacao = () => {
        document.body.classList.add('modal-open');
        setExibirCriarPub(true);
    };

    const closeModal = () => {
        setExibirCriarPub(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <div>

            {exibirCriarPub && <CriarPub fechar={closeModal} />}

            <div className="contDivCadPub">
                <div className="divCadPub">
                    <span>
                        <b>De que forma podemos ajudar
                            o meio ambiente hoje? Compartilhe
                            sua ação com a comunidade!
                        </b>
                    </span>
                    {/* <button  onClick={criarPubli}  >teste</button> */}
                    <div onClick={criarPublicacao} className="inputNewPub">
                        Escrever publicação
                    </div>

                </div>
                <div className="borderBotton"></div>
            </div>
        </div>
    )

}

export default ModalFeedNovaPub;