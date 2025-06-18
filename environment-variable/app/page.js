"use client"
export default function Home() {
  // console.log('My Email id is  : ', process.env.EMAIL_ID)
  // console.log('My Password is  : ', process.env.PASSWORD)
  // above for server 
  return (
    <div>
      <h1>Learning Environment Variable in next Js</h1>
      <p>My Email id is  : {process.env.NEXT_PUBLIC_EMAIL_ID}</p>
      <p>My Password is  : {process.env.NEXT_PUBLIC_PASSWORD}</p>
    </div>
  );
}
