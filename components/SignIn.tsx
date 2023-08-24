export function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1b1e] ">
      <a
        className="text-lg font-bold text-white underline"
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      >
        Crie sua conta e salve tuas memórias!
      </a>
    </main>
  )
}
