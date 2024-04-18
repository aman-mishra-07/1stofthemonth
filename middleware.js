import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookieStore = cookies()
  
  let data = cookieStore.getAll().find((key) => key?.name === 'accessToken');
  console.log('middleware executed no condition ');
  console.log(data?.value);
  if (!(data?.value)) {
    console.log('middleware executed');
    return NextResponse.redirect(new URL('/login', request.url))
  } else {
    NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/health', '/learnings'],
}