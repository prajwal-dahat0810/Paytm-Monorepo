import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";

export default async function () {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-screen  pt-20 max-sm:px-1">
      <div className="text-4xl pl-4 max-sm:text-xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Account
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div className="flex  gap-4 justify-evenly w-2/12">
          <button className="    font-medium text-sm px-5 py-2.5 me-2 mb-2 bg-slate-300  text-black rounded-xl ">
            Setting
          </button>
          <button className="  font-medium  text-sm px-5 py-2.5 me-2 mb-2 bg-slate-100  text-black rounded-xl ">
            Security
          </button>
        </div>
      </div>
      <div className=" grid grid-rows-2 max-sm:px-1  border grid-cols-1 gap-x-10 gap-y-5 p-6 max-sm:p-1 min-h-[320px] ">
        <div className="bg-white  p-6 max-sm:px-2 rounded-3xl shadow-lg md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 shadow-slate-300">
          <div className="mb-6">
            <div className="text-gray-600 font-bold text-lg max-sm:text-base">
              Personal info
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
              <div className="flex md:gap-32 sm:gap-6 max-sm:gap-4 items-center flex-row">
                <div className="text-slate-400 text-base/[17px] font-bold max-sm:font-light">
                  Public ID
                </div>
                <div className="text-slate-500 text-sm/[17px] font-bold max-sm:font-normal">
                  {session.user.id != null ? session.user.id : "---"}
                </div>
              </div>
              <div className="text-purple-600 cursor-pointer font-bold max-sm:font-normal text-md/[11px]">
                Edit
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex md:gap-24 sm:gap-6 max-sm:gap-4 items-center flex-row">
                <div className="text-slate-400 text-base/[17px] font-bold max-sm:font-light">
                  Legal Name
                </div>
                <div className="text-slate-500 text-sm/[17px] font-bold max-sm:font-normal">
                  {session.user.name != null ? session.user.name : "Anonymous"}
                </div>
              </div>
              <div className="cursor-pointer text-purple-600 font-bold max-sm:font-normal text-md/[11px]">
                Edit
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex md:gap-36 sm:gap-6 max-sm:gap-4 items-center flex-row">
                <div className="text-slate-400 text-base/[17px] font-bold max-sm:font-light">
                  Email
                </div>
                <div className="text-slate-500 text-sm/[17px] font-bold max-sm:font-normal">
                  {session.user.email != null ? session.user.email : "---"}
                </div>
              </div>
              <div className="cursor-pointer text-purple-600 font-bold max-sm:font-normal text-md/[11px]">
                Edit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
