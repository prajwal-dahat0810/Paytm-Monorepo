import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoney";
import { BalanceCard } from "../../../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
export async function getBalance() {
  const session = await getServerSession(authOptions);
  console.log(session.user.id);
  try {
    const balance = await prisma.balance.findFirst({
      where: {
        userId: Number(session?.user?.id),
      },
    });
    return {
      amount: balance?.amount || 0,
      locked: balance?.locked || 0,
    };
  } catch (e) {
    console.log(e);
    return {
      amount: -1,
      locked: 0,
    };
  }
}

export async function getOnRampTransactions() {
  try {
    const session = await getServerSession(authOptions);
    var txns = await prisma.onRampTransaction.findMany({
      where: {
        userId: Number(session?.user?.id),
      },
    });

    return txns
      .map((t: any) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
      }))
      .slice(0, 5);
  } catch (e) {
    console.log("error", e);
    return (txns = []);
  }
}

export default async function () {
  const balance = await getBalance();

  const transactions = await getOnRampTransactions();

  return (
    <div className="w-screen bg-[#fffcf8] pt-20">
      <div className="text-[32px] pl-4 text-[#6a51a6] pt-8   mb-8 font-bold">
        Transfer
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <AddMoney />
        </div>
        <div>
          <div className="pt-4">
            {balance.amount === -1 ? (
              <div className="border p-6 rounded-xl bg-[#ededed]">
                <div>Balance</div>
                <div className="text-center pb-8 pt-8">Data not available</div>
              </div>
            ) : (
              <BalanceCard amount={balance.amount} locked={balance.locked} />
            )}
          </div>
          <div className="pt-4">
            {transactions.length === 0 ? (
              <div className="border p-6 rounded-xl bg-[#ededed]">
                <div>Recent Transactions</div>
                <div className="text-center pb-8 pt-8">
                  No Recent transactions
                </div>
              </div>
            ) : (
              <OnRampTransactions transactions={transactions && transactions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
