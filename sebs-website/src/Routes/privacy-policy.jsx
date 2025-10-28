import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Eye, UserCheck, Mail, Clock } from 'lucide-react';
import WavePattern from '../Components/Common/WavePattern';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );

            // Staggered section animations
            sectionsRef.current.forEach((section, index) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const sections = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Information We Collect',
            content: [
                'Personal identification information (name, email address, phone number)',
                'Event details and preferences you provide during booking',
                'Payment information processed securely through our payment providers',
                'Usage data and analytics to improve our services',
            ],
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'How We Use Your Information',
            content: [
                'To process and manage your event bookings',
                'To communicate with you about your events and services',
                'To send promotional materials (with your consent)',
                'To improve our website and customer experience',
                'To comply with legal obligations',
            ],
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: 'Information Sharing',
            content: [
                'We do not sell or rent your personal information to third parties',
                'We may share information with trusted service providers who assist in our operations',
                'We may disclose information when required by law or to protect our rights',
                'Event vendors may receive necessary details to fulfill your booking',
            ],
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: 'Your Rights',
            content: [
                'Access and review your personal information',
                'Request correction of inaccurate data',
                'Request deletion of your data (subject to legal requirements)',
                'Opt-out of marketing communications at any time',
                'Object to processing of your personal data',
            ],
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Data Security',
            content: [
                'We implement industry-standard security measures',
                'SSL encryption for all data transmission',
                'Regular security audits and updates',
                'Restricted access to personal information',
                'Secure backup and storage systems',
            ],
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Data Retention',
            content: [
                'We retain your information for as long as necessary to provide services',
                'Event data is kept for 7 years for business and legal purposes',
                'Marketing data is retained until you opt-out',
                'You may request earlier deletion of your data',
            ],
        },
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#fff8ee] overflow-hidden">
            {/* Background Wave Pattern */}
            <div className="absolute inset-0 z-0">
                <WavePattern />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                {/* Header Section */}
                <div ref={headerRef} className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#7dd3fc] p-6 rounded-full shadow-lg">
                            <Shield className="w-16 h-16 text-[#204558]" />
                        </div>
                    </div>
                    <h1 className="font-yeseva text-5xl lg:text-7xl text-[#0f766e] mb-4">
                        Privacy Policy
                    </h1>
                    <p className="font-montserrat-alt text-lg text-[#17414d] max-w-2xl mx-auto">
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                    </p>
                    <p className="font-montserrat-alt text-sm text-[#bb8c7d] mt-4">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            ref={(el) => (sectionsRef.current[index] = el)}
                            className="bg-[#faf4eb] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#f7d0d5]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-[#efaac3] p-4 rounded-full text-[#204558] flex-shrink-0">
                                    {section.icon}
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-corben-bold text-2xl lg:text-3xl text-[#0f766e] mb-4">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-3">
                                        {section.content.map((item, i) => (
                                            <li
                                                key={i}
                                                className="font-montserrat-alt text-[#17414d] flex items-start gap-3"
                                            >
                                                <span className="text-[#fb7185] mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 bg-gradient-to-r from-[#7dd3fc] to-[#efaac3] rounded-lg p-8 shadow-xl text-center">
                    <Mail className="w-12 h-12 text-[#204558] mx-auto mb-4" />
                    <h3 className="font-corben-bold text-2xl text-[#204558] mb-3">
                        Questions About Privacy?
                    </h3>
                    <p className="font-montserrat-alt text-[#17414d] mb-6 max-w-2xl mx-auto">
                        If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
                    </p>
                    <a
                        href="mailto:privacy@eventplanner.com"
                        className="inline-block bg-[#204558] text-white font-corben-bold px-8 py-3 rounded-full hover:bg-[#17414d] transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Cookie Notice */}
                <div className="mt-8 bg-[#fffaf4] border-2 border-[#f7d0d5] rounded-lg p-6 text-center">
                    <p className="font-montserrat-alt text-sm text-[#17414d]">
                        <span className="font-corben-bold text-[#0f766e]">Cookie Notice:</span> We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our website, you consent to our use of cookies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;