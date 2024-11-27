export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    // TODO: Can the type of `status` be more specific?
    status: string;
    provider: string;
  }[];
}) => {
  return (
    <div className="border p-6  rounded-xl bg-[#ededed]">
      <div>Recent Transactions</div>
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex   justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex  flex-row gap-3 justify-start items-center">
              <div>
                <span className="text-green-800 font-bold pr-1">+</span> Rs{" "}
              </div>
              <div>{t.amount / 100}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
