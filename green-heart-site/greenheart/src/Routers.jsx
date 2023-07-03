import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import CadastroEmpresa from './pages/CadastroEmpresa';
import CadastroVoluntario from './pages/CadastroVoluntario';
import FeedVoluntario from './pages/FeedVoluntario';
import PerfilUsuario from './pages/PerfilUsuario';
import PerfilEmpresa from './pages/PerfilEmpresa';
import PagamentoCartao from './pages/PagamentoCartao';
import PlanosTela from './components/PlanosTela';
import NotFound from './pages/NotFound';
import NaoAutorizado from './pages/NaoAutorizado';
import FeedEmpresa from './pages/FeedEmpresa';
import Login from './pages/Logar';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro-empresa' element={<CadastroEmpresa />} />
                <Route path='/cadastro-voluntario' element={<CadastroVoluntario />} />
                <Route path='/login' element={<Login />} />
                <Route path='/feed-voluntario' element={<FeedVoluntario />} />
                <Route path='/feed-empresa' element={<FeedEmpresa />} />
                <Route path='/perfil-usuario' element={<PerfilUsuario />} />
                <Route path='/perfil-empresa' element={<PerfilEmpresa />} />
                <Route path='/processar-pagamento' element={<PagamentoCartao />} />
                <Route path='/planos' element={<PlanosTela />} />
                <Route path='/nao-autorizado' element={<NaoAutorizado />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Routers;