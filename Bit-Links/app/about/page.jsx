import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-12 md:py-20'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* Image */}
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-full h-64 md:h-96'>
              <Image 
                alt="About BitLinks" 
                src="/tryfree.webp" 
                fill={true}
                className='object-contain'
                priority
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className='md:w-1/2 flex flex-col gap-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
              About BitLinks
            </h1>
            <p className='text-lg text-gray-600'>
              BitLinks is a modern URL shortening service built with privacy and performance in mind. Our mission is to simplify link sharing without compromising your data.
            </p>
            <div className='mt-4'>
              <Link href="/shorten">
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer'>
                  Start Shortening
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
            Our Story
          </h2>
          <div className='max-w-4xl mx-auto text-center text-gray-600 space-y-6'>
            <p>
              Founded in 2023, BitLinks was created to solve the problem of overly complex URL shorteners that track too much user data. We believe in simple, effective tools that respect user privacy.
            </p>
            <p>
              What started as a side project has grown into a trusted service used by thousands of professionals worldwide. Our team is distributed across the globe, united by a passion for building better web tools.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
            Meet The Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Full-stack developer with a passion for privacy-focused products.",
                image: "/team-alex.png"
              },
              {
                name: "Sam Lee",
                role: "Lead Developer",
                bio: "Infrastructure specialist ensuring our service stays fast and reliable.",
                image: "/team-sam.png"
              },
              {
                name: "Taylor Smith",
                role: "UX Designer",
                bio: "Makes sure BitLinks is intuitive and enjoyable to use.",
                image: "/team-taylor.png"
              }
            ].map((member, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer'>
                <div className='relative w-full h-48 mb-4 rounded-lg overflow-hidden'>
                  <Image 
                    alt={member.name}
                    src={member.image}
                    fill={true}
                    className='object-cover'
                  />
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>{member.name}</h3>
                <p className='text-indigo-600 mb-2'>{member.role}</p>
                <p className='text-gray-600'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About