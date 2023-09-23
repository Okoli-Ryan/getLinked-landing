import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import Fire from "@images/home/fire.png";
import HeroImage from "@images/home/hero-image.png";
import Chain from "@images/home/link.png";

export default function HeroSection() {
	return (
		<div className="min-h-screen pt-6">
			<div className="flex flex-col container">
				<h2 className="font-montserrat  text-center italic font-bold">Igniting a Revolution in HR Innovation</h2>
				<div className="flex flex-wrap items-center mt-12">
					<h1 className="text-3xl text-center font-bold w-full">getlinked Tech</h1>
					<h1 className="flex flex-nowrap whitespace-nowrap items-center text-3xl text-center justify-center font-bold w-full">
						Hackathon &nbsp;<span className="text-primary">1.0</span>
						<span className="flex-shrink-0">
							<Image src={Chain} alt="Chain logo" className="object-contain" />
						</span>
						<span className="flex-shrink-0">
							<Image src={Fire} alt="fire logo" className="object-contain" />
						</span>
					</h1>
				</div>
				<p className="mt-4 text-center font-montserrat">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

				<PrimaryButton className="mx-auto">Register</PrimaryButton>

				<div className="mx-auto flex gap-4 mt-8">
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
			<div className="mt-4">
				<Image src={HeroImage} alt="Hero image" className="w-full h-auto" />
			</div>
		</div>
	);
}
