import './hero.scss'
import HeroImage from '../../../assets/illustration-hero.svg?react';

const Hero = () => {
    return (
        <section className='heroSection'>
            <HeroImage className='heroSection__mainImage' aria-hidden='true' />
            <div className='heroSection__content'>
                <h1 className='heroSection__title'>A Simple Bookmark Manager</h1>
                <p className='heroSection__description'>
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className='heroSection__buttonSection'>
                    <a
                        href='https://chromewebstore.google.com/'
                        className='heroSection__button--chrome' 
                        role="button" 
                        target="_blank">
                        Get it on Chrome
                    </a>
                    <a
                        href='https://addons.mozilla.org/'
                        className='heroSection__button--firefox' 
                        role="button" 
                        target="_blank">
                        Get it on Firefox
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;