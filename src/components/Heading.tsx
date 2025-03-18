export default function Heading({title, subtitle, className, container = true, center = true}) {
  return (
    <div className={`${container ? "container mx-auto px-4" : ""} ${center ? "text-center" : ""} ${className || ""}`}>
      <h3 className="block text-4xl md:text-5xl font-bold mb-2">{title}</h3>
      {subtitle && <p className="block text-gray-700">{subtitle}</p>}
    </div>
  )
}