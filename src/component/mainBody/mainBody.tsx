import './mainBody.scss'
import Hero from './hero/hero';
import Features from './features/features';
import Download from './download/downloadPart';
import FAQ from './faq/faq';
import Contact from './finalContact/contact';

const MainBody = () => {

    return (
        <main className='mainBody'>
            <Hero />
            <Features />
            <Download />
            <FAQ />
            <Contact/>
        </main>
    )
}

export default MainBody;