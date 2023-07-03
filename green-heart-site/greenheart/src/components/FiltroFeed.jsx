import "../assets/style/global.css"
import "../pages/FeedVoluntario/main.css"
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

function FiltroFeed(props) {

    return (
        <div className="FiltroFeedVol">

            <div className="titleFilterFeed">Classificar por: Selecione</div>
            <div className="filterOptionsVolFeed">
                <div className="line1Vol">
                    <div className="contFeedVol">
                        <div className="imgFilter1Feed">
                            <img src={img1} alt="" />
                        </div>
                        <span>Plantação</span>
                    </div>
                    <div className="contFeedVol">
                        <div className="imgFilterFeed">
                        <img src={img2} alt="" />
                        </div>
                        <span>Horta</span>
                    </div>
                    <div className="contFeedVol">
                        <div className="imgFilterFeed">
                        <img src={img3} alt="" />
                        </div>
                        <span>Reciclagem</span>
                    </div>
                </div>
                <div className="line1Vol">
                    <div className="contFeedVol">
                        <div className="imgFilterFeed">
                        <img src={img4} alt="" />
                        </div>
                        <span>Limpeza das águas</span>
                    </div>
                    <div className="contFeedVol">
                        <div className="imgFilterFeed">
                        <img src={img5} alt="" />
                        </div>
                        <span>Coleta de lixo</span>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default FiltroFeed;