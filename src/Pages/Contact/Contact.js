import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zrko8hb', 'template_igmphal', form.current, 'uUGYvqqqT6t4B8Kz4')
            .then((result) => {
                console.log(result.text);
                console.log('success');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='h-screen '>
            <section className="bg-black text-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center  ">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-white  sm:text-xl">Send your valuable thoughts.</p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-white ">Your email</label>
                            <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="name@flowbite.com" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-white ">Name</label>
                            <input type="text" name="user_name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label  className="block mb-2 text-sm font-medium text-white ">Your message</label>
                            <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit"  className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white">Send message</button>
                    </form>
                </div>
            </section>

            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" className='text-black' />
                <label>Email</label>
                <input type="email" name="user_email" className='text-black' />
                <label>Message</label>
                <textarea name="message" className='text-black' />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    );
};

export default Contact;