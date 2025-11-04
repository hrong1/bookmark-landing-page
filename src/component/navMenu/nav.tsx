import './nav.scss'
import { useState, useId } from 'react';
import IconClose from '../../assets/icon-close.svg?react';
import IconOpen from '../../assets/icon-hamburger.svg?react';
import Logo from '../../assets/logo-bookmark.svg?react';
import IconFacebook from '../../assets/icon-facebook.svg?react';
import IconTwitter from '../../assets/icon-twitter.svg?react';


interface NavItem {
    id: number,
    name: string,
    link: string
}

const navList: NavItem[] = [
    {id: 1, name: 'Features', link: '#features'},
    {id: 2, name: 'Pricing', link: '#'},
    {id: 3, name: 'Contact', link: '#contact'},
]

interface NavMenuProps {
    toggleMenu?: boolean; 
}

const NavMenu = ({ toggleMenu = false }: NavMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navListId = useId();
    const variantClass = toggleMenu ? 'headerNav' : 'footerNav';
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={`navMenu ${variantClass} ${isOpen ? 'is-open' : ''}`}>
            <div className='navMenu__top'>
                <Logo className='navMenu__logo'/>
                {toggleMenu && (<button 
                    className='navMenu__toggle'
                    type='button' 
                    aria-label='toggle navigation menu' 
                    aria-expanded={isOpen}
                    aria-controls={navListId}
                    onClick={handleToggle}>
                {isOpen ? <IconClose className='navMenu__toggle-icon'/> : <IconOpen className='navMenu__toggle-icon'/>}
                </button>)}
            </div>
            <div className='navMenu__bottom'>
                <div className='navMenu__list-container'>
                    <ul className="navMenu__nav-list" id={navListId}>
                        {navList.map(({ id, name, link }) => (
                            <li key={id}>
                                <a href={link}>{name}</a>
                            </li>
                        ))}
                    </ul>
                    {toggleMenu && <button className='navMenu__login' type='button' aria-label='login your account'>
                        Login
                    </button>}
                </div>
                <div className='navMenu__icons'>
                    <a 
                        href='https://twitter.com/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconFacebook />
                    </a>
                    <a 
                        href='https://twitter.com/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconTwitter />
                    </a>          
                </div>
            </div>
        </nav>
    )
}

export default  NavMenu;