import './main.css'
import logoCoracao from '../../assets/images/green_heart_coracao_icon.png'
import logoNome from '../../assets/images/green_heart_nome.png'
import { CardPayment } from '@mercadopago/sdk-react'
import { initMercadoPago } from '@mercadopago/sdk-react'
import api from "../../api"
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import VLibras from '@djpfs/react-vlibras';

function PagamentoCartao() {

    const location = useLocation()
    const jsonData = location.state?.data;

    const navegar = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token-user')
        const typeUser = localStorage.getItem('type-user')
        if (!token) {
            navegar("/login")
        } else if (token && typeUser !== "Empresa") {
            navegar("/nao-autorizado")
        }
    }, [navegar])

    initMercadoPago("TEST-8b34301f-7394-4c4b-8efb-4e2976b99bb1");

    const initialization = {
        amount: jsonData,
    }

    function mostrarSucesso() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pagamento realizado com sucesso',
            footer: '<p>Redirecionando para Login</p>',
            showConfirmButton: false,
            timer: 2500
        })
    }

    function limiteIndisponivel() {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Limite do Cartão Indisponível.',
            footer: '<b>Tente novamente com outro cartão ou entre com o seu banco</b>',
            showConfirmButton: false,
            timer: 3000
        })
    }

    function pagamentoRecusado() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Pagamento Recusado.',
            footer: '<b>Verifique com o seu banco e tente novamente</b>',
            showConfirmButton: false,
            timer: 3000
        })
    }

    function mostrarErro() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erro ao realizar pagamento',
            footer: '<b>Tente novamente ou entre em contato com o suporte</b>',
            showConfirmButton: false,
            timer: 3000
        })
    }

    const onSubmit = async (formData) => {
        api.post("/pagamentos/processar", formData)
            .then((response) => {
                if (response.status === 200 && response.data.status === "approved") {
                    mostrarSucesso()
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                } else if (response.status === 200 && response.data.status === "rejected") {
                    limiteIndisponivel()
                } else if (response.status === 200 && response.data.status === "in_process") {
                    pagamentoRecusado()
                }
            }).catch(error => {
                console.log(error);
                if (error.response.status === 404) {
                    console.log("Este endpoint não existe");
                } else {
                    mostrarErro()
                }
            })
    }

    return (
        <div className='container_pagamento'>
            <div className="App">
                <VLibras forceOnload={true} />
            </div>
            <div className='main'>
                <div className='container_mercadopago'>
                    <div className='text_title'>
                        <div className='imagens'>
                            <img className='logo_coracao' src={logoCoracao} alt='logo de coração' />
                            <img className='logo_nome' src={logoNome} alt='nome' />
                        </div>
                        <h1>Faça já seu pagamento</h1>
                        <p>Promoções e benefícios</p>
                    </div>
                    <CardPayment
                        initialization={initialization}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default PagamentoCartao;
