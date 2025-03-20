

function BannerCount
({icon, counterNumber, text}) {
  return (
    <div className="max-w-[1084px]">
      <div className="grid grid-cols-[48px_1fr] items-center justify-center gap-4 px-22 py-6 bg-white">
      <div>
        <img src={icon} alt={icon} />
      </div>
      <div>
        <h3 className="text-[24px] leading-[32px] text-[#252B42] font-bold">{counterNumber}</h3>
        <p className="text-[14px] leading-[24px] text-[#737373] font-semibold uppercase">{text}</p>
      </div>
    </div>
    </div>
  )
}

export default BannerCount
