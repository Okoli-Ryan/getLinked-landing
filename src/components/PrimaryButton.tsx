import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function PrimaryButton({ className = "", ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
	return <button className={`bg-primarybg text-white w-max py-4 px-8 rounded-[4px] ${className}`} {...props} />;
}
