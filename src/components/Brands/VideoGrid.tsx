const VideoGrid = ({items, size = "lg", className = ""}) => (
  <div className={`flex flex-wrap items-center justify-center gap-8 ${className}`}>
    {items.map(({key, video, text}) => (
      <div key={key} className={`max-w-[calc(50%-1.5rem)] ${size !== "xl" ? "md:max-w-[calc(25%-1.5rem)]" : "md:max-w-[calc(33%-1.5rem)]"}`}>
        {video}
        {text && (
          <p className="mt-2 text-center">{text}</p>
        )}
      </div>
    ))}
  </div>
)

export default VideoGrid;