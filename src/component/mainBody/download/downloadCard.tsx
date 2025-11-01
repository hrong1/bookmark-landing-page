import './downloadCard.scss';
import Dot from '../../../assets/bg-dots.svg?react'

export interface DownloadCardProps {
    CardIcon: React.ElementType;
    title: string;
    minimumVersion: string;
    link: string;
}


const DownloadCard = ({ CardIcon, title, minimumVersion, link }: DownloadCardProps) => {
    return (
        <div className='card'>
            <CardIcon className='card__icon' aria-hidden="true"/>
            <h5 className='card__title'>Add to {title}</h5>
            <p className='card__version'>Minimum version {minimumVersion}</p>
            <Dot className='card__dot' aria-hidden="true"/>
            <a
                className='card__link'
                href={link}
                target="_blank"
                rel="noopener noreferrer">
                Add & Install Extension
            </a>
        </div>
    )
}

export default DownloadCard;