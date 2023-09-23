import Image from "next/image";
import Link from "next/link";
import React from "react";

import CallIcon from "@images/common/call-icon.svg";
import FacebookIcon from "@images/common/facebook.svg";
import InstagramIcon from "@images/common/instagram-icon.svg";
import LinkedinIcon from "@images/common/linkedin-icon.svg";
import LocationIcon from "@images/common/location.svg";
import XIcon from "@images/common/x-icon.svg";

import Logo from "./Logo";

export default function Footer() {
	return (
		<footer className="container py-12 px-8">
			<Logo className="text-2xl" />
			<p className="font-montserrat leading-[21px] text-sm mt-4">
				Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and
				talented individuals in the field of technology
			</p>

			<div className="mt-8 flex">
				<span className="border-r-2 border-primary pr-2 text-sm text-montserrat">Terms of Use</span>
				<span className="pl-2 text-sm text-montserrat">Privacy Policy</span>
			</div>

			<div className="flex flex-col gap-4 mt-8">
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
				<Link href="/register" className="font-montserrat text-sm">
					Register
				</Link>
				<div className="flex gap-4 items-center">
					<span className="text-primary text-sm font-montserrat">Follow us</span>
					<Image className="h-6 w-6" src={InstagramIcon} alt="Instagram icon" />
					<Image className="h-6 w-6" src={XIcon} alt="X icon" />
					<Image className="h-6 w-6" src={FacebookIcon} alt="Facebook icon" />
					<Image className="h-6 w-6" src={LinkedinIcon} alt="Linkedin icon" />
				</div>
			</div>
			<div className="flex flex-col gap-4 mt-12">
				<h3 className="text-primary font-semibold font-montserrat">Contact Us</h3>
				<div className="flex gap-4 items-center">
					<Image className="h-3 w-3" src={CallIcon} alt="Instagram icon" />
					<p className="font-montserrat text-sm">+234 6707653444 </p>
				</div>
				<div className="flex gap-4 mt-2">
					<Image className="h-3 w-3" src={LocationIcon} alt="Instagram icon" />
					<p className="font-montserrat text-sm max-w-[8rem]">27, Alara Street Yaba 100012 Lagos State</p>
				</div>
			</div>
			<div className="mt-12 text-center text-sm font-montserrat text-white">All rights reserved. © getlinked Ltd.</div>
		</footer>
	);
}
