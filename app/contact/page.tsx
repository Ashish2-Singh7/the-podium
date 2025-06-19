import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Contact() {
    const socialLinks = [
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/thepodium',
            color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400',
            followers: '12.5K',
            textColor:'blue'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/thepodium',
            color: 'hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple',
            followers: '8.2K',
            textColor:'purple'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/company/thepodium',
            color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400',
            followers: '15.3K',
            textColor:'blue'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/thepodium',
            color: 'hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400',
            followers: '9.7K',
            textColor:'pink'
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            url: 'https://facebook.com/thepodium',
            color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400',
            followers: '22.1K',
            textColor:'blue'
        },
        {
            name: 'YouTube',
            icon: FaYoutube,
            url: 'https://youtube.com/thepodium',
            color: 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-500',
            followers: '5.8K',
            textColor:'red'
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className='space-y-8'>
                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 h-fit">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Send us a Message</h2>
                            <ContactForm />
                        </div>
                        {/* FAQ */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-playfair">Frequently Asked</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How can I contribute an article?</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        You can submit your article through our &quot;Create&quot; page. We review all submissions and respond within 3-5 business days.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you accept guest posts?</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Yes! We welcome guest contributors. Please review our content guidelines before submitting.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I report an issue?</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        You can report any issues or concerns through this contact form or by emailing us directly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-playfair">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">hello@thepodium.com</p>
                                        <p className="text-gray-600 dark:text-gray-400">support@thepodium.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+91 8810315731</p>
                                        <p className="text-gray-600 dark:text-gray-400">+91 8810315731</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office</h3>
                                        <p className="text-gray-600 dark:text-gray-400"> Plot No. 123, Sector 44, Gurugram</p>
                                        <p className="text-gray-600 dark:text-gray-400">Haryana 122003, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Office Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                                    <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                                    <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                                    <span className="font-medium text-gray-900 dark:text-white">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>


                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-playfair">Connect With Us</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Follow us on social media for the latest updates, behind-the-scenes content, and community highlights.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center space-x-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 ${social.color}`}
                                    >
                                        <div className="flex-shrink-0">
                                            <social.icon className={`w-6 h-6 text-gray-600 dark:text-${social.textColor}-500 group-hover:scale-110 transition-transform duration-200`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-xs sm:text-base text-gray-900 dark:text-white group-hover:text-current">
                                                {social.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                                                {social.followers} followers
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}