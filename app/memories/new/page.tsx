import Link from 'next/link'

export default async function NewMemory() {
  //const random = Math.floor(Math.random() * 5 + 5) * 1000 // DELAY
  //await new Promise((resolve) => setTimeout(resolve, random)) // DELAY
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1b1e]">
      <div className="relative text-left flex flex-col rounded-md bg-[#25262b] shadow-ct transition-all duration-500 p-5 min-h-screen w-[100%] md:p-7 md:min-h-[80vh] md:w-[80%] lg:p-10 lg:min-h-[80vh] lg:w-[65%]">
        <div className='pb-5'>
          <Link className="underline text-blue-500 text-[11px] font-bold" href="/">
            voltar à timeline
          </Link>
        </div>

        <form className="flex flex-col flex-1 min-h-max gap-3">

          <div className='flex justify-between'>
            <label className="text-white font-bold text-[14px]" htmlFor="media">
              <input
                accept="image/*,video/*"
                id="media"
                name="coverUrl"
                type="file"
                className='hidden'
              />
              Anexar mídia
            </label>

            <label className="text-white font-bold text-[14px]" htmlFor="isPublic">
              <input id="isPublic" name="isPublic" type="checkbox" value="true" className='' /> Público
            </label>
          </div>

          <textarea
            name="content"
            placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            spellCheck={false}
            className='flex-1 border-[1px] border-solid border-[#373a40] bg-[#1a1b1e] p-5 text-white rounded'
          />

          <button className="bg-[#1971c2] text-white font-bold p-1 text-[14px] rounded" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </main>
  )
}
