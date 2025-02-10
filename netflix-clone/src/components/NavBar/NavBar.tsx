import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { AuthContext, Firebasecontext } from '../../store/AuthContext';
import './navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_icon from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const NavBar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const firebaseContext = useContext(Firebasecontext);
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authContext || !firebaseContext) {
      return;
    }

    const { auth } = firebaseContext;
    const { setUser } = authContext;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Current User:', currentUser);
      setUser(currentUser);
      if (currentUser) {
        navigate('/', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [authContext, firebaseContext, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('nav-dark');
      } else {
        navRef.current?.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!authContext || !firebaseContext) {
    return null;
  }

  const { user, setUser } = authContext;
  const { auth } = firebaseContext;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert('Successfully logged out!');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout failed:', error.message);
        alert('Error during logout: ' + error.message);
      });
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbarLeft'>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbarRight'>
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_icon} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            {user ? (
              <>
                <p className='username'>{user.displayName}</p>
                <p onClick={handleLogout}>Sign out of Netflix</p>
              </>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <p>Login</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;