import { useRef, useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_98etifr', 'template_cwetzrg', formRef.current, 'kIFlHsi_ATA4rWU1f')
            .then((result) => {
                console.log(result.text);
                setFormStatus('success');
                formRef.current.reset(); // Clear the form fields
            }, (error) => {
                console.log(error.text);
                setFormStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="w-full lg:w-1/2">
            <div className="leading-loose">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Contact Form
                    </p>
                    <FormInput
                        inputLabel="Full Name"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Your Name"
                        ariaLabelName="Name"
                    />
                    <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Your email"
                        ariaLabelName="Email"
                    />
                    <FormInput
                        inputLabel="Subject"
                        labelFor="subject"
                        inputType="text"
                        inputId="subject"
                        inputName="subject"
                        placeholderText="Subject"
                        ariaLabelName="Subject"
                    />

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                        ></textarea>
                    </div>

                    <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                        <Button
                            title={isSubmitting ? 'Sending...' : 'Send Message'}
                            type="submit"
                            aria-label="Send Message"
                            disabled={isSubmitting}
                        />
                    </div>

                    {formStatus === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                    {formStatus === 'error' && <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
