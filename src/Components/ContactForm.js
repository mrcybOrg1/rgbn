"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here (e.g., using a serverless function or API endpoint)
        console.log('Form data submitted:', formData);

        // Reset form fields
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="section padding-top z-bigger">
		<div className="container">
			<div className="row justify-content-center padding-bottom-smaller">
				<div className="col-md-8">
					<div className="subtitle with-line text-center mb-4">get in touch</div>
					<h3 className="text-center padding-bottom-small">drop us a line</h3>
				</div>
                
        <form onSubmit={handleSubmit}>
        <div className="section clearfix"></div>
		<div className="col-md-6 col-lg-4">
		<div className="address">
        <div className="address-in text-left"></div>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        </div>
        <div className="address-in text-right">
        <input className='text-right-border' type="text"/>
        </div>
        </div>


        <div className="address">
        <div className="address-in text-left"></div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            </div>
        <div className="address-in text-right">
        <input className='text-right-border' type="text"/>
        </div>




            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
        </div>
    );
};

export default ContactForm;
