import './faq.scss'
import { useState } from 'react';
import Arrow from '../../../assets/icon-arrow.svg?react';

interface FAQData {
    id: number;
    question: string;
    answer: string;
}

const faqList: FAQData[] = [
    {
        id: 1,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
        id: 2,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        id: 3,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
        id: 4,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]


const FAQ = () => {
    const [activeIds, setActiveIds] = useState(new Set<number>());
    const handleQuestionClick = (id: number) => {
        setActiveIds((prevActiveIds) => {
            const newActiveIds = new Set(prevActiveIds);
            if (newActiveIds.has(id)) {
                newActiveIds.delete(id);
            } else {
                newActiveIds.add(id);
            }
            return newActiveIds;
        });
    }
    return (
        <section className='faq'>
            <div className='faq__intro'>
                <h2 className='faq__title'>
                    Frequently Asked Questions
                </h2>
                <p className='faq__description'>
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>
            </div>
            <div className='faq__container'>
                {faqList.map((faq) => {
                    const isActive = activeIds.has(faq.id);
                    return (
                        <div className={`faq__section ${isActive ? 'active' : ''}`} key={faq.id}>
                            <h4 
                                className='faq__section--question' 
                                role="button"
                                onClick={() => handleQuestionClick(faq.id)}
                                aria-expanded={isActive} 
                                aria-controls={`faq-answer-${faq.id}`}
                            >
                                {faq.question}
                                <Arrow />
                            </h4>
                            <p 
                                className='faq__section--answer' 
                                id={`faq-answer-${faq.id}`}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    );
                })}
            </div>
            <button className='faq__button' type='button'>
                More Info
            </button>
        </section>
    )
}

export default FAQ;