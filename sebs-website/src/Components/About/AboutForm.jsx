import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import {
  RiFacebookFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { FaFacebookMessenger, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function AboutForm() {
  const logo1Ref = useRef(null);
  const dividerRef = useRef(null);
  const formRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration - replace with your actual IDs
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    
    // Template params that match EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Psalm & Platter', // Your business name
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
        // Clear error message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate logo1 since logo2 was removed
      const logo1 = logo1Ref.current;
      if (logo1) {
        logo1.addEventListener('mouseenter', () => {
          gsap.to(logo1, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        logo1.addEventListener('mouseleave', () => {
          gsap.to(logo1, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#fcf4ea] px-4 md:px-30 py-20">
      <div className="grid md:grid-cols-2 gap-25 items-start ">
        {/* Left: Contact Cards & Showcase Box */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: FaFacebookMessenger,
                label: "Messenger",
                color: "text-[#9ac1c2]",
                description: "Chat with us instantly"
              },
              {
                icon: FaEnvelope,
                label: "Email",
                color: "text-[#ffc571]",
                description: ".com"
              },
              {
                icon: FaFacebook,
                label: "Facebook",
                color: "text-[#4a90e2]",
                description: "Follow our page"
              },
              {
                icon: FaWhatsapp,
                label: "Whatsapp",
                color: "text-[#fb8950]",
                description: "+64 21 123 4567"
              },
            ].map(({ icon: Icon, label, color, description }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-sm"
              >
                <Icon className={`text-4xl mb-2 ${color}`} />
                <p className="font-semibold text-lg text-[#23404a]">{label}</p>
                <p className="text-sm text-[#23404a] mt-1">{description}</p>
              </div>
            ))}
          </div>
          {/* Showcase Box */}
          <div className="rounded-2xl bg-[#f6eada] h-80 w-full flex items-center justify-center p-8">
            <div className="flex flex-col items-center justify-center gap-6 h-full w-full">
              <div ref={logo1Ref} className="cursor-pointer">
                <img 
                  src="/img/LOGO5 copy.png" 
                  alt="Psalm & Platter Logo" 
                  className="h-84 w-auto object-contain max-w-full mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div>
          <h3 className="font-corben-reg text-5xl text-[#0e465a] mb-2 py-3">
            Get in touch
          </h3>
          <p className="mb-6 text-[#23404a] py-3">
            Your celebration deserves more than just food—it deserves an
            experience. Our gourmet grazing cart redefines event catering with
            fresh, artfully styled spreads that dazzle the senses.
          </p>
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm">We'll get back to you as soon as possible.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="font-semibold">Failed to send message.</p>
              <p className="text-sm">Please check your EmailJS configuration or try again later.</p>
            </div>
          )}
          
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#23404a] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-[#23404a] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-[#23404a] mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-[#23404a] mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-5 focus:outline-none bg-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-[#f0a7c2] text-white font-semibold hover:bg-white hover:text-[#f0a7c2] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
