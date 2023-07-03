import "../pages/Home/main.css";
import Carrossel from './Carrossel';

function BodyHome2() {
    return (
        <div className="body_2">
            <div className="text_body_2">
                <span className="span_1_body_2">Nossos tópicos</span>
                <span className="span_2_body_2">Categorias de ações sociais pró meio ambiente que você poderá se envolver</span>
            </div>
            <div className="carrossel_body_2">
                <Carrossel/>
            </div>
        </div>
    )
}

export default BodyHome2;