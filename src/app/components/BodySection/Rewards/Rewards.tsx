import Image from "next/image";
import React from "react";

import BronzeMedal from "@images/home/bronze_medal 1.png";
import GoldMedal from "@images/home/gold_medal 1.png";
import RewardImage from "@images/home/Reward.png";
import SilverMedal from "@images/home/silver_medal 1.png";

export default function Rewards() {
	return (
		<div className="container py-12">
			<div className="block md:hidden">
				<h3 className="text-xl font-bold text-center md:text-3xl">
					Prizes and <br />
					<span className="text-primary">Rewards</span>
				</h3>
				<div className="flex flex-col gap-8">
					<p className="text-sm text-center md:text-base">Highlight of the prizes or rewards for winners and for participants.</p>
				</div>
			</div>
			<div className="flex  flex-col md:flex-row">
				<Image src={RewardImage} className="w-full md:w-1/3 h-auto object-contain" alt="Rewards illustration" />
				<div className="flex flex-col w-full md:w-2/3">
					<div className="hidden md:block">
						<h3 className="text-xl font-bold text-center md:text-3xl">
							Prizes and <br />
							<span className="text-primary">Rewards</span>
						</h3>
						<div className="flex flex-col gap-8">
							<p className="text-sm text-center md:text-base">Highlight of the prizes or rewards for winners and for participants.</p>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-4 mt-36 w-full">
						<div className="w-full max-w-[300px] bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 pb-4 items-center h-max">
							<Image src={SilverMedal} className="w-full absolute object-contain -top-[3rem] md:-top-[50%] md:max-w-[15rem]" alt="Silver medal" />
							<h2 className="font-montserrat font-bold text-sm mt-16 md:mt-[60%]">2nd </h2>
							<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
							<h2 className="text-primary font-montserrat font-bold text-sm">N 300,000</h2>
						</div>
						<div className="w-full max-w-[300px] bg-[#903AFF1F] border-2 border-[#903AFF] rounded-lg flex flex-col relative gap-2 pb-4 items-center h-max">
							<Image
								src={GoldMedal}
								className="w-auto max-w-none absolute h-3/5 max-h-[10rem] object-contain -top-[5rem] md:-top-[10rem] md:max-w-[15rem]"
								alt="Gold medal"
							/>
							<h2 className="font-montserrat font-bold text-sm mt-20 md:mt-[60%]">1st </h2>
							<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
							<h2 className="text-[#903AFF] font-montserrat font-bold text-sm">N 400,000</h2>
						</div>
						<div className="w-full max-w-[300px] bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 items-center pb-4 h-max">
							<Image src={BronzeMedal} className="w-full absolute object-contain -top-[3rem] md:-top-[50%] md:max-w-[15rem]" alt="Bronze medal" />
							<h2 className="font-montserrat font-bold text-sm mt-16 md:mt-[60%]">3rd </h2>
							<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
							<h2 className="text-primary font-montserrat font-bold text-sm">N 150,000</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
