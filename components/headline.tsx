export default function Headline({ title, subtitle }) {
    return (
        <div className="bg-[#00BFFF15] text-center p-3 md:p-[2.5rem] leading-5 font-bold mt-[3.5rem] md:mt-[5rem]">
            <div className="text-4xl md:text-[3rem] leading-10 text-md">
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