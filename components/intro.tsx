import React from 'react'

export default function Intro() {
  return (
    <React.Fragment>
      <section className="flex-row flex items-center md:justify-between mt-5 md:mt-16 mb-0">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:leading-[5rem] md:pr-8">
          munich developer
        </h1>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 mt-5 mb-16">
          Quelltext aus München
        </h2>
      </section>
    </React.Fragment>
  )
}
