import logotipo from "../assets/images/green heart - logotipo.png";
import '../assets/style/global.css'
import { Link } from 'react-router-dom';


function NavForm() {
    return (
        <div className="navForm">
            <Link to="/">
                <div className="image">
                    <img src={logotipo} alt="" />
                </div>
            </Link>
        </div>
    )

}

export default NavForm