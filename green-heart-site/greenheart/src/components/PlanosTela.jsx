import 'swiper/css';
import 'swiper/css/navigation';
import "../pages/Home/main.css";
import "../pages/Planos/main.css";
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowBack from "../assets/images/arrow-back.png"
import api from "../api";
import VLibras from '@djpfs/react-vlibras';


function PlanosTela() {

    const navegar = useNavigate();

    function buscarPlano(id) {
        api.get(`/planos/buscar-plano/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    navegar('/cadastro-empresa', { state: { data: response.data } });
                }
            })
            .catch((erro) => {
                if (erro.status === 404) {
                    console.log("URL não encontrada")
                } else {
                    console.log(erro.message)
                }
            })
    }

    return (
        <div className="plansTela">
            <div className="App">
                <VLibras forceOnload={true} />
            </div>
            <Link to="/login"><div className="divVoltar">
                <img src={arrowBack} alt="seta voltar" />
                <span>voltar</span>
            </div>
            </Link>
            <div className="carroussel-normal">
                <div className="box_plans">
                    <div className="plan">
                        <span className="title_plan">Básico Girassol</span>
                        <span className="vlr_plan"><b>R$0,00</b> / por mês</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>1 publicação / mês</span>
                            <span><i className="uil uil-check"></i>1 edição de post / mês</span>
                        </div>
                        <button onClick={() => buscarPlano(1)} className="btn_header">Escolher plano</button>
                    </div>
                    <div className="plan">
                        <span className="title_plan">Padrão Lírio</span>
                        <span className="vlr_plan"><b>R$200,00</b> / por ano</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>3 publicações / mês</span>
                            <span><i className="uil uil-check"></i>5 edições de post / mês</span>
                        </div>
                        <button onClick={() => buscarPlano(2)} className="btn_header">Escolher plano</button>
                    </div>
                    <div className="plan">
                        <span className="title_plan">Premium Cosmos</span>
                        <span className="vlr_plan"><b>R$300,00</b> / por ano</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>Publicações ilimitadas</span>
                            <span><i className="uil uil-check"></i>Edições ilimitadas</span>
                        </div>
                        <button onClick={() => buscarPlano(3)} className="btn_header">Escolher plano</button>
                    </div>
                </div>
            </div>

            <div className="carroussel-mobile">
                <Swiper
                    slidesPerView={'auto'}
                    initialSlide={1}
                >
                    <div className="container_planos">
                        <SwiperSlide>
                            <div className="plan">
                                <span className="title_plan">Básico Girassol</span>
                                <span className="vlr_plan"><b>R$0,00</b> / por mês</span>
                                <div className="discription_plan">
                                    <span><i className="uil uil-check"></i>1 publicação / mês</span>
                                    <span><i className="uil uil-check"></i>1 edição de post / mês</span>
                                </div>
                                <button className="btn_header">Escolher plano</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plan">
                                <span className="title_plan">Padrão Lírio</span>
                                <span className="vlr_plan"><b>R$200,00</b> / por ano</span>
                                <div className="discription_plan">
                                    <span><i className="uil uil-check"></i>3 publicações / mês</span>
                                    <span><i className="uil uil-check"></i>5 edições de post / mês</span>
                                </div>
                                <button className="btn_header">Escolher plano</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="plan">
                                <span className="title_plan">Premium Cosmos</span>
                                <span className="vlr_plan"><b>R$300,00</b> / por ano</span>
                                <div className="discription_plan">
                                    <span><i className="uil uil-check"></i>Publicações ilimitadas</span>
                                    <span><i className="uil uil-check"></i>Edições ilimitadas</span>
                                </div>
                                <button className="btn_header">Escolher plano</button>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default PlanosTela;