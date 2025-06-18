// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     // return NextResponse.json({
//     //     message: 'This is the About page',
//     //     url: request.url,
//     // })
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }



// --------------------- Second Method ---------------------
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is for the About page
  if (request.nextUrl.pathname.startsWith('/about')) {
    // Redirect to the home page
    return NextResponse.rewrite(new URL('/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Redirect to the home page
    return NextResponse.redirect(new URL('/', request.url))
  }
    
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}