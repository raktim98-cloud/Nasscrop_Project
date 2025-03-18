import Bg from "../assets/cover.jpg"
const backgroundBG =  {
    backgroundImage : `url(${Bg})`
}

function Banner() {
  return (
    <section  style={backgroundBG} className=" bg-center bg-cover bg-no-repeat">
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
    </section>
  )
}

export default Banner