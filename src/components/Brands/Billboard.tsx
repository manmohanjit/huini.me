const Billboard = ({image, brand, title, color, href, children}) => {
  return (
    <div className="container mx-auto px-4 py-16">

      <a href={href} target="_blank">
        <img src={image} alt={brand} title={brand} className="w-40 h-auto mx-auto mb-4"/>
        <span className="block uppercase text-center font-bold mb-10" style={{color}}>{brand}</span>
      </a>

      <h4 className="text-4xl md:text-6xl font-bold text-center">{title}</h4>

      {children && (
        <div className="mt-6 text-center">{children}</div>
      )}

    </div>
  )
}

export default Billboard;