import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Where to reach me out:</h3>
                    <p className="contact__details">Let's work together! Send me an email ♡</p>
                    <p className="contact__details">Email: yarahfranchescae@gmail.com</p>
                    <p className="contact__details">Contact #: 09452058422</p>


                </div>

        <form action="" className="contact__form">
        <div className="contact__form-group">
            <div className="contact__form-div">
            <input type="text" className="contact__form-input" 
            placeholder='Your Name'/>
            </div>
            
           
          
            <div className="contact__form-div">
            <input type="email" className="contact__form-input" 
            placeholder='Your Email'/>
            </div>
            </div>
            

      
            <div className="contact__form-div">
            <input type="text" className="contact__form-input" 
            placeholder='Subject'/>
            </div>
          
         
            <div className="contact__form-div">
            <textarea name="" id="" cols='30' rows='10'
            className="contact__form-input" 
            placeholder='Write your message'></textarea>
            </div>
         
            <button className="btn">Send Message</button>

        
               </form>
            </div>
        </section>
    );
};

export default Contact