"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import cn from "../app/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    icon: React.ReactNode;
    btnContent: string;
    subTitle: string;
    description: string;
    content: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  // console.log(content && content.content);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints: any = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc: any, breakpoint: any, index: any) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "url('https://cdn.prod.website-files.com/607741b34e00b000cd15b926/613aa1afbac2c809c60744b2_Group%2021.png')",
    "url(https://assetscdn1.paytm.com/images/catalog/view_item/2701354/1727933098781.jpg)",
    "url(https://www.paypalobjects.com/marketing/web23/in/home/paypal-for-business-m3-4.png)",

    // "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    // "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    // "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    // "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className="h-[35rem]  overflow-y-auto no-scrollbar flex flex-row justify-center relative w-full space-x-10 rounded-md md:p-10 "
      ref={ref}
    >
      <div className="div   max-w-xl md:w-full w-auto relative flex items-start   ">
        <div className="px-4  w-full ">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className=" w-full max-sm:px-2  my-20 h-[27rem] "
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                <div className="flex justify-start items-center gap-2 flex-row">
                  <div className="">{item.icon}</div>{" "}
                  <div className="md:text-[15px] text-base text-[#2e3a55]">
                    {item.subTitle}
                  </div>
                </div>
                <div className=" text-[#0a2540] text-[30px] py-3 line-clamp-4 leading-10">
                  {item.title}
                </div>
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm my-3"
              >
                <div className="text-[#425466] text-[13px] font-[500]">
                  {item.description.slice(0, 100)}
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <button className=" max-w-fit bg-[#635bff] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className=" font-[500] relative text-[12px] flex space-x-2 items-center z-10 rounded-full   px-3 ring-1 ring-white/10 ">
                      <span>{item.btnContent}</span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                  <div></div>
                </div>
              </motion.p>
            </div>
          ))}

          <div className="h-40" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: backgroundGradient,
        }}
        className={`  ${cn(
          "hidden bg-contain bg-center lg:block bg-no-repeat h-full min-h-[35rem] w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}`}
      >
        {content !== null ? content[activeCard]?.content : null}
      </div>
    </motion.div>
  );
};
