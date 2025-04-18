
function SectionHead({title,discription}) {
  return (
    <div className="px-[150px]">
      <h2 className="text-5xl leading-[57px] font-bold text-center py-[15px] text-text-color">{title}</h2>
      <p className="text-[14px] leading-[20px] font-medium text-second-text-color text-center">{discription}</p>
    </div>
  )
}

export default SectionHead