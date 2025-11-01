import './footer.scss'
import NavMenu from '../navMenu/nav';
import IconFacebook from '../../assets/icon-facebook.svg?react';
import IconTwitter from '../../assets/icon-twitter.svg?react';

const WebFooter = () => {

    return (
        <footer className='webFooter'>
            <NavMenu />
            <div className='NavMenu__icons'>
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
        </footer>
    )
}

export default  WebFooter;