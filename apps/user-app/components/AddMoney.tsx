"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { TextInput } from "@repo/ui/textInput";
import { Select } from "@repo/ui/Select";
import { createOnRampTransaction } from "../app/lib/actions/createOnRampTrasaction";
const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "http://localhost:3000/netbanking",
  },
  {
    name: "Axis Bank",
    redirectUrl: "http://localhost:3000/netbanking",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  return (
    <div className="border p-6 rounded-xl bg-[#ededed]">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={(value: any) => {
            setAmount(Number(value));
          }}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              const response = await createOnRampTransaction(
                amount * 100,
                provider
              );
              // console.log(txn);
              console.log(response);
              response.txn
                ? (window.location.href = `/netbanking?provider=${provider}&&amount=${amount}&&token=${response.txn && response.txn.token}`)
                : alert(response.message);
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </div>
  );
};
