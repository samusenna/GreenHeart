import React, { useEffect } from "react";
import '../../assets/style/global.css';
import NavPosLoginEmpresa from "../../components/NavPosLoginEmpresa";
import ModalPerfilUser from "../../components/ModalPerfilUser";
import { useNavigate } from "react-router-dom";
import importImg from "../../assets/images/import.png";
import exportImg from "../../assets/images/export.png";
import VLibras from '@djpfs/react-vlibras';

function PerfilEmpresa() {

    const navegar = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token-user')
        !token && navegar('login')
    }, [navegar])

    return (
        <div className="Perfil">
            <div className="App">
                <VLibras forceOnload={true} />
            </div>
            <NavPosLoginEmpresa feed="Feed" perfil="Perfil" />
            <ModalPerfilUser />

            <div className="divContArq">
                <div className="intoDiv">
                    <img className="imagArq" src={importImg} alt="" />
                    <button className="btnArq">Importar</button>
                </div>
                <div className="intoDiv">
                    <img className="imagArq" src={exportImg } alt="" />
                    <button className="btnArq">Exportar</button>
                </div>

            </div>

        </div>
    )
}

export default PerfilEmpresa;