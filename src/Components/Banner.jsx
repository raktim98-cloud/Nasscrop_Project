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
    counterNumber:"3k",
    text:"CASES DONE"
  },
  {
    id:2,
    icon:Bannerimage_2,
    counterNumber:"45",
    text:"AWARD WINNING"
  },
  {
    id:3,
    icon:Bannerimage_3,
    counterNumber:"12+",
    text:"COUNTRIES WORLDWIDE"
  },
  {
    id:4,
    icon:Bannerimage_4,
    counterNumber:"1.5k",
    text:"HAPPY CUSTOMERS"
  }
]

function Banner() {
  return (
    <section  style={backgroundBG} className=" bg-center bg-cover bg-no-repeat relative">
      <div className='bg-black/50 pt-15 md:pt-[224px] pb-[150px] text-center ' >
      <div className="container">
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
      </div>
    </div>
    <div className="w-[1084px] lg:absolute left-0 bottom-0 translate-x-[120px] translate-y-0 grid grid-cols-1 items-center justify-center gap-6 py-[80px] px-10 md:grid-cols-2 lg:grid-cols-4">
          {countData?.map(countItem => <BannerCount id={countItem.id} icon={countItem.icon} counterNumber={countItem.counterNumber} text={countItem.text} />)}
        </div>
    </section>
  )
}

export default Banner