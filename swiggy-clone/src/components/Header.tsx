import '../components/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <div className='header'>
      <div className='component'>
        <img className='logo' src='https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png'/>
        <nav className='items'>
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact-us</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>Sign up</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;