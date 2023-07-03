import "./main.css";
import logoTipo from "../../assets/images/green heart - logotipo.png";
import warning from "../../assets/images/warning.png";

function NaoAutorizado() {
    return (
        <div>
            <div>
                <div className="navHome">
                    <div className="imageLogo">
                        <img src={logoTipo} alt="Logo Green Heart" />
                    </div>
                </div>
                <div className="containerForm">
                    <div className="formulario">
                        <img className="imgWarning" src={warning} alt=""/>
                        <spam className="statusCode" >401</spam>
                        <spam className="subtitle">Não autorizado!</spam>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NaoAutorizado;