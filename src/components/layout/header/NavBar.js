import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                NewsLetter
            </div>
            <ul className='nav'>
                <li>
                  <Link to='/' className='navItem'>News</Link>
                </li>
                <li>
                  <Link to='/Contact' className='navItem'>Contacts</Link>
                </li>
            </ul>
        </nav>
      )
}
 
export default NavBar;