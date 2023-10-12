export default function Headline({ title, subtitle, id }) {
    return (
        <div id={id} className="bg-[#f2ff0060] text-center p-3 md:p-[1.5rem] leading-5 font-bold mb-[2rem] md:mb-[4rem] mt-[3.5rem] md:mt-[5rem]">
            <div className="text-3xl md:text-[3rem] leading-10 text-md">
                {title}
            </div>
            <div className="p-5 text-lg md:text-xl">
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}