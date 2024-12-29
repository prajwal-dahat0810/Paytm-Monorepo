export const Footer = () => {
  return (
    <div className="w-full text-[14px] h-full flex flex-col justify-center items-center ">
      <div className="flex  px-10 py-2 flex-col w-full h-full  md:sr-only ">
        <div className="py-2">Paytm</div>
        <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
          India(English)
        </div>
      </div>
      <div className="grid  py-2 w-full max-w-5xl px-3 grid-cols-4  max-sm:grid-cols-2 gap-3   ">
        <div className="px-4 max-sm:sr-only">Paytm</div>
        <div className="px-4 flex flex-col">
          <div className="font-bold py-2 text-[17px] font-helvitika">
            Product & pricing
          </div>{" "}
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Pricing
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Atlas
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Billing
          </div>
        </div>
        <div className="px-4 flex flex-col">
          <div className="font-bold py-2 text-[17px] font-helvitika">
            Solutions
          </div>{" "}
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Startups
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Enterprises
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            SaaS
          </div>
        </div>
        <div className="px-4 flex flex-col">
          <div className="font-bold py-2 text-[17px] font-helvitika">
            Resources
          </div>{" "}
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Guides
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Customer Guides
          </div>
          <div className="text-[14px] text-slate-700  tracking-wide font-helvitika">
            Blog
          </div>
        </div>
      </div>
      <div className="px-2 mt-2">© 2024 Paytm, Inc.</div>
    </div>
  );
};
