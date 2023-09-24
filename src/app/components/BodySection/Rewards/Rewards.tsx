import Image from "next/image";
import React from "react";

export default function Rewards() {
	return (
		<div className="container py-12">
			<h3 className="text-xl font-bold text-center">
				Prizes and <br />
				<span className="text-primary">Rewards</span>
			</h3>
			<div className="flex flex-col gap-8">
				<p className="text-sm text-center">Highlight of the prizes or rewards for winners and for participants.</p>
			</div>
			<Image width={320} height={280} src="/images/home/Reward.png" className="w-full h-auto" alt="Rewards illustration" />
			<div className="grid grid-cols-3 gap-4 mt-36">
				<div className="w-full bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 pb-4 items-center h-max">
					<Image
						src="/images/home/silver_medal 1.png"
						width={80}
						height={80}
						className="w-full absolute object-contain -top-[30%]"
						alt="Silver medal"
					/>
					<h2 className="font-montserrat font-bold text-sm mt-16">2nd </h2>
					<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
					<h2 className="text-primary font-montserrat font-bold text-sm">N 300,000</h2>
				</div>
				<div className="w-full bg-[#903AFF1F] border-2 border-[#903AFF] rounded-lg flex flex-col relative gap-2 pb-4 items-center h-max">
					<Image
						src="/images/home/gold_medal 1.png"
						width={125}
						height={125}
						className="w-[150%] max-w-none absolute h-auto object-contain -top-[60%]"
						alt="Gold medal"
					/>
					<h2 className="font-montserrat font-bold text-sm mt-20">1st </h2>
					<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
					<h2 className="text-[#903AFF] font-montserrat font-bold text-sm">N 400,000</h2>
				</div>
				<div className="w-full bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 items-center pb-4 h-max">
					<Image
						src="/images/home/bronze_medal 1.png"
						height={80}
						width={80}
						className="w-full absolute h-auto object-contain -top-[30%]"
						alt="Bronze medal"
					/>
					<h2 className="font-montserrat font-bold text-sm mt-16">3rd </h2>
					<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
					<h2 className="text-primary font-montserrat font-bold text-sm">N 150,000</h2>
				</div>
			</div>
		</div>
	);
}
