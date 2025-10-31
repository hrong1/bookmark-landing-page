import './nav.scss'
import { useState, useId } from 'react';
import IconClose from '../../assets/icon-close.svg?react';
import IconOpen from '../../assets/icon-hamburger.svg?react';
import IconFacebook from '../../assets/icon-facebook.svg?react';
import IconTwitter from '../../assets/icon-twitter.svg?react';
import Logo from '../../assets/logo-bookmark.svg?react';

interface NavItem {
    id: number,
    name: string,
    link: string
}

const navList: NavItem[] = [
    {id: 1, name: 'Features', link: '#'},
    {id: 2, name: 'Pricing', link: '#'},
    {id: 3, name: 'Contact', link: '#'},
    {id: 4, name: 'Login', link: '#'},
]

interface NavMenuProps {
  toggleMenu?: boolean; 
}

const NavMenu = ({ toggleMenu = false }: NavMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navListId = useId();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={`NavMenu ${isOpen ? 'is-open' : ''}`}>
            {toggleMenu && (<button 
                className='NavMenu__toggle'
                type='button' 
                aria-label='toggle navigation menu' 
                aria-expanded={isOpen}
                aria-controls={navListId}
                onClick={handleToggle}>
            {isOpen ? <IconClose /> : <IconOpen />}
            </button>)}
            {!toggleMenu && (<Logo />)}

            <ul className="NavMenu__nav-list" id={navListId}>
                {navList.map(({ id, name, link }) => (
                    <li key={id}>
                        <a href={link}>{name}</a>
                    </li>
                ))}
            </ul>
            {!toggleMenu && (
                <div className='NavMenu__icons'>
                    <IconFacebook />
                    <IconTwitter />
                </div>
            )}
        </nav>
    )
}

export default  NavMenu;