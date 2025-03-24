const MasonryLayout = ({title, items, reverse = false}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="lg:flex lg:gap-4 relative">
        <div className={`lg:w-3/12 ${reverse ? "lg:order-1" : ""}`}>
          <h3 className={`font-bold text-2xl text-neutral-600 lg:text-4xl mb-6 text-center ${reverse ? "lg:text-left" : "lg:text-right"} sticky top-4`}>{title}</h3>
        </div>
        <div className={`lg:w-9/12 ${reverse ? "lg:order-0" : ""}`}>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {items.map(({image, video, aspectRatio}) => (
              <div className="shadow-lg" key={image ?? video}>
                {video ? (
                  <iframe loading="lazy" title="sk post 6"
                          src={video}
                          frameBorder="0"
                          className={`${aspectRatio || "aspect-[9/16]"} w-full h-auto`}
                          allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"></iframe>
                ) : (
                  <img src={image} alt=""/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasonryLayout;