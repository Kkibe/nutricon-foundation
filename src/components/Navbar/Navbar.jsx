import Logo from '../../assets/logo.png';
import './Navbar.scss';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    const handleToggle = async () => {
        document.querySelector('.donate').classList.toggle('active');
    }

    return (
        <header>
            <NavLink to="/" className='logo'>
                    <img src={Logo} alt='taxa_logo'/>
            </NavLink> 
            <nav>
                <NavLink to="/" title='home' >Home</NavLink>
                <NavLink to="/news" title='explore' >News</NavLink>
                <NavLink to="/about" title='contact' >About</NavLink>
            </nav>
            <div className="btn-wrapper">
                <NavLink className="btn" onClick={handleToggle} title='contribute'>DONATE</NavLink>
            </div>
        </header>
    );
}

export default Navbar;