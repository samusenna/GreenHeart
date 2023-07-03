import "../../assets/style/global.css";
import "./main.css";
import FiltroFeed from "../../components/FiltroFeed";
import NavPosLogin from "../../components/NavPosLogin";
import NovaPub from "../../components/NovaPub";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";
import VLibras from '@djpfs/react-vlibras';

function FeedVoluntario() {

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
        <div className="FeedVoluntario">
            <div className="App">
                <VLibras forceOnload={true} />
            </div>
            <NavPosLogin feed="Feed" perfil="Perfil" />
            <FiltroFeed />

            <div className="textPub"></div>

            {
                publicacoes?.map((publicacao) => {
                    return (
                        <NovaPub
                            key={publicacao.id}
                            idPublicacao={publicacao.id}
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

export default FeedVoluntario;