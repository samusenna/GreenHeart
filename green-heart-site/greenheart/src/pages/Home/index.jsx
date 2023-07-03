import './main.css';
import '../../assets/style/global.css';
import BodyHome1 from "../../components/BodyHome1";
import BodyHome2 from "../../components/BodyHome2";
import BodyHome3 from "../../components/BodyHome3";
import Planos from "../../components/Planos";
import Footer from "../../components/Footer";
import logotipo from "../../assets/images/green heart - logotipo.png";
import { Link } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';

function Home() {

    return (
        <div className="Home">
            <div className='contNav'>
                <div className='contNavLeft'>
                    <div className="navHome">

                        <div className='cont-options-hamburger'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="imageLogo">
                            <img src={logotipo} alt="" />
                        </div>

                        <div className="cont-options">
                            <ul>
                                <li><a href="#sobreNos">Sobre nós</a></li>
                                <li><a href="#planos">Planos</a></li>
                                <li><a href="#cadastro">Cadastro</a></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* <BoasVindas /> */}
                    <div className="App">
                        <VLibras forceOnload={true} />
                    </div>
                    <div className="textHeader">
                        <h1>Nós somos a GreenHeart</h1>
                        <div className="slogan">Acreditamos que as ações voluntárias movem
                            a sustentabilidade do nosso planeta
                        </div>
                        <a href='#nossosTopicos'><button className="btn_header">Conhecer tópicos</button></a>
                    </div>

                </div>

                <div className='contImageNav'>

                </div>

            </div>
            <div id='sobreNos'>
                <BodyHome1 />
            </div>
            <div id='nossosTopicos'>
                <BodyHome2 />
            </div>

            <div id='cadastro'>
                <BodyHome3 />
            </div>
            <div id='planos'>
                <Planos />
            </div>
            <Footer />
        </div>
    )
}

export default Home;