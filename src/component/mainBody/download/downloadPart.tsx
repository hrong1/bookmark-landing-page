import './downloadPart.scss';
import DownloadCard, {type DownloadCardProps} from './downloadCard';
import ChromeIcon from '../../../assets/logo-chrome.svg?react';
import FireFoxIcon from '../../../assets/logo-firefox.svg?react';
import OperaIcon from '../../../assets/logo-opera.svg?react'

interface CardData extends DownloadCardProps {
    id: number;
}

const cards: CardData[] = [
    {
        id: 1,
        CardIcon: ChromeIcon,
        title: 'Chrome',
        minimumVersion: '62',
        link: 'https://chromewebstore.google.com/',
    },
    {
        id: 2,
        CardIcon: FireFoxIcon,
        title: 'Firefox',
        minimumVersion: '55',
        link: 'https://addons.mozilla.org/',
    },
    {
        id: 3,
        CardIcon: OperaIcon,
        title: 'Opera',
        minimumVersion: '46',
        link: 'https://addons.opera.com/',
    },
]

const Download = () => {
    return (
        <section className='download'>
            <div className='download__intro'>
                <h2 className='download__title'>
                    Download the extension
                </h2>
                <p className='download__description'>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className='download__container'>
                {cards.map((card) => (
                    <DownloadCard 
                        key={card.id}
                        CardIcon={card.CardIcon}
                        title={card.title}
                        minimumVersion={card.minimumVersion}
                        link={card.link}
                    />
                ))}
            </div>
            
        </section>
    )
}

export default Download;