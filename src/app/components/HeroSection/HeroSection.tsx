import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/PrimaryButton";

export default function HeroSection() {
	return (
		<div className="min-h-screen md:h-screen pt-8 relative z-50" id="home">
			<h2 className="font-montserrat container text-center text-xs sm:text-base italic font-bold md:text-right md:text-4xl z-[60] ">
				Igniting a Revolution in{" "}
				<span className="relative">
					HR Innovation <Image src="/images/home/line.svg" alt="line" width={253} height={11} className="absolute -bottom-[1rem] right-0" />
				</span>
			</h2>
			<div className="flex flex-col md:flex-row z-[60]">
				<div className="flex flex-col container w-full md:w-1/2 md:pl-[7.5vw] md:pt-16">
					<div className="flex flex-wrap items-center mt-12">
						<h1 className="text-3xl text-center md:text-left md:text-5xl font-bold w-full">getlinked Tech</h1>
						<h1 className="flex flex-nowrap md:text-left whitespace-nowrap text-3xl text-center justify-center md:justify-start font-bold w-full md:text-5xl">
							Hackathon &nbsp;<span className="text-primary">1.0</span>
							<span className="flex-shrink-0">
								<Image height={25} width={25} src="/images/home/link.png" alt="Chain logo" className="object-contain md:w-12 md:h-12" />
							</span>
							<span className="flex-shrink-0">
								<Image height={25} width={25} src="/images/home/fire.png" alt="fire logo" className="object-contain md:w-12 md:h-12" />
							</span>
						</h1>
					</div>
					<p className="mt-4 text-center md:text-left font-montserrat ">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
					</p>

					<PrimaryButton className="mx-auto md:mx-0 mt-8">Register</PrimaryButton>

					<div className="mx-auto flex gap-4 mt-8 md:mt-12 md:mx-0">
						<span className="text-4xl">
							00 <span className="text-sm">H</span>
						</span>
						<span className="text-4xl">
							00 <span className="text-sm">M</span>
						</span>
						<span className="text-4xl">
							00 <span className="text-sm">S</span>
						</span>
					</div>
				</div>
				<div className="mt-4 w-full md:w-1/2">
					<Image height={800} width={700} src="/images/home/Hero-image.png" alt="Hero image" className="w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	);
}
