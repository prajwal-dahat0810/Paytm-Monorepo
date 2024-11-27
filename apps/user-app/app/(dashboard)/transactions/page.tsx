import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

export default async function () {
  const session = await getServerSession(authOptions);
  try {
    var txns = await prisma.onRampTransaction.findMany({
      where: {
        userId: Number(session?.user?.id),
      },
    });
    var transactions = txns
      .map((t: any) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
      }))
      .slice(0, 10);
  } catch (e) {
    console.log(e);
    transactions = [];
  }
  return (
    <div className="w-screen bg-[#fffcf8] pt-20 max-sm:px-1">
      <div className="text-4xl pl-3 text-[#6a51a6] pt-8 mb-8 font-bold">
        Transactions
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div className="flex  justify-evenly w-2/12">
          <button className="    font-medium text-sm px-5 py-2.5 me-2 mb-2 bg-slate-300 hover:bg-slate-50 text-black rounded-xl ">
            History
          </button>
          <button className="  font-medium  text-sm px-5 py-2.5 me-2 mb-2 bg-slate-50 hover:bg-slate-50 text-black rounded-xl ">
            Scheduled
          </button>
        </div>
      </div>
      <div className=" grid grid-rows-2 max-sm:px-1   grid-cols-1 gap-x-10 gap-y-5 p-6  min-h-[520px] ">
        <div className="bg-white  p-6 rounded-3xl shadow-lg md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 shadow-slate-300">
          <div className="mb-6 pt-4 ">
            <p className="text-gray-800 font-bold text-lg">Transactions</p>
          </div>
          {transactions.length === 0 ? (
            <div className="flex w-full h-full justify-center items-start pt-16">
              Data not available now{" "}
            </div>
          ) : (
            <div className="pb-5">
              {transactions.length &&
                transactions.map((t) => (
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 bg-blue-500 text-white rounded-full"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        {" "}
                        <div className="text-md md: font-bold max-sm:text-base">
                          Received INR
                        </div>
                        <div className="text-slate-600 md:text-sm max-sm:text-xs">
                          {t.time.toDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center">
                      <span className="text-green-800 font-bold pr-1">+</span>{" "}
                      {t.amount / 100} Rs{" "}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
