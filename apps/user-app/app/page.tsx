import { Heading } from "../../../packages/ui/src/Heading";
import { authOptions } from "./lib/auth";
import { getServerSession } from "next-auth";
import { getBalance } from "./(dashboard)/transfer/page";
import { redirect } from "next/navigation";
import { SidebarItem } from "../components/SidebarItem";
import {
  HomeIcon,
  P2pTransferIcon,
  SearchIcon,
  TransactionsIcon,
  TransferIcon,
} from "./(dashboard)/layout";
import { AppbarClient } from "../components/AppbarClient";
import prisma from "@repo/db/client";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session === null) redirect("/in");
  // if (session === null) redirect("/api/auth/signin");
  const balance = await getBalance();

  try {
    var txns = await prisma.onRampTransaction.findMany({
      where: {
        userId: Number(session?.user?.id),
        status: "Processing",
      },
    });
    var transactions: any = txns
      .map((t: any) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
        token: t.token,
      }))
      .slice(0, 5);
  } catch (e) {
    transactions = null;
  }
  return (
    <div className="pt-16 w-full  bg-[#fffcf8] h-full">
      <AppbarClient />
      <div className="flex flex-row gap-0">
        <div className="w-72 max-sm:sr-only border-r border-slate-300 min-h-[747px]  pt-16">
          <div className="text-[14px] ">
            <SidebarItem href={"/"} icon={<HomeIcon />} title="Home" />
            <SidebarItem href={"/"} icon={<SearchIcon />} title="Explore" />
            <SidebarItem
              href={"/transfer"}
              icon={<TransferIcon />}
              title="Transfer"
            />
            <SidebarItem
              href={"/transactions"}
              icon={<TransactionsIcon />}
              title="Transactions"
            />
            <SidebarItem
              href={"/p2p"}
              icon={<P2pTransferIcon />}
              title="P2P Transfer"
            />
          </div>
        </div>
        <div className=" flex gap-2 flex-col  w-full  ">
          <div className=" w-full p-6 ">
            <Heading
              title={
                session.user.name
                  ? `Hi, ${session.user.name} `
                  : "Hi, Anonymous"
              }
            />
          </div>
          {/*  */}
          <div className="px-5 max-sm:px-1 ">
            <div className="bg-white p-6 text-[14px]  rounded-lg shadow-lg  shadow-slate-300">
              <div className="mb-6">
                <p className="text-gray-500">Balance</p>
                <p className="text-3xl font-bold mt-2">
                  Rs <span>{balance.amount / 100}</span>
                </p>
              </div>

              {/* Timeline Chart (Placeholder) */}
              <div className="border-b my-6">
                <div className="text-[15px] pb-3 font-[600] max-sm:text-base text-slate-500">
                  Incomplete Transactions
                </div>
                <div className="h-72 bg-purple-50 px-5 pb-3 md:pt-7 max-sm:pt-3 text-slate-500">
                  {transactions === null ? (
                    <div className="flex w-full h-full justify-center items-start pt-16">
                      Data not available now{" "}
                    </div>
                  ) : transactions.length === 0 ? (
                    <div className="flex w-full font-bold h-full justify-center items-start pt-16">
                      No Incomplete Transaction
                    </div>
                  ) : (
                    <div>
                      <div className="pb-5 max-sm:sr-only">
                        {transactions.length &&
                          transactions.map((t: any) => (
                            <div className="flex justify-between py-5 ">
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
                                  <div className="text-md md: font-bold text-black max-sm:text-base">
                                    Received INR
                                  </div>
                                  <div className="text-slate-600 md:text-sm max-sm:text-xs">
                                    {t.time.toDateString()}
                                  </div>
                                </div>
                              </div>
                              <div className="flex  flex-row justify-center items-center">
                                <span className="text-green-800 font-bold pr-1">
                                  +
                                </span>{" "}
                                {t.amount / 100} Rs{" "}
                              </div>
                              <div className="flex md:flex-row sm:flex-col  gap-2 flex-row justify-center">
                                <button className="px-3 bg-red-500 text-white font-medium rounded-lg text-sm py-2 h-fit">
                                  Cancel
                                </button>
                                <Link
                                  href={`/netbanking?provider=${t.provider}&&amount=${t.amount / 100}&&token=${t && t.token}`}
                                >
                                  <button className=" bg-black text-white font-medium rounded-lg text-sm px-3  py-2 h-fit ">
                                    Proceed
                                  </button>
                                </Link>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="pb-5 sr-only max-sm:not-sr-only">
                        {transactions.length &&
                          transactions.map((t: any) => (
                            <Link
                              href={`/netbanking?provider=${t.provider}&&amount=${t.amount / 100}&&token=${t && t.token}`}
                            >
                              <div className=" flex justify-between py-5 ">
                                <div className="flex flex-row gap-2 items-center">
                                  <div className="max-sm:sr-only">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="h-3 w-3 bg-blue-500 text-white rounded-full"
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
                                    <div className=" text-black text-sm">
                                      Received INR
                                    </div>
                                    <div className="text-slate-600 text-xs">
                                      {t.time.toDateString()}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex  flex-row justify-center items-center">
                                  <span className="text-green-800 font-bold pr-1">
                                    +
                                  </span>{" "}
                                  {t.amount / 100} Rs{" "}
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
