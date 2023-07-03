import "../pages/Home/main.css";
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from "../api";

function Planos() {

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
        <div className="plans">
            <div className="carroussel-normal">
                <div className="text_plans">
                    <span className="text_1_plans">Cadastre sua empresa ou ONG</span>
                    <span className="text_2_plans">Nossos planos</span>
                </div>
                <div className="box_plans">
                    <div className="plan">
                        <span className="title_plan">Básico Girassol</span>
                        <span className="vlr_plan"><b>R$0,00</b> / por mês</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>1 publicação / mês</span>
                            <span><i className="uil uil-check"></i>1 edição de post / mês</span>
                        </div>
                        <button onClick={() => buscarPlano(1) } className="btn_header">Escolher plano</button>
                    </div>
                    <div className="plan">
                        <span className="title_plan">Padrão Lírio</span>
                        <span className="vlr_plan"><b>R$200,00</b> / por ano</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>3 publicações / mês</span>
                            <span><i className="uil uil-check"></i>5 edições de post / mês</span>
                        </div>
                        <button onClick={() => buscarPlano(2) } className="btn_header">Escolher plano</button>
                    </div>
                    <div className="plan">
                        <span className="title_plan">Premium Cosmos</span>
                        <span className="vlr_plan"><b>R$300,00</b> / por ano</span>
                        <div className="discription_plan">
                            <span><i className="uil uil-check"></i>Publicações ilimitadas</span>
                            <span><i className="uil uil-check"></i>Edições ilimitadas</span>
                        </div>
                        <button onClick={() => buscarPlano(3) } className="btn_header">Escolher plano</button>
                    </div>
                </div>
            </div>

            <div className="carroussel-mobile">
                <div className="text_plans">
                    <span className="text_1_plans">Cadastre sua empresa ou ONG</span>
                    <span className="text_2_plans">Nossos planos</span>
                </div>
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
                                <Link to={"/cadastro-empresa"}><button className="btn_header">Escolher plano</button></Link>
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
                                <Link to={"/cadastro-empresa"}><button className="btn_header">Escolher plano</button></Link>
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
                                <Link to={"/cadastro-empresa"}><button className="btn_header">Escolher plano</button></Link>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Planos;