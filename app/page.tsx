import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import Loading from './loading'


export default async function Home() {
  const isAuthenticated = cookies().has('token')
  return <main>{isAuthenticated ? <Suspense fallback={<Loading />}><Profile /></Suspense> : <SignIn />}</main>
}
