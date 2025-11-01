import './contact.scss'
import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmail('');
    }

    return (
        <form className='contact' onSubmit={handleSubmit}>
            <span className='contact__subtitle'>
                35,000+ already joined
            </span>
            <h3 className='contact__title'>
                Stay up-to-date with what we’re doing
            </h3>
            <input 
                className='contact__email' 
                type="email" 
                name="email"
                placeholder="Enter your email address"
                aria-label="Email address for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className='contact__submit' type='submit'>
                Contact Us
            </button>
        </form>
    )
}

export default Contact;