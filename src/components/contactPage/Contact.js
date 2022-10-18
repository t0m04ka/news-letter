import './contact.css';
import Image from './me.jpg'


export function Contact() {
    return (
        <div className='wrap'>
            <div className="contactinfo">
            <a className='contactPhone' href="tel:+420608369208">+420 608 369 208</a>
            <p className='contactName'>Tamara Moskaleva</p>
            <a className='contactMail' href="mailto:toma.msklv@gmail.com">toma.msklv@gmail.com</a>
                <div className='skills'>
                    <p>Javascript developer</p>
                    <p>ES5, ES6, <span className='react'>React</span></p>
                </div>
            </div>
            <img className="contactImg" src={Image}/>
        </div>
    )
} 