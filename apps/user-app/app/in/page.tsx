"use client";
import React from "react";
import { MobileComponent } from "../../components/MobileComponent";
import { StickyScroll } from "../../components/StickyScroll";
import { ShowCard } from "../../components/ShowCard";
import { Footer } from "../../components/Footer";
import Link from "next/link";
export default function () {
  return (
    <div className="w-full pb-2 relative">
      {/* Wrapper with overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden max-h-screen ">
        {/* Tilted Gradient Background */}
        <div className="absolute -top-1/2 -left-1/4 w-[200%]  h-[100%]  sat-bv  bg-gradient-to-r from-[#9c50e3] via-[#f0454d]  to-[#2838e6]    opacity-100 -rotate-12"></div>
      </div>
      <section className="sticky">
        <div className="  flex justify-center  py-0 min-h-14 px-6 mx-0 my-auto">
          <div className="flex min-h-14 gap-x-4 justify-between items-center py-4 px-6 w-full">
            {/* Logo */}
            <div
              onClick={() => {
                window.location.href = "/in";
              }}
              className="cursor-pointer font-roboto font-bold text-xl text-white"
            >
              Paytm
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex shrink-0">
              <ul className="flex cursor-pointer font-[500] text-[.9rem]  text-white items-center gap-x-10">
                <li className="cursor-pointer">Products</li>
                <li>Solutions</li>
                <li>Developers</li>
                <li>Resources</li>
                <li>Pricing</li>
              </ul>
            </div>

            {/* Sign-in Button */}
            <div className="hidden lg:flex gap-x-4 justify-end items-center">
              <Link href={"/api/auth/signin"}>
                <button className="text-white  font-[500] text-[.9rem] ">
                  Sign in
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <button className="lg:hidden flex  items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 font-bold"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="relative  my-10  overflow-hidden ">
        <div className="flex  items-center justify-center   ">
          <div className=" max-w-[1080px] h-auto w-full ">
            <div className=" grid-cols-2 p-3 grid gap-2   max-sm:grid-cols-1 ">
              <div className="z-10 relative flex flex-col px-8 max-sm:px-1     ">
                <h2 className="bg-clip-text text-[#3a3a3a]  w-full md:leading-[70px]  lg:left-10  lg:mt-0 lg:font-bold lg:text-[57px] md:text-[60px] max-sm:left-0 pl-3  text-start tracking-wide text-transparent  bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-3xl lg:text-5xl py-2 md:py-10 relative z-20 font-[500] max-sm:tracking-wide font-helvitika ">
                  Financial infrastructure to grow your revenue
                </h2>
                <div className="text-[#35506d] font-helvitika lg:px-10 lg:left-10 text-[18px] px-4 w-full">
                  Join the millions of companies of all sizes that use Stripe to
                  accept payments online and in person, embed financial
                  services, power custom revenue models, and build a more
                  profitable business.
                </div>
                {/* <button className="">Request an invite</button> */}
                <button className="mt-10 ml-5  lg:left-10  bg-slate-800 max-w-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    Request an invite
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
              <div className="left-40 relative  max-sm:sr-only ">
                <MobileComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full   bg-white">
        {" "}
        <StickyScroll content={content} contentClassName="" />
      </section>
      <section className="relative bg-[#f7f7ff]  text-[15px]  my-10  overflow-hidden ">
        <div className="flex flex-col items-center justify-center pt-20 gap-10  px-6 max-sm:px-3 ">
          <div className="flex flex-col gap-2  w-full max-w-4xl px-3 py-2 items-start justify-between">
            <div className="font-[500] text-[16px] text-[#635bff]">
              Build for Growth
            </div>
            <div className="text-[#0a2540] font-bold font-helvitika text-[30px]">
              Take your startup farther, faster
            </div>
            <div className="py-5 text-[16px] tracking-tight font-helvitika text-[#425466] max-w-xl font-[510]">
              Startups build on Stripe to launch faster, adapt as they grow, and
              automate workflows to do more with less. Build your own API-based
              integration or use our low- to no-code solutions, which are simple
              enough for easy implementation and powerful enough to scale as
              fast and as far as you need.
            </div>
          </div>
          <div className="grid  max-w-4xl gap-5 w-full lg:grid-cols-3 md:grid-cols-2 grid-rows-1  max-sm:grid-cols-1 h-full mb-10">
            <ShowCard
              image={
                "https://images.stripeassets.com/fzn2n1nzq965/wEsTNDVgdEqaPAKkFdqnL/c69e1649432f1b772d86d81e423b7e3e/buttons.svg?q=80"
              }
              title={"Use a pre-integrated platform"}
              description={
                "Explore our directory to find out-of-the-box solutions that connect with Stripe, such as Squarespace and Lightspeed."
              }
            ></ShowCard>
            <ShowCard
              image={
                "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80"
              }
              title={"Build with Stripe-certified experts"}
              description={
                "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you."
              }
            ></ShowCard>
            <ShowCard
              image={
                "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80"
              }
              title={"Try our no-code products"}
              description={
                "Create an invoice, accept an in-person payment with your phone, or share a payment link directly from your Dashboard to start generating revenue in minutes – no code required."
              }
            ></ShowCard>
          </div>
        </div>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}
const content = [
  {
    subTitle: "Payments",
    btnContent: "Start with Payments",
    title: "Accept and optimize payments, globally",
    description:
      "Support recurring business models, minimize churn, and automate finance operations.",
    content: null,
    icon: (
      <svg
        className=""
        width={"20"}
        height={"20"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Payments</title>

        <path
          d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
          fill="url(#product-icon-payments-PaymentsSection-a)"
        ></path>
        <path
          d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
          fill="#96F"
        ></path>
        <path
          d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
          fill="url(#product-icon-payments-PaymentsSection-b)"
        ></path>
        <defs>
          <linearGradient
            id="product-icon-payments-PaymentsSection-a"
            x1="20"
            y1="4.13"
            x2="20"
            y2="21.13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#11EFE3"></stop>
            <stop offset="1" stop-color="#21CFE0"></stop>
          </linearGradient>
          <linearGradient
            id="product-icon-payments-PaymentsSection-b"
            x1="35"
            y1="11.28"
            x2="35"
            y2="28.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0048E5"></stop>
            <stop offset="1" stop-color="#9B66FF"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    subTitle: "Billing",
    btnContent: "Start with Billing",
    title: "Capture recurring revenue",
    description:
      "Support recurring business models, minimise churn, and automate finance operations.",
    content: null,
    icon: (
      <svg
        width={"20"}
        height={"20"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Billing</title>

        <path
          d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
          fill="url(#product-icon-billing-BillingSection-a)"
        ></path>
        <path
          d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z"
          fill="#00D924"
        ></path>
        <path
          d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z"
          fill="url(#product-icon-billing-BillingSection-b)"
        ></path>
        <defs>
          <linearGradient
            id="product-icon-billing-BillingSection-a"
            x1="13"
            y1="6.35"
            x2="13"
            y2="35.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFD748"></stop>
            <stop offset="1" stop-color="#FFC148"></stop>
          </linearGradient>
          <linearGradient
            id="product-icon-billing-BillingSection-b"
            x1="19.5"
            y1="12.01"
            x2="19.5"
            y2="30.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A600"></stop>
            <stop offset="1" stop-color="#00D924"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    subTitle: "Connect",
    btnContent: "Start with Connect",
    title: "Set up multi-party payments and payouts",
    description:
      "Integrate payments into your platform or marketplace for end-to-end payments experiences.",
    content: (
      <svg className="left-20 top-7 w-7 h-24" height={87}>
        <defs>
          <linearGradient
            className="RotatingGradient"
            id="HomepageFrontdoorBillingAnimation-Sticky-BillingConnectionGradient"
            gradientUnits="userSpaceOnUse"
            data-js-controller="RotatingGradient"
            data-js-start-rotation=""
            data-js-speed=""
            x1="21.392706327792727"
            x2="78.6072936722115"
            y1="91.00759379373642"
            y2="8.992406206266523"
          >
            <stop offset="0" stop-color="#ffd848"></stop>

            <stop offset="1" stop-color="#00d924"></stop>
          </linearGradient>
        </defs>

        <path
          stroke="url(#HomepageFrontdoorBillingAnimation-Sticky-BillingConnectionGradient)"
          stroke-width="2"
          fill="none"
          data-js-target="HomepageFrontdoorConnection.path"
          d="M1,1
                L200.969970703125,1
                Q220.969970703125,1
                220.969970703125,21
                L220.969970703125,86.38124942779541"
        ></path>
      </svg>
    ),
    icon: (
      <svg
        width={"20"}
        height={"20"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Connect</title>

        <path
          d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
          fill="url(#product-icon-connect-ConnectSection-a)"
        ></path>
        <path
          d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
          fill="#0073E6"
        ></path>
        <path
          d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
          fill="url(#product-icon-connect-ConnectSection-b)"
        ></path>
        <defs>
          <linearGradient
            id="product-icon-connect-ConnectSection-a"
            x1="13"
            y1="1.71"
            x2="13"
            y2="15.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#11EFE3"></stop>
            <stop offset=".33" stop-color="#15E8E2"></stop>
            <stop offset=".74" stop-color="#1FD3E0"></stop>
            <stop offset="1" stop-color="#21CFE0"></stop>
          </linearGradient>
          <linearGradient
            id="product-icon-connect-ConnectSection-b"
            x1="20"
            y1="15.72"
            x2="20"
            y2="27.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00299C"></stop>
            <stop offset="1" stop-color="#0073E6"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    subTitle: "Issuing",
    btnContent: "Start with Billing",
    title: "Build a FinTech offering with banking-as-a-service",
    description:
      "Launch, manage, and scale a commercial card programme without any setup fees.",
    content: "",
    icon: (
      <svg
        className=""
        width={"20"}
        height={"20"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Issuing</title>

        <path
          d="M7.62 26.48l-.02-.03a2.44 2.44 0 0 1-.7-1.48 2.49 2.49 0 0 1 .11-1.05c.05-.28.13-.54.24-.77l.08-.17L14.67 10h21.85A2.52 2.52 0 0 1 39 12.37l.01.16v22.92A2.52 2.52 0 0 1 36.67 38l-.16.01H19a2.5 2.5 0 0 0 .64-1.97c-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1v-.01l.14.1a2.52 2.52 0 0 1-.27-.21l-.03-.03z"
          fill="url(#product-icon-issuing-IssuingSection-a)"
        ></path>
        <path
          d="M22.05 2.1c.7-.15 1.41 0 1.99.41l6.56 4.72a2.5 2.5 0 0 1 .92 2.8V10l-8.5 26-.05.2-.03.08-.03.09-.15.32-.02.04-.19.29-.03.04a2.9 2.9 0 0 1-.23.25l-.03.02a2.24 2.24 0 0 1-.58.4l-.03.03c-.1.05-.2.1-.31.13h-.05l-.33.08h-.05a2.3 2.3 0 0 1-.36.03H3.53A2.53 2.53 0 0 1 1 35.45v-22.9C1 11.14 2.13 10 3.53 10H16.6l3.8-6.7a2.5 2.5 0 0 1 1.46-1.15l.18-.05z"
          fill="#0073E6"
        ></path>
        <path
          d="M31.38 10l-8.37 26-.02.1-.02.1-.03.08-.03.09-.07.16-.08.16-.02.04-.1.15-.09.14-.03.04-.11.13-.12.12-.03.02c-.08.09-.17.16-.26.23l-.15.1-.17.08-.03.02-.15.07-.16.06h-.05l-.16.05-.1.01.1-.1c.4-.51.59-1.17.51-1.82-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1a2.54 2.54 0 0 1-.26-.26l-.04-.05a2.48 2.48 0 0 1-.12-.14l-.02-.04-.03-.04a2.43 2.43 0 0 1-.17-.3l-.03-.06a2.5 2.5 0 0 1-.15-.42l-.01-.07-.02-.1-.01-.06a2.51 2.51 0 0 1 .05-1.01l.02-.09a2.5 2.5 0 0 1 .04-.1c.03-.25.1-.5.21-.74l.1-.17L16.66 10h14.71z"
          fill="url(#product-icon-issuing-IssuingSection-b)"
        ></path>
        <defs>
          <linearGradient
            id="product-icon-issuing-IssuingSection-a"
            x1="22.92"
            y1="11.68"
            x2="22.92"
            y2="39.68"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".1" stop-color="#FF80FF"></stop>
            <stop offset=".39" stop-color="#FF7BF9"></stop>
            <stop offset=".77" stop-color="#FF6EEA"></stop>
            <stop offset="1" stop-color="#FF62DC"></stop>
          </linearGradient>
          <linearGradient
            id="product-icon-issuing-IssuingSection-b"
            x1="31.38"
            y1="27.93"
            x2="11.62"
            y2="27.93"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0073E6"></stop>
            <stop offset="1" stop-color="#00299C"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
