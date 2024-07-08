const VideoTitle = ({title,overview}) => {

  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold text-white mt-[30%] md:mt-0">{title}</h1>
      <p className="hidden md:inline-block w-1/3 py-6 text-white text-lg font-medium text-justify">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="hidden md:inline-block bg-white text-black text-lg rounded-lg px-1 py-1 md:p-2 mr-4 w-[80px] hover:bg-opacity-80">Play</button>
        <button className="hidden md:inline-block bg-gray-400 text-white text-lg  rounded-lg p-2 mr-4 w-[100px] bg-opacity-50 hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
