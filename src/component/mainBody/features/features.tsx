import './features.scss';
import Tabs, { type TabItem } from './tab';
import Image1  from '../../../assets/illustration-features-tab-1.svg?react';
import Image2  from '../../../assets/illustration-features-tab-2.svg?react';
import Image3  from '../../../assets/illustration-features-tab-3.svg?react';

const tabs : TabItem[] = [
    {
        id: 1, 
        label: 'Simple Bookmarking',
        title: 'Bookmark in one click',
        detail: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        image: Image1
    },
    {
        id: 2, 
        label: 'Speedy Searching',
        title: 'Intelligent search',
        detail: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        image: Image2
    },
    {
        id: 3, 
        label: 'Easy Sharing',
        title: 'Share your bookmarks',
        detail: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        image: Image3
    }
]

const Features = () => {
    return (
        <section className='features' id='features'>
            <div className='features__intro'>
                <h2 className='features__title'>
                    Features
                </h2>
                <p className='features__description'>
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <Tabs tabsList={tabs} />
        </section>
    )
}

export default Features;