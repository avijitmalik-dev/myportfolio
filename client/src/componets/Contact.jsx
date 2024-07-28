import { useState } from "react";
import React from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        }); 
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='w-full p-6 md:p-12 lg:p-24 bg-slate-50 flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-4xl font-serif font-bold uppercase pb-6 md:pb-10'>Contact us</h1>
            <form className='flex flex-col gap-4 w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-4 md:px-10 lg:px-20' onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />        
                <input 
                    placeholder="Email" 
                    type="email" 
                    name="email"  
                    value={formData.email} 
                    onChange={handleChange} 
                    className="border p-2 rounded" 
                />
                <textarea 
                    placeholder="Message"  
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="border p-2 rounded h-32" 
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
