
export default function Profile() {
    return (
        <div className='p-3 md:p-8' >
            <div className='flex justify-center'>
                <div className='grid content-center lg:gap-y-2'>
                    <div className='font-bold text-xl md:text-4xl lg:text-6xl xl:text-12xl'>
                        <i className='text-[#f2ff007d]'>&lt;</i>Hallo, Ich bin Johannes.
                    </div>
                    <div className='pl-3'>
                        jobTitle=&apos;<b className="text-[#f2ff007d]">Senior Software Entwickler</b>&apos;
                    </div>
                    <div className='pl-3'>
                        industries=&apos;<b className="text-[#f2ff007d]">Banking / Finance, Insurance, Automotive, Ecommerce, Manufacturing</b>&apos;
                    </div>
                    <div className='pl-3'>
                        location=&apos;<b className="text-[#f2ff007d]">München</b>&apos;
                    </div>
                    <div className='pl-3'>
                        experience=&apos;<b className="text-[#f2ff007d]">mehr als 10 Jahre</b>&apos;
                    </div>
                    <div className='pl-3'>
                        field=&apos;<b className="text-[#f2ff007d]">Enterprise Software</b>&apos;
                    </div>
                    <div className='font-bold text-xl md:text-2xl text-[#f2ff007d]'>/&gt;</div>
                </div>
            </div>
        </div>
    )
}