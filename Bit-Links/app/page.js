import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-12 md:py-24'>
        <div className='flex flex-col-reverse md:flex-row items-center gap-8'>
          {/* Text Content */}
          <div className='md:w-1/2 flex flex-col gap-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              The most reliable URL shortener for professionals
            </h1>
            <p className='text-lg text-gray-600 md:pr-8'>
              Simplify your links while maintaining security and privacy. BitLinks provides enterprise-grade URL shortening without tracking your data or requiring personal details.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <Link href="/generate">
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors w-full sm:w-auto text-center cursor-pointer'>
                  Get Started for Free
                </button>
              </Link>
              <Link href="/github">
                <button className='border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors w-full sm:w-auto text-center cursor-pointer'>
                  GitHub
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-full h-64 md:h-96'>
              <Image 
                alt="URL Shortener Illustration" 
                src="/vector.png" 
                fill={true}
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
            Why Choose BitLinks?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Lightning Fast",
                description: "Our infrastructure ensures your links are processed and delivered in milliseconds.",
                icon: "⚡"
              },
              {
                title: "Privacy Focused",
                description: "We don't track your clicks or collect unnecessary data about your links.",
                icon: "🔒"
              },
              {
                title: "Enterprise Ready",
                description: "API access and custom domains for businesses that need more control.",
                icon: "🏢"
              }
            ].map((feature, index) => (
              <div key={index} className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer'>
                <div className='text-3xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage