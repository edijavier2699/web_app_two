import bannerImg from "../assets/Banner.webp"

export const MarketplaceBanner = () =>{
    return(
        <article
                className="rounded-lg bg-black flex loading-lazy flex-col justify-center pl-[20px] mt-5 space-y-5 py-[40px] bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImg})` }}
                >
                <h3 className="text-white tracking-wide font-bold text-3xl leading-relaxed">
                    Invest in commercial<br/> real estate with <span className="text-[#C8E870]">ease </span>
                </h3>
            </article>
    )
}