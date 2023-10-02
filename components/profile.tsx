import Image from 'next/image'

export default function Profile() {
    return (
        <div className='grid md:grid-cols-2 p-3 md:p-8' >
            <div className='center py-5'>
                <Image
                    alt='Johannes Hinkov'
                    className="rounded-[9999rem]"
                    width="250"
                    height="250"
                    src="https://nft-miner.com/wp-content/uploads/2022/11/1575036734875.jpg"
                />
            </div>
            <div className='flex justify-center'>
                <div className='grid content-center'>
                    <div className='font-bold text-xl md:text-2xl'>
                        <i className='text-[#00BFFF85]'>&lt;</i>Hallo, Ich bin Johannes.
                    </div>
                    <div className='pl-3'>
                        jobTitle=&apos;<b>Senior Software Entwickler</b>&apos;
                    </div>
                    <div className='pl-3'>
                        location=&apos;<b>München</b>&apos;
                    </div>
                    <div className='pl-3'>
                        experience=&apos;<b> &gt; 10 Jahre</b>&apos;
                    </div>
                    <div className='pl-3'>
                        field=&apos;<b>Enterprise Softwareentwicklung</b>&apos;
                    </div>
                    <div className='font-bold text-xl md:text-2xl text-[#00BFFF85]'>/&gt;</div>
                </div>
            </div>
        </div>
    )
}