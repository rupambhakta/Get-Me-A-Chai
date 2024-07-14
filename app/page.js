import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center text-white items-center h-[44vh] gap-4">
        <div className="font-bold text-3xl flex gap-2">Buy Me A Chai <span className="border rounded-full overflow-hidden"><img src="/tea.gif" width={45} alt="" /></span></div>
        <p>A crowdfunding platform for creatord. Get funded by your fans and followers.</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10">Rupam Bhkat</div>

      <div className="text-white container mx-auto py-10">
        <h1 className="text-2xl font-bold text-center my-5">Yours fans can buy you a chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-500 rounded-full p-0.5" src="/girl.png" width={88} alt="" />
            <p className="font-bold">Yours fans want to help</p>
            <p className="text-center">Your fans are avalable for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-500 rounded-full p-0.5" src="/coin.png" width={88} alt="" />
            <p className="font-bold">Yours fans want to help</p>
            <p className="text-center">Your fans are avalable for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-500 rounded-full p-0.5" src="/group2.png" width={88} alt="" />
            <p className="font-bold">Yours fans want to help</p>
            <p className="text-center">Your fans are avalable for you to help</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">Rupam Bhkat</div>

      <div className="text-white container mx-auto py-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center my-5">Learn more about us</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mO5yp1Z73yk?si=HvUyUODONBICDrLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
