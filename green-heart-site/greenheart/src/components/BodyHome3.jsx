import "../pages/Home/main.css";
import plantaFloresta from "../assets/images/plantaFloresta.jpg";
import { Link } from "react-router-dom";


function BodyHome3() {

    return (
        <div className="body_3">
            <div className="text_body_3">

                <span className="span_1_body_3">Seja um voluntário</span>
                <span className="span_2_body_3">Acesso gratuito</span>

            </div>

            <div className="div_cont_body_3">
                <img src={plantaFloresta} alt="" />
                <div className="div_cont_text_body_3">
                    <span className="text_1_body_3">A preservação do meio ambiente começa com a ação.</span>
                    <span className="text_2_body_3"> Com o nosso voluntariado pró meio ambiente, você
                        poderá fazer parte de diversas ações sociais que
                        zelam e salvam nosso planeta.</span>
                </div>

            </div>
            <div className="div_button">
                <Link to="/cadastro-voluntario" className="linkVol">
                    <button className="btn_voluntario">
                        Quero ser voluntário
                    </button>
                </Link>
            </div>

        </div>
    )

}

export default BodyHome3;