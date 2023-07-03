import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plantaMao from "../assets/images/1.jpg";
import horta from "../assets/images/2.jpg";
import reciclagem from "../assets/images/3_3.jpg";
import mar from "../assets/images/4_4.jpg";
import entulho from "../assets/images/5_5.jpg";

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: false,
        autoplaySpeed: 4000,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
        // fade: true,
        // responsive: (array de objetos) Permite 
        // definir configurações diferentes para 
        // diferentes tamanhos de tela. Cada objeto
        //  no array deve ter as propriedades 
    };

    return (
        <Slider {...settings}>
            <div id="contCarousel" className="divContCarousel">
                <img
                    src={plantaMao}
                    alt="Imagem 1"
                />
                <span>Plantação</span>
            </div>
            <div className="divContCarousel">
                <img
                    src={horta}
                    alt="Imagem 2"
                />
                <span>Horta</span>
            </div>
            <div className="divContCarousel">
                <img
                    src={reciclagem}
                    alt="Imagem 3"
                />
                <span>Reciclagem</span>
            </div>
            <div className="divContCarousel">
                <img
                    src={mar}
                    alt="Imagem 3"
                />
                <span>Limpeza água</span>
            </div>
            <div className="divContCarousel">
                <img
                    src={entulho}
                    alt="Imagem 3"
                />
                <span>Coleta de lixo</span>
            </div>

        </Slider>
    );
}

export default Carrossel;
