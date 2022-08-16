import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';

export default function Header () {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const linkStyle = (isActive) => {
        return isActive ? "navbar__link_active" : "navbar__link"
    }

    function logout() {
        setIsAuth(false)
        localStorage.clear()
    }

    return(
        <div className='header'>
            <div className='header__box container'>
                <Link className='header__logo' to='/'>posts_app</Link>
                {isAuth && 
                    <div className='header__name'>
                        hello, {localStorage.getItem('userName')}
                    </div>
                }
                <nav className='navbar'>
                    {isAuth && 
                        <button className='navbar__btn'
                        onClick={logout}
                        >Log Out</button>
                    }
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/posts'>Posts</NavLink>
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/about'>About</NavLink>
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/registry'>Registry</NavLink>
                </nav>
            </div>
        </div>
    )
}