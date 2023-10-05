import React from 'react'

export default function TopBar() {
  return (
    <div className='px-10 mb-10 text-center bg-[#f2ff007d]'>
      <div className="items-center md:justify-between mb-0">
        <h1 className="justify-center text-[#778899] text-[2.2rem] md:text-8xl font-bold tracking-tighter leading-tight md:leading-[5rem] md:pr-8">
          munich developer
        </h1>
      </div>
      <div>
        <h2 className="text-xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 mt-3 mb-2 md:mb-10">
          Quelltext aus München
        </h2>
      </div>
    </div>
  )
}
