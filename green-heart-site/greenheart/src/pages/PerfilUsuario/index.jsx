import React, { useEffect } from "react";
import '../../assets/style/global.css';
import NavLogin from "../../components/NavPosLogin";
import ModalPerfilUser from "../../components/ModalPerfilUser";
import { useNavigate } from "react-router-dom";
import VLibras from '@djpfs/react-vlibras';

function PerfilUsuario() {

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
            <NavLogin feed = "Feed" perfil = "Perfil"  />
            <ModalPerfilUser />

        </div>
    )
}

export default PerfilUsuario;