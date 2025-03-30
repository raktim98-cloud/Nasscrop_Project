import CountUp from "react-countup";

function BannerCount({ icon, counterNumber, text, suffix }) {
  return (
    <div className="max-w-[1084px]">
      <div className="grid grid-cols-[48px_1fr] items-center justify-center gap-4 p-5 bg-white md:h-25 lg:h-auto">
        <div>
          <img src={icon} alt={icon} />
        </div>
        <div>
          <h3 className="text-[24px] leading-[32px] text-[#252B42] font-bold">
            {
                <CountUp
                start={0}
                end={counterNumber}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                suffix={suffix}
               
              />
          }
          </h3>
          <p className="text-[14px] leading-[24px] text-[#737373] font-semibold uppercase">
            {text}
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default BannerCount;
