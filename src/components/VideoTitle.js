const VideoTitle = ({title,overview}) => {

  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className=" w-1/3 py-6 text-white text-lg font-medium text-justify">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-lg  rounded-lg p-2 mr-4 w-[80px] hover:bg-opacity-80">Play</button>
        <button className="bg-gray-400 text-white text-lg  rounded-lg p-2 mr-4 w-[100px] bg-opacity-50 hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
