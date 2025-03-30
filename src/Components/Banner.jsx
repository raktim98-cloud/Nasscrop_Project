import Bg from "../assets/cover.jpg"
import BannerCount from "./BannerCount"
const backgroundBG =  {
    backgroundImage : `url(${Bg})`
}
import Bannerimage_1 from "../assets/c-1.png"
import Bannerimage_2 from "../assets/c-2.png"
import Bannerimage_3 from "../assets/c-3.png"
import Bannerimage_4 from "../assets/c-4.png"

const countData = [
  {
    id:1,
    icon:Bannerimage_1,
    counterNumber:"0.3",
    text:"CASES DONE",
    suffix:"k"
  },
  {
    id:2,
    icon:Bannerimage_2,
    counterNumber:"0.04",
    text:"AWARD WINNING"
    
  },
  {
    id:3,
    icon:Bannerimage_3,
    counterNumber:"0.12",
    text:"COUNTRIES WORLDWIDE",
    suffix:"+"
  },
  {
    id:4,
    icon:Bannerimage_4,
    counterNumber:"0.15",
    text:"HAPPY CUSTOMERS",
    suffix:"k"
  }
]

function Banner() {
  return (
    <section  style={backgroundBG} className=" bg-center bg-cover bg-no-repeat ">
      <div className='bg-black/50 pt-15 md:pt-[224px] pb-[150px] text-center ' >
      <div className="container lg:relative">
        <div className="max-w-[860px] py-10 mx-auto">
          <h1 className="font-extrabold text-[40px] md:text-[68px] leading-[57px] md:leading-20 text-white">Experts are here solve 
          your business problem.</h1>
          <p className="text-base sm:text-[20px] md:text-xl lg:text-2xl leading-relaxed text-white py-10 px-10 ">We know how large objects will act, but things on a 
          small scale just do not act that way.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="py-[10px] px-9 bg-[#FFA62B] rounded-full text-[14px] leading-[28px] font-bold text-white">Get Quote Now</button>
            
            <button className="py-[10px] px-9 bg-transparent rounded-full text-[14px] leading-[28px] font-bold text-white border border-white">Learn More</button>
            
          </div>
        </div>
        <div className="px-[87px] grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:bg-white lg:gap-0 lg:grid-cols-4 lg:px-0 lg:absolute left-0 bottom-0 translate-x-0 lg:translate-y-[220px] lg:w-[1084px] lg:shadow-[0_13px_19px_rgba(0,0,0,0.07)]">
          {countData?.map(countItem => <BannerCount id={countItem.id} icon={countItem.icon} counterNumber={countItem.counterNumber} text={countItem.text} suffix={countItem.suffix} />)}
        </div>
      </div>
     
    </div>
    
    </section>
  )
}

export default Banner