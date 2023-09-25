import Image from "next/image";
import React from "react";

interface IAlternateCard {
	image: any;
	children: React.ReactNode;
	className?: string;
}
export default function AlternateCard({ image, children, className = "" }: IAlternateCard) {
	return (
		<div className={`relative flex ${className} flex-col gap-8 md:gap-12 py-12 px-8 md:flex-row items-center`}>
			<Image height={260} width={260} src={image} alt="Hero image" className="z-30 w-full mx-auto h-auto object-contain md:w-1/2" />
			<div className="flex flex-col gap-4 w-full md:w-1/2">{children}</div>
		</div>
	);
}
