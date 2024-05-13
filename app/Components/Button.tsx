import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="active:opacity-70 hover:opacity-80 px-4 font-bold rounded-md py-6 text-white bg-orange-600"
      {...props}
    />
  );
}
