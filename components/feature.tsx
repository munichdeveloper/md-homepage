import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'

export default function Feature({ orderFirst, imgSrc, title, text, link = '#' }) {
    return (
        <div className='flex flex-col md:flex-row mt-5 mb-[2rem]'>
            <div className={cn('grid flex-1 justify-center p-5 items-center', { 'md:order-1': orderFirst })}>
                <Image className='rounded-[20px]'
                    width={300} height={200}
                    src={imgSrc} alt={title} />
            </div>
            <div className="flex flex-1 items-center">
                <div className="">
                    <div className="text-2xl md:text-5xl font-bold leading-[2rem] md:leading-10 grid text-center mb-[1.3rem]">{title}</div>
                    <div className='leading-7 text-xl md:text-2xl mb-[0.6rem] md:mb-[1rem] text-center'>{text}</div>
                    <div className='text-center'>
                        <button className='font-bold bg-[#f2ff00] py-2 px-4 rounded-[20px] hover:underline leading-[2rem] text-md border-2 border-black'>
                            <Link href={link} >Mehr erfahren</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
