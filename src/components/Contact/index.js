
import './index.scss';
import {Input} from 'react-router-dom';

const Contact = () => {

  const refForm = useRef
  return (
    <div className="container contact-page">
      {/* <div className="text-zone">
        <h1>Contact Me</h1>
        <p>If you have any questions, feel free to reach out to us using the form below:</p>
        </div> */}
        <div className='contact-form'>
            <form ref={refForm}>
             <ul>
                <li className='half'>
                    <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                    <input 
                    type='email' 
                    name='email' 
                    placeholder="Email" 
                    required/>

                    
                </li>
                <li>
                    <input 
                    placeholder="Subject" 
                    type="text" 
                    name="subject" 
                    required/>
                </li>
                <li>
                    <textarea
                    placeholder="Message" 
                    type="message" 
                    name="message" 
                    required></textarea>
                </li>
                <li>
                    <input 
                    type="submit" 
                    className="flat-button" 
                    value="SEND"/>
                </li>
             </ul>
             </form>
        </div>
    </div>

  );
}

export default Contact;
