import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[700px] shadow-sm boder border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
          <aside className='bg-zinc-50 border-r border-r-zinc-100 p-4'>
            <div className='flex gap-2 group'>
              <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400' />
              <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400' /> 
              <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400' />
            </div>
          </aside>
          <main className='p4'>
            <div className='max-w-[700px] mx-auto pt-16 prose'>
              <h1>App Aditon</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium, ad tenetur fugit numquam aliquid vero culpa explicabo. Iure, eveniet qui quia beatae totam reprehenderit porro ad corporis. Vel, illo.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
