import Image from "next/image";
import Link from "next/link";
import React from "react";

import PrimaryButton from "../PrimaryButton";

interface IDrawerNavigation {
	isOpen: boolean;
	onClose: () => void;
}

const openClassName = "left-0";
const closedClassName = "left-[100%]";

export default function DrawerNavigation({ isOpen, onClose }: IDrawerNavigation) {
	return (
		<div
			className={`flex flex-col gap-8 fixed h-screen w-screen bg-darkPrimary z-[120] justify-center transition-all ${
				isOpen ? openClassName : closedClassName
			}`}>
			<button onClick={onClose}>
				<Image src="/images/common/cancel.svg" width={25} height={25} alt="cancel button" className="absolute top-8 right-8 h-8 w-8" />
			</button>
			<div className="flex flex-col gap-8 container">
				<Link href="#home" className="font-montserrat">
					Overview
				</Link>
				<Link href="#timeline" className="font-montserrat">
					Timeline
				</Link>
				<Link href="#faq" className="font-montserrat">
					FAQs
				</Link>
				<Link href="#" className="font-montserrat">
					Contact
				</Link>
				<PrimaryButton className="py-4 px-6 mt-0 lg:ml-16 xl:ml-32">Register</PrimaryButton>
			</div>
		</div>
	);
}
