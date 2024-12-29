"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export default function () {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

      setOpen(false);
      if (message === "success")
        signIn("Credentials", {
          redirect: false,
          number: number,
          password: password,
          callbackUrl: "http://localhost:3000/",
        });
      setMessage("");
    }, 5000);
  }, [open]);
  async function handleSignup() {
    setLoading(true);
    if (email === "" && password === "") {
      setLoading(false);
      setMessage("Enter valid credentials");
      setOpen(true);
      return;
    }
    try {
      // const response = await axios.post(`/api/signup`, {
      //   name: name,
      //   email: email,
      //   password: password,
      //   number: String(number),
      // });
      // const data = await response.data;
      // if (data.message === "success") {
      //   setLoading(false);
      //   setMessage(data.message);
      //   setOpen(true);
      // } else {
      //   setLoading(false);
      //   setMessage(data.message);
      //   setOpen(true);
      // }
    } catch (e: any) {
      setLoading(false);
      console.log("error");
      setMessage(e);
      setOpen(true);
    }
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[300px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-4">
            <div className="text-[12px]">
              {!open ? (
                <div className="invisible w-full bg-red-500 rounded-md py-1 text-white  text-center border">
                  Create an account
                </div>
              ) : message === "success" ? (
                <div className="w-full bg-green-500 rounded-md py-1 font-normal text-white  text-center border">
                  User created Successfully,kindly login
                </div>
              ) : (
                <div className="w-full  bg-red-500 rounded-md py-1 text-white  text-center border">
                  {message}
                </div>
              )}
            </div>{" "}
            <h1 className="text-start text-[18px] font-[640] leading-tight tracking-tight text-[#3C4256] md:text-2xl dark:text-white">
              Create an account
            </h1>
            <div className="flex  gap-3">
              <div>
                <div className="block text-[12px] max-sm:my-3 font-[400] text-gray-900 dark:text-white">
                  Name
                </div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-[13px]  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <div className="block text-[12px] max-sm:my-3 font-[400] text-gray-900 dark:text-white">
                  Email*
                </div>
                <input
                  onChange={(e: any) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@gmail.com"
                  className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-[13px]  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <div className="block text-[12px] max-sm:my-3 font-[400] text-gray-900 dark:text-white">
                Number*
              </div>
              <input
                minLength={10}
                maxLength={10}
                onChange={(e) => setNumber(e.target.valueAsNumber)}
                placeholder="7865442342"
                type="number"
                className="bg-gray-50 border mt-2 px-2 border-gray-300 text-gray-900 text-[13px]  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <div className="block text-[12px] max-sm:my-3 font-[400] text-gray-900 dark:text-white">
                Password
              </div>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="bg-gray-50 px-2 border mt-2 border-gray-300 text-gray-900 text-[13px]  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              onClick={handleSignup}
              className="w-full bg-black text-white bg-primary-600  font-medium rounded-lg text-[12px] px-5 py-1.5 max-sm:my-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "Create an account"
              )}
            </button>
            <p className="text-[12px] font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link href="/signin">
                <span className="pl-1text-[12px] text-gray-700 cursor-pointer font-bold">
                  Signin here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
