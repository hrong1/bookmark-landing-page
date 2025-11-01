import './tab.scss';
import { useState } from 'react';

export interface TabItem {
    id: number;
    label: string;
    title: string;
    detail: string;
    image: React.ElementType;
}

interface TabsProps {
    tabsList: TabItem[];
}

const Tabs = ({ tabsList }: TabsProps) => {
    if (tabsList.length === 0) {
        return null;
    }
    const [activeTabId, setActiveTabId] = useState(tabsList[0].id);
    const activeTab = tabsList.find(tab => tab.id === activeTabId);
    const activeTabImage = `../assets/desktop-image-hero-${activeTab?.id}.jpg`;
    return (
        <div className='tabs'>
            <div className='tabs__buttonContainer' role="tablist" aria-label="Content tabs">
                {tabsList.map((tab) => (
                    <button 
                        key={tab.id}
                        className={`tabs__button ${tab.id === activeTabId ? 'active' : ''}`}
                        onClick={() => setActiveTabId(tab.id)}
                        role="tab"
                        aria-selected={tab.id === activeTabId}
                        aria-controls={`tabpanel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        type='button'>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabs__content-area">
                {activeTab && activeTabImage &&(
                    <div 
                        className="tabs__content active"
                        role="tabpanel"
                        id={`tabpanel-${activeTab.id}`}
                        aria-labelledby={`tab-${activeTab.id}`}>
                            <activeTab.image className='tabs__image'/>
                            <h3 className='tabs__title'>{activeTab.title}</h3>
                            <p className='tabs__detail'>{activeTab.detail}</p>
                            <button type='button' className='tabs__moreInfo'>
                                More Info
                            </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tabs;