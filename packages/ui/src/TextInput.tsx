"use client";

export const TextInput = ({
  placeholder,
  onChange,
  label,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
}) => {
  return (
    <div className="pt-2">
      <label className="block mb-2 text-[13px] font-medium text-gray-900">
        {label}
      </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        id="first_name"
        className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2"
        placeholder={placeholder}
      />
    </div>
  );
};
