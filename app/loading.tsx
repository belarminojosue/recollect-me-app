export default function Loading() {
  return (
    <main className="min-h-screen bg-[#1a1b1e]">
      {/* HEADER */}
      <header className="flex items-center justify-between px-0 py-3 shadow-ct sm:px-10">
        <div className="m-auto flex items-center justify-between transition-all duration-500 sm:m-0">
          <div
            className="h-10 w-10 cursor-pointer rounded-full bg-[#313236]"
          />
          <div className="ml-2">
            <p className="text-[#313236] bg-[#313236] animate-pulse px-8">
              Welcome <span className="font-bold">......</span>
            </p>
            <a
              className="text-[10px] text-[#313236] bg-[#313236] animate-pulse px-3"
              href="/api/auth/logout"
            >
              Sair
            </a>
          </div>
        </div>
        <div
          className="hidden rounded-3xl text-[#313236] bg-[#313236] animate-pulse p-3 px-5 text-sm font-bold transition-all duration-500 hover:bg-green-500 sm:block"
        >
          Registrar memorias
        </div>
      </header>

      <section className="m-0 sm:m-10">
        <div className="grid grid-cols-1 gap-3 rounded-lg bg-[#101113] p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[...Array(8)].map((i) => (
            <div
              className="rounded-lg bg-[#25262b] text-center animate-pulse "
              key={Math.floor(Math.random() * (999999999999 - 1000000 + 1) + 1000000)}
            >
              <div className="py-2 text-[10px]">
                <time className=" relative text-white">
                </time>
              </div>
              <div className="relative aspect-video">
                <div
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-3 text-left text-sm leading-relaxed text-gray-100">
              </p>
            </div>
          )
          )}
        </div>
      </section>
    </main>
  )
}
