import "../assets/style/global.css";
import "../pages/FeedVoluntario/main.css"
import heart1 from "../assets/images/heart1.png";
import heart2 from "../assets/images/heart2.png";
import InscricaoUsuario from "./InscricaoUsuario";
import { useState } from 'react';

function NovaPub(props) {

    const [imagem, setImagem] = useState(heart1);
    const [exibeModalInfoPub, setExibeModalInfoPub] = useState(false);

    const exibirInfoPublicacao = () => {
        document.body.classList.add('modal-open');
        setExibeModalInfoPub(true);
    }

    const fecharInfoPublicacao = () => {
        document.body.classList.remove('modal-open');
        setExibeModalInfoPub(false);
    }

    function favorite() {
        if (imagem === heart1) {
            setImagem(heart2);
        } else {
            setImagem(heart1);
        }
    }

    return (
        <div>
            {exibeModalInfoPub && <InscricaoUsuario idPublicacao={props.idPublicacao}  fechar2={fecharInfoPublicacao} />}
            <div className="NovaPub">
                
                <div className="containerVolFeed">

                    <div className="contOngVolFeed">
                        <div className="OngVolFeed">{props.nomeOng}</div>
                        <div className="heartVolFeed">
                            <button onClick={favorite} className="btnHeartVolFeed">
                                <img className="imgFavoriteVolFeed" src={imagem} alt="Coracao favorito" />
                            </button>
                        </div>
                    </div>

                    <div className="titlePubVolFeed">{props.titlePub}</div>
                    <div className="contTextPubVolFeed">{props.textPub}

                    </div>

                    <div className="footerPubVolFeed">
                        <div className="datePubVolFeed">{props.date}</div>

                        <button onClick={exibirInfoPublicacao} className="btnFooterVolFeed">Me candidatar</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NovaPub;
