import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-12 md:py-20'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* Text Content */}
          <div className='md:w-1/2 flex flex-col gap-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              Contact Us
            </h1>
            <p className='text-lg text-gray-600'>
              Have questions or feedback? We'd love to hear from you. Our team is ready to help with any inquiries about BitLinks.
            </p>
            <div className='mt-2 space-y-4'>
              <div className='flex items-center gap-3'>
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className='text-gray-600'>contact@bitlinks.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className='text-gray-600'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-3'>
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className='text-gray-600'>123 Tech Street, San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className='md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-sm'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Send us a message</h2>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block text-gray-700 mb-2'>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-gray-700 mb-2'>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                  placeholder='your@email.com'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-gray-700 mb-2'>Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                  placeholder='Your message...'
                ></textarea>
              </div>
              <button 
                type="submit" 
                className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer w-full'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-3xl mx-auto space-y-6'>
            {[
              {
                question: "How does BitLinks ensure my privacy?",
                answer: "We don't track individual users or store personal data with your shortened links. Our analytics are completely anonymous."
              },
              {
                question: "Is there a limit to how many links I can create?",
                answer: "No, you can create unlimited links with our free plan. Enterprise plans offer additional features."
              },
              {
                question: "Can I customize my shortened links?",
                answer: "Yes, with a free account you can customize your links. Enterprise plans allow custom domains."
              }
            ].map((faq, index) => (
              <div key={index} className='border-b border-gray-200 pb-6'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-indigo-600 transition-colors'>
                  {faq.question}
                </h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs