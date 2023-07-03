import "./main.css";
import logotipo from "../../assets/images/green heart - logotipo.png";
import sadEarth from "../../assets/images/sadEarth.png";

function NotFound() {
  return (
    <div>
      <div className="navHome">
        <div className="imageLogo">
          <img src={logotipo} alt="" />
        </div>
      </div>
      <div className="containerForm">
        <div className="formulario">

          <img className="imgEarth" alt="imagem" src={sadEarth} />
          <spam className="statusCode">404</spam>
          <spam className="subtitle">Nada encontrado, desculpe  :(</spam>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
