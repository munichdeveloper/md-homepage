import Image from 'next/image'

export default function Profile() {
    return (
        <div className='grid md:grid-cols-2 p-3 md:p-8' >
            <div className='center py-5'>
                <Image
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
                        jobTitle=$quot;<b>Senior Software Entwickler</b>$quot;
                    </div>
                    <div className='pl-3'>
                        location=$quot;<b>München</b>$quot;
                    </div>
                    <div className='pl-3'>
                        experience=$quot;<b> &gt; 10 Jahre</b>$quot;
                    </div>
                    <div className='pl-3'>
                        field=$quot;<b>Enterprise Softwareentwicklung</b>$quot;
                    </div>
                    <div className='font-bold text-xl md:text-2xl text-[#00BFFF85]'>/&gt;</div>
                </div>
            </div>
        </div>
    )
}