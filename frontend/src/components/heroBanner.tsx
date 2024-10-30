
export const HeroBanner = () =>{
    return(
        <div className="bg-[#C8E870] mt-5 text-black mx-[20px] sm:mx-[60px]  flex flex-col sm:flex-row justify-between mt-[40px] pb-[0] pt-[20px] sm:py-[40px] rounded space-y-5 sm:space-y-0 shadow-lg ">
            <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 sm:border-r pb-5 sm:pb-0">
                <h1 className="sm:text-4xl text-3xl text-center font-bold">£1,000</h1>
                <p className="text-[#667085]  w-[90%] mx-auto text-center">Minimum Invesment Amount</p>
            </article>
            <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 sm:border-r pb-5 sm:pb-0">
                <h1 className="sm:text-4xl text-3xl font-bold">274+</h1>
                <p className="text-[#667085]">Investors</p>
            </article>
            <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 pb-5 sm:pb-0">
                <h1 className="sm:text-4xl text-3xl font-bold">19</h1>
                <p className="text-[#667085] w-[90%] mx-auto text-center">Grade A Commercial Properties in Pipeline</p>
            </article>
        </div>
    )
}