import Image from "next/image";
import React from "react";

export default function Partners() {
	return (
		<div className="container py-12">
			<h3 className="text-xl font-bold text-center">
				Prizes and <br />
				<span className="text-primary">Partners and Sponsors</span>
			</h3>
			<div className="flex flex-col gap-8">
				<p className="text-sm text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
			</div>
			<div className="border-primary border-2 rounded-md mt-12 flex items-center justify-center py-12 px-4">
				<div className="grid grid-cols-3">
					<div className="p-3 relative">
						<Image src="/images/home/Liberty Assured.svg" className="h-8 object-contain w-full" alt="Liberty Assured Partner" />
						<div className="h-4/5 bg-pink w-[2px] absolute top-0 right-0"></div>
						<div className="h-[2px] bg-pink w-4/5 absolute bottom-0 left-[50%] -translate-x-[50%]"></div>
					</div>
					<div className="p-3 relative">
						<Image src="/images/home/Liberty company logo white.svg" className="h-8 object-contain w-full" alt="Liberty Pay Partner" />
						<div className="h-4/5 bg-pink w-[2px] absolute top-0 right-0"></div>
						<div className="h-[2px] bg-pink w-4/5 absolute bottom-0 left-[50%] -translate-x-[50%]"></div>
					</div>
					<div className="p-3 relative">
						<Image src="/images/home/Winwise logo White colour 1.svg" className="h-8 object-contain w-full" alt="WinWise Partner" />
						<div className="h-[2px] bg-pink w-4/5 absolute bottom-0 left-[50%] -translate-x-[50%]"></div>
					</div>
					<div className="p-3 relative">
						<Image src="/images/home/wisper logo white.svg" className="h-8 object-contain w-full" alt="WhisperSms Partner" />
						<div className="h-4/5 bg-pink w-[2px] absolute bottom-0 -translate-y-[5%] right-0"></div>
					</div>
					<div className="p-3 relative">
						<Image src="/images/home/Paybox.svg" className="h-8 object-contain w-full" alt="Paybox Partner" />
						<div className="h-4/5 bg-pink w-[2px] absolute bottom-0 -translate-y-[5%] right-0 "></div>
					</div>
					<div className="p-3 relative">
						<Image src="/images/home/Vizual Plus.svg" className="h-8 object-contain w-full" alt="VuzualPlus Partner" />
					</div>
				</div>
			</div>
		</div>
	);
}
