"use client";
import { Button } from "@repo/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@repo/ui/Skeleton";
import { addToAccount } from "../lib/actions/addToAccount";
function NetBanking() {
  const searchParams = useSearchParams();
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState<string>("success");
  const provider = searchParams.get("provider") || "";
  const amount = searchParams.get("amount") || 0;
  const router = useRouter();
  const token = searchParams.get("token") || "";
  useEffect(() => {
    if (openAlert === true) {
      setTimeout(() => {
        setOpenAlert(false);
        if (message !== "success") {
          router.push("/");
        } else router.push("/transactions");
        setMessage("");
      }, 5000);
    }
  }, [openAlert]);
  return (
    <div className="w-100vw  bg-slate-200 h-screen ">
      <div className=" flex items-center  justify-center text bg-white text-slate-800 text-2xl text-center h-28 border">
        Welcome to {provider} NetBanking
      </div>
      <div className="py-2 px-10  max-sm:px-3 mt-3 flex justify-center w-full   h-[500px] items-center  ">
        <div className=" border md:min-w-[1000px] max-sm:rounded-sm bg-white   py-5  px-6  h-full max-w-lg">
          <h3 className="text-3xl text-slate-600">Logged in</h3>
          <div className="pt-20">
            {!openAlert ? (
              <div className="w-full invisible bg-red-500 rounded-md py-1 text-white  text-center border">
                Round
              </div>
            ) : message !== "success" ? (
              <div className="w-full bg-red-500 rounded-md py-1 text-white  text-center border">
                Payment Failed try after some time
              </div>
            ) : (
              <div className="w-full bg-green-500 rounded-md py-1 text-white  text-center border">
                Payment Successful
              </div>
            )}
            <div className="text-center text-lg w-full">Proceed to Payment</div>
            <div className="text-center text-lg">Rs {amount}</div>
            <div className=" w-full flex items-center justify-center py-4 ">
              <Button
                className=" text-black hover:bg-black ring-1 text-xs rounded-md hover:ring-0"
                onClick={() => {
                  router.push("/");
                }}
              >
                Cancel
              </Button>
              <Button
                className=" bg-yellow-500 hover:bg-yellow-600 rounded-md text-xs"
                onClick={async () => {
                  const response = await addToAccount(
                    Number(amount) * 100,
                    provider,
                    token
                  );
                  setOpenAlert(true);
                  setMessage(response && response?.message);
                }}
              >
                Proceed
              </Button>
            </div>
          </div>
          <div className="bg-sky-100 mt-8  p-3">
            Welcome to the Payment page of {provider} NetBanking. Its lighter
            look and feel is designed to give you the best possible user
            experience. Please continue to Proceed using your customer ID and
            password.Your payment is deducted from your bank account.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function () {
  return (
    <Suspense fallback={<Skeleton />}>
      <NetBanking />
    </Suspense>
  );
}
