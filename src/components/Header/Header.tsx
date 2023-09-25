"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "../Logo";
import PrimaryButton from "../PrimaryButton";
import DrawerNavigation from "./DrawerNavigation";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<DrawerNavigation isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<header className="h-16 md:h-24 flex items-center sticky top-0 bg-darkPrimary z-[100] border-b-[1px] border-[#FFFFFF2E]">
				<div className="container flex justify-between items-center">
					<Logo className="text-2xl" />
					<button onClick={() => setIsOpen(true)}>
						<Image height={20} width={20} src="/images/common/menu.svg" alt="menu logo" className="flex md:hidden h-5 w-5" />
					</button>
					<div className="md:flex gap-8 hidden items-center">
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
			</header>
		</>
	);
}
