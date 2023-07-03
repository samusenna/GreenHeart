import "../pages/Home/main.css";
import googlePlay from "../assets/images/googlePlay.png";
import appleStore from "../assets/images/appleStore.png";

function Footer() {

    return (
        <div className="footer">

                <span className="text_footer">Em breve nas plataformas</span>
                <div className="footer_plataforms">
                    <img className="img_1_footer" src={googlePlay} alt="" />
                    <img className="img_2_footer" src={appleStore} alt="" />
                </div>
                <span className="footer_copy">Copyright <b>©2023</b> Todos os direitos reservados | Este site pertence a Green Heart</span>

            </div>
    )

}

export default Footer;