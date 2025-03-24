export default function Quote() {
  return (
    <div className="px-4 lg:px-0 text-center  bg-stone-100">
      <div className="container max-w-screen-lg mx-auto py-8 md:py-12">
        <div className="text-2xl/[1.5] md:text-5xl/[1.5] font-bold tracking-wide">
          <p className="mb-2">Without <span
            className="border-dashed border-gray-500 border-4 px-2 pb-2 hover:cursor-pointer relative">strategy,<span
            className="absolute text-[60%] -bottom-[50%] right-[20%]">👆</span></span></p>
          <p><span className="bg-blue-500 text-white rounded-full px-4 py-1 relative z-20">content<span
            className="absolute z-10 right-6 bottom-[2px] h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-blue-500"></span></span> is
            just <span className="text-rose-400 italic">stuff</span>,
          </p>
          <p>and the world 🌎 has <span className="bg-yellow-200">enough stuff.</span></p>
        </div>
        <p className="mt-8 md:mt-16 italic">- ARJUN BASU</p>
      </div>
    </div>
  )
}