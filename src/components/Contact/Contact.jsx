import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Enhanced form validation
  const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errors.user_email = "Please enter a valid email address";
    }
    
    if (!formData.user_name?.trim()) {
      errors.user_name = "Name is required";
    } else if (formData.user_name.trim().length < 2) {
      errors.user_name = "Name must be at least 2 characters";
    }
    
    if (!formData.subject?.trim()) {
      errors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    
    if (!formData.message?.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }
    
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    
    // Validate form
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = form.current.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    try {
      await emailjs.sendForm(
        "service_deeavpx",
        "template_mv9yhz6",
        form.current,
        "CeseV525Fje1Gx0dF"
      );
      
      setIsSent(true);
      form.current.reset();
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        toastId: "success-contact",
      });

      // Reset success state after a delay
      setTimeout(() => setIsSent(false), 8000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        toastId: "error-contact",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="z-50"
      />

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
        role="region"
        aria-labelledby="contact-heading"
      >
        {/* Section Title */}
        <header className="text-center mb-12 sm:mb-16 max-w-4xl">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CONTACT
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you—reach out for any opportunities or questions!
          </p>
        </header>

        {/* Contact Form */}
        <div className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">
            Connect With Me 
            <span className="ml-2" role="img" aria-label="rocket">🚀</span>
          </h3>

          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-6"
            noValidate
            aria-describedby="form-instructions"
          >
            <p id="form-instructions" className="sr-only">
              Fill out the form below to send me a message. All fields are required.
            </p>

            {/* Name and Email Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="user_name" className="sr-only">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  aria-invalid={formErrors.user_name ? "true" : "false"}
                  aria-describedby={formErrors.user_name ? "name-error" : undefined}
                  className={`w-full p-3 sm:p-4 rounded-lg bg-gray-800/80 text-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-400 hover:bg-gray-800/90 ${
                    formErrors.user_name 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                      : "border-gray-600 focus:border-purple-500"
                  }`}
                />
                {formErrors.user_name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center gap-1" role="alert">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {formErrors.user_name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="user_email" className="sr-only">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  aria-invalid={formErrors.user_email ? "true" : "false"}
                  aria-describedby={formErrors.user_email ? "email-error" : undefined}
                  className={`w-full p-3 sm:p-4 rounded-lg bg-gray-800/80 text-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-400 hover:bg-gray-800/90 ${
                    formErrors.user_email 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                      : "border-gray-600 focus:border-purple-500"
                  }`}
                />
                {formErrors.user_email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center gap-1" role="alert">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {formErrors.user_email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="sr-only">
                Message Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                aria-invalid={formErrors.subject ? "true" : "false"}
                aria-describedby={formErrors.subject ? "subject-error" : undefined}
                className={`w-full p-3 sm:p-4 rounded-lg bg-gray-800/80 text-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-400 hover:bg-gray-800/90 ${
                  formErrors.subject 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                    : "border-gray-600 focus:border-purple-500"
                }`}
              />
              {formErrors.subject && (
                <p id="subject-error" className="mt-2 text-sm text-red-400 flex items-center gap-1" role="alert">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {formErrors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows="5"
                required
                aria-invalid={formErrors.message ? "true" : "false"}
                aria-describedby={formErrors.message ? "message-error" : "message-hint"}
                className={`w-full p-3 sm:p-4 rounded-lg bg-gray-800/80 text-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-400 resize-vertical min-h-32 hover:bg-gray-800/90 ${
                  formErrors.message 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                    : "border-gray-600 focus:border-purple-500"
                }`}
              />
              <p id="message-hint" className="mt-1 text-xs text-gray-500">
                Minimum 10 characters required
              </p>
              {formErrors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center gap-1" role="alert">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {formErrors.message}
                </p>
              )}
            </div>
            
            {/* Send Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white py-3 sm:py-4 px-8 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed relative overflow-hidden group"
              style={{
                background: isLoading 
                  ? 'linear-gradient(90deg, #6b46c1, #9333ea)' 
                  : 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: isLoading 
                  ? 'none' 
                  : '0 0 2px #8245ec, 0 0 4px #8245ec, 0 0 20px #8245ec',
              }}
              aria-describedby="button-status"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg 
                      className="animate-spin w-5 h-5" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </>
                )}
              </span>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            
            <p id="button-status" className="sr-only">
              {isLoading ? "Sending your message, please wait" : "Ready to send"}
            </p>
          </form>

          {/* Success Message */}
          {isSent && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg" role="alert">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-green-400 font-medium">Message sent successfully!</p>
                  <p className="text-green-300 text-sm mt-1">I'll get back to you soon.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;