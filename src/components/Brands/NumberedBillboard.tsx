const NumberedBillboard = ({color, number, title, subtitle, image, children}) => {
  return (
    <div className="my-28 bg-no-repeat bg-[25%_auto] lg:bg-[25%_auto] bg-[right_8rem] md:bg-right-top"
         style={{backgroundImage: "url(" + image + ")"}}>
      <div className="container mx-auto px-4">
        <div className=" w-3/4 lg:w-2/3">
          <h5 className="text-[40px] md:text-[70px] leading-[0.5]" style={{color}}>{number}</h5>
          <h3 className="text-[50px] md:text-[80px] leading-[0.8] font-bold mb-8">{title}</h3>
          <p>{subtitle}</p>
        </div>

        {children && (
          <div className="mt-12">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}


export default NumberedBillboard;