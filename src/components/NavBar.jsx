import './navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <div className='Navbar'>
        <h1>NavBar</h1>
        <nav>
            <li>
                <ul>
                    <a href="">Inicio</a>
                </ul>
                <ul>
                    <a href="">Productos</a>
                </ul>
            </li>
        </nav>
        <CartWidget />
    </div>
    )
}

export default NavBar