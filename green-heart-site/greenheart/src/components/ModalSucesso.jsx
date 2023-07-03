import "../pages/feed_empresa/main.css"
import check from "../assets/images/check2.png";
import { useState } from "react";

function ModalSucesso(){

    const [fecharModal, setFecharModal] = useState(true);


    const fechar = () => {
        setFecharModal(false);
    }

    return (
        <div>
            {fecharModal && (
                <div className="backgroundShadowModalSucesso">
                    <div className="modalSucesso">
                        <img onClick={fechar} alt="Check" src={check} />
                        <span className="TextModalSucesso">Inscrição realizada com sucesso!</span>

                        <button onClick={fechar} className="btnCloseModalSucesso">Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalSucesso;
