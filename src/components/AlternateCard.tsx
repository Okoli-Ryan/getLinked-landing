import Image from "next/image";
import React from "react";

interface IAlternateCard {
	image: any;
	children: React.ReactNode;
	reverse?: boolean;
	className?: string;
}
export default function AlternateCard({ image, children, className = "", reverse = false }: IAlternateCard) {
	return (
		<div className={`flex ${className} ${reverse ? "flex-col-reverse" : "flex-col"} flex-col gap-8 py-12 px-8`}>
			<Image src={image} alt="Hero image" className="w-full mx-auto h-auto object-contain" />
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
}
