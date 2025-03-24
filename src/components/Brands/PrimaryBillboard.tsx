const PrimaryBillboard = ({title, subtitle, image, children, note}) => {
  return (
    <div className="relative my-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="order-1 md:order-0 md:w-2/3 mt-12 md:mt-0">
            <h5 className="uppercase tracking-tight text-gray-500 text-base font-light">{subtitle}</h5>
            <h3 className="text-5xl md:text-7xl font-normal">{title}</h3>

            <div className="mt-4">
              {children}
            </div>
          </div>

          <div className="order-0 md:order-1 md:absolute md:w-1/3 right-0 -mx-4 md:mx-0">
            <img
              src={image}
              alt="Extended Image"
              className="w-full h-auto right-0"
            />
          </div>
        </div>

        {note && (
          <p className="text-center mt-6 md:mt-12 text-gray-500 text-xs italic">{note}</p>
        )}
      </div>
    </div>
  )
}


export default PrimaryBillboard;