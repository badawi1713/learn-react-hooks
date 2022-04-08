import { Link, useLocation } from 'react-router-dom'
import { navbarConfigs } from '../../configs/navbar-config'
import './navbar.css'
const Navbar = () => {
    const location = useLocation()
    const { pathname } = location
    return (
        <nav className='navbar'>
            <h4 className='logo'>Hooks()</h4>
            <ul className='menu'>
                {
                    navbarConfigs.map(item =>
                        <li key={item.id}>
                            <Link className={`menu__item ${pathname === item.path ? 'menu__item--active' : ''}`} to={item.path}>{item.title}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar