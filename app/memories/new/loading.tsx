export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1b1e]">
      <div className="relative text-left flex flex-col rounded-md bg-[#25262b] shadow-ct transition-all duration-500 p-5 min-h-screen w-[100%] md:p-7 md:min-h-[80vh] md:w-[80%] lg:p-10 lg:min-h-[80vh] lg:w-[65%]">
        <div className='pb-5'>
          <a className="underline text-[#313236] bg-[#313236] animate-pulse text-[11px] font-bold">
            voltar à timeline
          </a>
        </div>

        <form className="flex flex-col flex-1 min-h-max gap-3">

          <div className='flex justify-between'>
            <label className="text-[#313236] bg-[#313236] animate-pulse font-bold text-[14px]" htmlFor="media">
              <input
                accept="image/*,video/*"
                id="media"
                name="coverUrl"
                type="file"
                className='hidden'
              />
              Anexar mídia
            </label>

            <label className="text-[#313236] bg-[#313236] animate-pulse font-bold text-[14px]" htmlFor="isPublic">
              Público
            </label>
          </div>

          <div
            placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            spellCheck={false}
            className='flex-1 p-5 text-[#313236] bg-[#313236] animate-pulse rounded'
          />

          <button className="text-[#313236] bg-[#313236] animate-pulse font-bold p-1 text-[14px] rounded" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </main>
  )
}
