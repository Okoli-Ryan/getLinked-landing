import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "./Logo";

export default function Footer() {
	return (
		<>
			<footer className="container py-12 px-8 grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-8">
				<div className="lg:col-span-3 lg:max-w-[20rem]">
					<Logo className="text-2xl" />
					<p className="font-montserrat leading-[21px] text-sm mt-4">
						Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and
						talented individuals in the field of technology
					</p>

					<div className="mt-8 flex">
						<span className="border-r-2 border-primary pr-2 text-sm text-montserrat">Terms of Use</span>
						<span className="pl-2 text-sm text-montserrat">Privacy Policy</span>
					</div>
				</div>

				<div className="lg:col-span-2 mt-8 lg:mt-0">
					<div className="flex flex-col gap-4">
						<h3 className="text-primary font-semibold font-montserrat">Useful Links</h3>
						<Link href="#home" className="font-montserrat text-sm">
							Overview
						</Link>
						<Link href="#timeline" className="font-montserrat text-sm">
							Timeline
						</Link>
						<Link href="#faq" className="font-montserrat text-sm">
							FAQs
						</Link>
						<Link href="#" className="font-montserrat text-sm">
							Register
						</Link>
						<div className="flex gap-4 items-center">
							<span className="text-primary text-sm font-montserrat">Follow us</span>
							<Image height={20} width={20} className="h-6 w-6 lg:h-4 lg:w-4" src="/images/common/instagram-icon.svg" alt="Instagram icon" />
							<Image height={20} width={20} className="h-6 w-6 lg:h-4 lg:w-4" src="/images/common/x-icon.svg" alt="X icon" />
							<Image height={20} width={20} className="h-6 w-6 lg:h-4 lg:w-4" src="/images/common/facebook.svg" alt="Facebook icon" />
							<Image height={20} width={20} className="h-6 w-6 lg:h-4 lg:w-4" src="/images/common/linkedin-icon.svg" alt="Linkedin icon" />
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 mt-12 lg:mt-0 col-span-1">
					<h3 className="text-primary font-semibold font-montserrat">Contact Us</h3>
					<div className="flex gap-4 items-center">
						<Image height={20} width={20} className="h-3 w-3" src="/images/common/call-icon.svg" alt="Call icon" />
						<p className="font-montserrat text-sm">+234 6707653444 </p>
					</div>
					<div className="flex gap-4 mt-2">
						<Image height={20} width={20} className="h-3 w-3" src="/images/common/location.svg" alt="Location icon" />
						<p className="font-montserrat text-sm max-w-[8rem]">27, Alara Street Yaba 100012 Lagos State</p>
					</div>
				</div>
			</footer>
			<div className="mt-12 text-center text-sm font-montserrat mb-8 text-white">All rights reserved. © getlinked Ltd.</div>
		</>
	);
}
