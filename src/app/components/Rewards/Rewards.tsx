import Image from "next/image";
import React from "react";

export default function Rewards() {
	return (
		<>
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
				<div className="flex flex-col md:flex-row gap-8">
					<div className="w-full md:w-2/5">
						<Image width={320} height={280} src="/images/home/Reward.png" className="w-full h-auto" alt="Rewards illustration" />
					</div>
					<div className="flex flex-col w-full md:w-3/5">
						<div className="hidden md:block">
							<h3 className="text-xl font-bold text-center md:text-3xl">
								Prizes and <br />
								<span className="text-primary">Rewards</span>
							</h3>
							<div className="flex flex-col gap-8">
								<p className="text-sm text-center md:text-base">Highlight of the prizes or rewards for winners and for participants.</p>
							</div>
						</div>
						<div className="flex gap-4 mt-36 w-full justify-center">
							<div className="w-full md:w-1/6 max-w-[400px] bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 md:min-w-[6rem] pb-4 items-center h-max">
								<Image
									src="/images/home/silver_medal 1.png"
									width={80}
									height={80}
									className="w-auto h-full absolute object-contain max-h-[8rem] -top-[5rem] min-w-[6rem] md:max-w-[6rem]"
									alt="Silver medal"
								/>
								<h2 className="font-montserrat font-bold text-sm mt-16 md:mt-[60%]">2nd </h2>
								<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
								<h2 className="text-primary font-montserrat font-bold text-sm">N 300,000</h2>
							</div>
							<div className="w-full md:w-1/6 max-w-[300px] bg-[#903AFF1F] border-2 border-[#903AFF] rounded-lg flex flex-col relative gap-2 md:min-w-[6rem] pb-4 items-center h-max">
								<Image
									src="/images/home/gold_medal 1.png"
									width={125}
									height={125}
									className="w-[400%] absolute h-auto max-h-[8rem] object-contain -top-[6rem] max-w-[24rem]"
									alt="Gold medal"
								/>
								<h2 className="font-montserrat font-bold text-sm mt-20">1st </h2>
								<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
								<h2 className="text-[#903AFF] font-montserrat font-bold text-sm">N 400,000</h2>
							</div>
							<div className="w-full md:w-1/6 max-w-[300px] bg-[#D434FE1F] border-2 border-primary rounded-lg flex flex-col relative gap-2 md:min-w-[6rem] items-center pb-4 h-max">
								<Image
									src="/images/home/bronze_medal 1.png"
									height={80}
									width={80}
									className="w-auto h-full absolute object-contain max-h-[8rem] -top-[5rem] min-w-[6rem] md:max-w-[6rem]"
									alt="Bronze medal"
								/>
								<h2 className="font-montserrat font-bold text-sm mt-16">3rd </h2>
								<h2 className="font-montserrat font-semibold text-sm">Runner</h2>
								<h2 className="text-primary font-montserrat font-bold text-sm">N 150,000</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="divider"></div>
		</>
	);
}
