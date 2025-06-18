import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (

    <div>
      <Script>
        {`
          alert("Contact page loaded");
          // You can add more JavaScript code here if needed
        `}
      </Script>
      <h1>Contact Page</h1>
      <p>This is the contact page of the Facebook clone.</p>
    </div>
  )
}

export default contact
export const metadata = {
  title: " Contact Facebook - Connect with the World",
  description: " Contact Facebook Connect with friends and the world around you on Facebook.",
};
