import './navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'

const NavBar = () => {
    return (
    <nav className='navbar'>
            <ul className='categories'>
                <li className='category'>
                    <Link to="/" className='text-link'>Tienda De Videojuegos</Link>
                </li>
                <li className='category'>
                    <Link to="/category/disparos" className='text-link'>Disparos</Link>
                </li>
                <li className='category'>
                    <Link to="/category/conduccion" className='text-link'>Conduccion</Link>
                </li>
                <li className='category'>
                    <Link to="/category/deportes" className='text-link'>Deportes</Link>
                </li>
            </ul>
        <CartWidget />
    </nav>
    )
}

export default NavBar