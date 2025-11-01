import './contact.scss'
import { useState } from 'react';

function checkEmail(email: string) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
}


const Contact = () => {
    const [email, setEmail] = useState('');
    const [isError, setError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!checkEmail(email)) {
            setError(true);
            return;
        }
        setError(false);
        setEmail('');
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (isError) {
            setError(false);
        }
    }
    const handleFocus = () => {
        if (isError) {
            setError(false);
        }
    }


    return (
        <form className={`contact ${isError ? 'is-error' : ''}`} onSubmit={handleSubmit} noValidate>
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
                onChange={handleChange}
                onFocus={handleFocus}
            />
            <button className='contact__submit' type='submit'>
                Contact Us
            </button>
        </form>
    )
}

export default Contact;