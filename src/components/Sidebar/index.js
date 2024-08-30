import './index.scss'
import {Link, NavLink} from 'react-router-dom'


const Sidebar = () =>

    <div className='nav-bar'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
            </ul>
        </nav>
    </div>
export default Sidebar