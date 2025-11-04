import './top.scss'
import NavMenu from '../navMenu/nav';

const WebHeader = () => {

    return (
        <header className='webHeader'>
            <NavMenu toggleMenu={true} />
        </header>
    )
}

export default  WebHeader;