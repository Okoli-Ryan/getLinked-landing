import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
	return (
		<h3 className={`${className} text-white font-bold`}>
			get<span className={"text-primary"}>linked</span>
		</h3>
	);
}
