import "../pages/Home/main.css";
import troncoImage from "../assets/images/tronco.jpg";

function BodyHome1() {

    return (
        <div className="body_1">
            <div className="text_body_1">
                <span>A GreenHeart tem como intuito <b>conectar</b> empresas e ONGs com voluntários.</span>

                <span>Acreditamos no poder da transformação. Somente de forma coletiva teremos um futuro verde e pacífico.</span>
            </div>
            <div className="image_body_1">
                <img src={troncoImage} alt="" />
            </div>
        </div>
    )

}

export default BodyHome1;