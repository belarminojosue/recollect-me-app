import { getUser } from '@/lib/auth'
import { api } from '@/lib/api'
import Link from 'next/link'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import Image from 'next/image'
import Logo from '@/public/logo.png'

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export async function Profile() {
  //const random = Math.floor(Math.random() * 5 + 5) * 1000 // DELAY
  //await new Promise((resolve) => setTimeout(resolve, random)) // DELAY
  const { name, avatarUrl } = getUser() // JWT Authetication
  const token = cookies().get('token')?.value // JWT Authetication
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  return (
    <main className="min-h-screen bg-[#1a1b1e]">
      {/* HEADER */}
      <header className="flex items-center justify-between px-0 py-3 shadow-ct sm:px-10">
        <div className="m-auto flex items-center align-middle justify-between transition-all duration-500 sm:m-0">
          <Image
            alt=""
            className="h-10 w-10 cursor-pointer rounded-full"
            height={40}
            src={avatarUrl}
            width={40}
          />
          <div className="ml-2 flex flex-row gap-3">
            <p className="text-gray-50">
              Bem-vindo <span className="font-bold">{name}</span>
            </p>
            <a
              className="text-[10px] text-red-500 hover:underline"
              href="/api/auth/logout"
            >
              Quero sair
            </a>
          </div>
        </div>
        <Link
          className="fixed z-10 right-10 bottom-10 rounded-3xl bg-green-700 p-3 px-5 font-bold text-black transition-all duration-500 hover:bg-green-500 sm:hidden"
          href="/memories/new"
        >
          +
        </Link>
        <Link
          className="hidden rounded-3xl bg-green-700 p-3 px-5 font-bold text-black transition-all duration-500 hover:bg-green-500 sm:block"
          href="/memories/new"
        >
          Registrar memórias
        </Link>
      </header>

      <section className="m-0 sm:m-10">
        <div className="grid grid-cols-1 gap-3 rounded-lg bg-[#101113] p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {memories.map((memory) => {
            return (
              <Link
                className="rounded-lg bg-[#25262b] text-center transition-all duration-500 hover:shadow-album_hover "
                href={`/memories/${memory.id}`}
                key={memory.id}
              >
                <div className="py-2 text-[10px]">
                  <time className=" relative text-white">
                    {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
                  </time>
                </div>
                <div className="relative aspect-video">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    src={memory.coverUrl}
                  />
                </div>
                <p className="px-3 py-3 text-left leading-relaxed text-gray-100">
                  {memory.excerpt}
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
