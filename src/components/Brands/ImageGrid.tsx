const ImageGrid = ({items, size = "lg"}) => (
  <div className={`flex flex-wrap items-center justify-center gap-8`}>
    {items.map(({image, engagement, href}) => (
      <div key={image} className={`max-w-[calc(50%-1.5rem)] ${size !== "xl" ? "md:max-w-[calc(25%-1.5rem)]" : "md:max-w-[calc(33%-1.5rem)]"}`}>
        {href ? (
          <a href={href} target="_blank">
            <img
              className="w-full h-auto"
              src={image}
              alt=""
            />
          </a>
        ) : (
          <img
            className="w-full h-auto"
            src={image}
            alt=""
          />
        )}

        {engagement && (
          <div className="mt-4 flex items-center gap-5">
          {engagement?.[0] >= 0 && (
              <div className="flex items-center gap-2">
                <img src="/images/work/icons/like.png" alt="Like" className="h-4 w-auto"/>
                <span className="text-xs text-gray-600">{engagement[0]}</span>
              </div>
            )}
            {engagement?.[1] >= 0 && (
              <div className="flex items-center gap-2">
                <img src="/images/work/icons/comment.png" alt="Comment" className="h-4 w-auto"/>
                <span className="text-xs text-gray-600">{engagement[1]}</span>
              </div>
            )}
            {engagement?.[2] >= 0 && (
              <div className="flex items-center gap-2">
                <img src="/images/work/icons/share.png" alt="Share" className="h-4 w-auto"/>
                <span className="text-xs text-gray-600">{engagement[2]}</span>
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
)

export default ImageGrid;