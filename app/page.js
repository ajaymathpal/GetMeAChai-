
export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
        <div className="font-bold text-5xl">Buy me a chai
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/pwbcwjje.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}>
            </lord-icon>
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-30"></div>

      <div className="text-white mx-auto container my-10">
        <h2 className="text-3xl font-bold text-center my-7">Your fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-white rounded-full p-4 text-black" width={88} src="https://media.lordicon.com/icons/wired/lineal/1846-employee-working.gif" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-white rounded-full p-4 text-black" width={88} src="https://media.lordicon.com/icons/wired/lineal/291-coin-dollar.gif" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-white rounded-full p-4 text-black" width={88} src="https://media.lordicon.com/icons/wired/lineal/2374-crowdfunding.gif" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-30"></div>

      <div className="text-white mx-auto container pb-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-7">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ax2t8KndS_c?si=hhi-70kO6pVmCiZH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </>
  );
}
