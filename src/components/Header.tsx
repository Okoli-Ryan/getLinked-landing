import Image from "next/image";
import React from "react";

import MenuLogo from "../../public/images/common/menu.svg";
import Logo from "./Logo";

export default function Header() {
	return (
		<div className="h-16 flex items-center sticky top-0 bg-darkPrimary z-50 border-b-[1px] border-[#FFFFFF2E]">
			<div className="container flex justify-between">
				<Logo className="text-2xl" />
				<Image src={MenuLogo} width={20} height={20} alt="menu logo" />
				<div className="md:flex gap-4 hidden"></div>
			</div>
		</div>
	);
}
