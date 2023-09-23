import Link from "next/link";
import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
	return (
		<Link href="/" className={`${className} text-white font-bold`}>
			get<span className={"text-primary"}>linked</span>
		</Link>
	);
}
