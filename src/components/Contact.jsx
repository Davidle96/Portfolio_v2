import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Service ID, Template ID, and Public Key
        // You need to replace these with your actual IDs from EmailJS dashboard
        const serviceId = 'service_frgge2p';
        const templateId = 'template_ca3izl3';
        const publicKey = 'o3eR2LscHZmFH6SZN';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <RevealOnScroll>
                    <h2>Contact Me</h2>
                    <p className="text-center">Feel free to reach out for collaborations or just a friendly hello!</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn primary">Send Message</button>
                    </form>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Contact;
