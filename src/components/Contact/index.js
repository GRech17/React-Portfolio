import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("your email is invalid.");
            } else {
                setErrorMessage('');
            } 
        }   else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }    

    };    
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <main id='main'>
            <section id='contact' className='contact'>
            <div className='container'>
                <div className='section-title'>
                <h2>Contact Me</h2>
                  <div className='content'>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button data-testid='button' type='submit'>Submit</button>
            </form>
        </div>
        </div>
        
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Contact Info</h3>
              <p class="font-italic">
                Please feel free to contact me to start our journey together.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Phone:</strong> 818-209-6766
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>City:</strong> Los Angeles, CA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Email: </strong>
                      <a href="mailto:gireches@gmail.com">
                        gireches@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              </div>
              </div>
        </section>
        </main>
    );
}

export default ContactForm;