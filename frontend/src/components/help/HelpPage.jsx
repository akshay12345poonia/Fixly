import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How does Fixly work?',
          a: 'Fixly connects you with verified local service providers. Simply search for the service you need, browse providers, read reviews, and book appointments directly through our platform.'
        },
        {
          q: 'Is Fixly free to use?',
          a: 'Yes, Fixly is completely free for customers. You only pay the service provider for their work. There are no hidden fees or platform charges.'
        },
        {
          q: 'How are service providers verified?',
          a: 'All providers undergo background checks, license verification, and insurance validation before joining our platform. We also monitor customer reviews and ratings.'
        }
      ]
    },
    {
      category: 'Booking',
      questions: [
        {
          q: 'How do I book a service?',
          a: 'Browse service providers, select one you like, choose an available time slot, and confirm your booking. You\'ll receive confirmation via email and SMS.'
        },
        {
          q: 'Can I cancel or reschedule my booking?',
          a: 'Yes, you can cancel or reschedule up to 24 hours before your appointment without any charges. Contact the provider directly or use our platform.'
        },
        {
          q: 'What if the provider doesn\'t show up?',
          a: 'If a provider doesn\'t show up, contact our support team immediately. We\'ll help you find a replacement and may offer compensation for the inconvenience.'
        }
      ]
    },
    {
      category: 'Payment',
      questions: [
        {
          q: 'How do I pay for services?',
          a: 'Payment is handled securely through our platform. You can pay with credit/debit cards, PayPal, or other supported payment methods after service completion.'
        },
        {
          q: 'When am I charged?',
          a: 'You\'re only charged after the service is completed and you\'ve confirmed satisfaction. We hold payment securely until then.'
        },
        {
          q: 'What if I\'m not satisfied with the service?',
          a: 'We offer a satisfaction guarantee. If you\'re not happy with the service, contact us within 24 hours and we\'ll work to resolve the issue or provide a refund.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@fixly.com',
      response: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '1-800-FIXLY-NOW',
      response: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with support',
      contact: 'Available on website',
      response: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-3 text-gray-400">
              🔍
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center space-x-1 bg-gray-200 p-1 rounded-lg max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'faq'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'faq' && (
          <div className="space-y-8">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No results found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-blue-500 hover:text-blue-600"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details key={faqIndex} className="group">
                        <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-medium text-gray-900">{faq.q}</span>
                          <span className="text-gray-500 group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-4 p-4 text-gray-600 bg-white border-l-4 border-blue-500">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-medium text-blue-600 mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.response}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Question</option>
                    <option>Booking Issue</option>
                    <option>Payment Problem</option>
                    <option>Provider Complaint</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your question or issue in detail..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/terms" className="text-blue-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-blue-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/become-provider" className="text-blue-500 hover:text-blue-600 transition-colors">
              Become a Provider
            </Link>
            <Link to="/safety" className="text-blue-500 hover:text-blue-600 transition-colors">
              Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
