import Image from 'next/image'

export default function Entry() {
    return (
        <div>
            <div className="text-[2rem] md:text-[5rem] center leading-tight font-bold">
                Hi, ich bin Johannes,
            </div>
            <div className="text-[2rem] md:text-[3rem] center leading-tight font-bold">
                Senior Software Entwickler.
            </div>
            <div className="flex justify-center max-w-[70rem] mx-auto">
                <Image className='w-full px-5 pb-10 md:pb-0 md:px-[10rem] pt-10 rounded-[14rem]'
                    width={1049}
                    height={682}
                    quality={100}
                    src="https://nft-miner.com/wp-content/uploads/2023/10/Screenshot-2023-10-04-231825.png" alt={''} />
            </div>

        </div>
    )
}