import './top.scss'
import Logo from '../../assets/logo-bookmark.svg?react';
import NavMenu from '../navMenu/nav';

const WebHeader = () => {

    return (
        <header className='webHeader'>
            <Logo />
            <NavMenu toggleMenu={true} />
        </header>
    )
}

export default  WebHeader;