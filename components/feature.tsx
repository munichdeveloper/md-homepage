import Image from 'next/image'
import cn from 'classnames'

export default function Feature({ rtl, imgSrc, title, text }) {
    return (
        <div className={
            cn('grid md:grid-cols-2 mt-5 md:mt-[7rem]', { 'rtl-grid': rtl })
        }>
            <div className='grid justify-center p-5'>
                <Image className='rounded-[20px]'
                    width={300} height={200}
                    src={imgSrc} />
            </div>
            <div className="flex items-center">
                <div className="">
                    <div className="text-3xl md:text-5xl font-bold leading-[2.3rem] grid text-center mb-[2rem]">{title}</div>
                    <div className='leading-7 text-2xl mb-[2rem] text-left'>{text}</div>
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
