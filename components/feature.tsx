import Image from 'next/image'
import cn from 'classnames'

export default function Feature({ orderFirst, imgSrc, title, text }) {
    return (
        <div className='flex flex-col md:flex-row mt-5 md:mt-[7rem]'>
            <div className={cn('grid flex-1 justify-center p-5', { 'md:order-1': orderFirst })}>
                <Image className='rounded-[20px]'
                    width={300} height={200}
                    src={imgSrc} alt={title} />
            </div>
            <div className="flex flex-1 items-center">
                <div className="">
                    <div className="text-3xl md:text-5xl font-bold leading-[2.3rem] grid text-center mb-[2rem]">{title}</div>
                    <div className='leading-7 text-2xl mb-[2rem] text-center'>{text}</div>
                    <div className='text-center'>
                        <button className='font-bold bg-[#f2ff00] py-2 px-4 rounded-[20px] hover:underline leading-10 text-md'>
                            Mehr erfahren
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
