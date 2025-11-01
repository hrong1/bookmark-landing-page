import './top.scss'
import NavMenu from '../navMenu/nav';

const WebHeader = () => {

    return (
        <header className='webHeader'>
            <NavMenu toggleMenu={true} />
            <button className='webHeader__login' type='button' aria-label='login your account'>
                Login
            </button>
        </header>
    )
}

export default  WebHeader;