import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Editor-in-Chief',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Passionate about storytelling and connecting writers with readers worldwide.'
        },
        {
            name: 'Michael Chen',
            role: 'Tech Lead',
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Building the future of digital publishing with innovative technology solutions.'
        },
        {
            name: 'Emma Rodriguez',
            role: 'Content Director',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Curating exceptional content and fostering our community of writers.'
        },
        {
            name: 'David Kim',
            role: 'Community Manager',
            image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Connecting readers and writers to build meaningful relationships.'
        }
    ];

    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To democratize storytelling by providing a platform where every voice can be heard and every story can find its audience.'
        },
        {
            icon: Users,
            title: 'Our Community',
            description: 'We believe in the power of community-driven content, where readers and writers collaborate to create something beautiful.'
        },
        {
            icon: Award,
            title: 'Quality First',
            description: 'We maintain high editorial standards while celebrating diverse perspectives and unique storytelling approaches.'
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">
                        About The Podium
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {"We're"} more than just a blog platform. {"We're"} a community of passionate writers,
                        curious readers, and innovative thinkers working together to share knowledge,
                        inspire creativity, and build connections across the globe.
                    </p>
                </div>

                {/* Story Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Our Story</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                The Podium was born from a simple idea: everyone has a story worth telling.
                                Founded in 2020 by a group of writers and technologists, we set out to create
                                a platform that would empower creators while providing readers with high-quality,
                                diverse content.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                What started as a small project has grown into a thriving community of over 50,000
                                active readers and 500+ contributing writers from around the world. We&apos;ve published
                                thousands of articles across dozens of categories, from technology and travel to
                                lifestyle and business.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Today, we continue to innovate and evolve, always staying true to our core mission
                                of making quality content accessible to everyone.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 font-playfair">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 font-playfair">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <div className="text-blue-100">Active Readers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1.2K+</div>
                            <div className="text-blue-100">Published Articles</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-100">Contributing Writers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">25+</div>
                            <div className="text-blue-100">Content Categories</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 text-center">
                    <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">Join Our Community</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re a seasoned writer or just starting your journey,
                        we&apos;d love to have you as part of our growing community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                            Start Writing
                        </button>
                        <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}