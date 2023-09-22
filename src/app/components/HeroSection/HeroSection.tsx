import Image from "next/image";
import React from "react";

import Fire from "@images/home/fire.png";
import Chain from "@images/home/link.png";

export default function HeroSection() {
	return (
		<div className="h-screen flex flex-col pt-6 container">
			<h2 className="font-montserrat  text-center">Igniting a Revolution in HR Innovation</h2>

			<div className="flex flex-wrap items-center h-12 mt-12">
				<h1 className="text-3xl text-center font-bold inline">
					getlinked Tech Hackathon{" "}
					<span className="text-primary">
						1.0
						<span className="flex-shrink-0">
							<Image src={Chain} alt="Chain logo" className="object-contain" />
						</span>
						<span className="flex-shrink-0">
							<Image src={Fire} alt="fire logo" className="object-contain" />
						</span>
					</span>
				</h1>
			</div>
		</div>
	);
}
