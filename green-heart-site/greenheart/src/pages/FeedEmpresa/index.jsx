import "../../assets/style/global.css";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FiltroFeed from "../../components/FiltroFeed";
import NavPosLoginEmpresa from "../../components/NavPosLoginEmpresa";
import ExibePub from "../../components/ExibePub";
import ModalFeedNovaPub from "../../components/ModalFeedNovaPub";
import api from "../../api";
import VLibras from '@djpfs/react-vlibras';


function FeedEmpresa() {

    const navegar = useNavigate();
    const token = localStorage.getItem('token-user')
    const [publicacoes, setPublicacoes] = useState([])

    useEffect(() => {

        const atualizarFeed = () => {
            api
                .get("/publicacoes/atualizar-feed", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {
                    setPublicacoes(response.data);
                })
                .catch((erro) => {
                    console.log(erro);
                });
        };

        return atualizarFeed;

    }, [navegar, token]);

    return (
        <div className="FeedEmpresa">
            <div className="App">
                <VLibras forceOnload={true} />
            </div>

            <NavPosLoginEmpresa feed="Feed" perfil="Perfil" publicacao="Publicação" />

            <FiltroFeed />

            <ModalFeedNovaPub />

            {
                publicacoes?.map((publicacao) => {
                    return (
                        <ExibePub
                            key={publicacao.id}
                            nomeOng={publicacao.fkEmpresa.nome}
                            titlePub={publicacao.titulo}
                            date={publicacao.totalHrTrabalho}
                            textPub={publicacao.descricao}
                        />
                    );
                })
            }
        </div>
    )

}

export default FeedEmpresa;