import "../assets/style/global.css";
import "../pages/FeedEmpresa/main.css"
import heart1 from "../assets/images/heart1.png";
import heart2 from "../assets/images/heart2.png";
import { useState } from 'react';

function ExibePub(props) {

    const [imagem, setImagem] = useState(heart1);

    function favorite() {
        if (imagem === heart1) {
            setImagem(heart2);
        } else {
            setImagem(heart1);
        }
    }

    return (

        <div className="ExibePubEmp">

            <div className="containerEmp">

                <div className="contOngEmp">
                    <div className="OngEmp">{props.nomeOng}</div>
                    <div className="heartEmp">
                        <button onClick={favorite} className="btnHeartEmp">
                            <img className="imgFavoriteEmp" src={imagem} alt="Coracao favorito" />
                        </button>
                    </div>
                </div>

                <div className="titlePubEmp">{props.titlePub}</div>
                <div className="contTextPubEmp">{props.textPub}

                </div>

                <div className="footerPubEmp">
                    <div className="datePubEmp">{props.date}</div>
                </div>


            </div>

        </div>

    )
}

export default ExibePub;