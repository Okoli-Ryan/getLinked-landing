import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import CheckIcon from "@images/common/check.svg";
import PrivacyIcon from "@images/home/privacyIcon.png";

export default function Privacy() {
	return (
		<div className="container py-12">
			<h3 className="text-xl font-bold text-center">
				Privacy Policy and <br />
				<span className="text-primary">Terms</span>
			</h3>
			<p className="text-white/75 text-center font-montserrat mt-2">Last updated on September 12, 2023</p>
			<div className="flex flex-col gap-8">
				<p className="text-sm text-center font-montserrat mt-5">
					Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
				</p>
			</div>
			<div className="py-8 px-4 border-[1px] border-primary flex flex-col gap-4 rounded-[5px] mt-8">
				<p className="font-montserrat text-center text-sm leading-[26px]">
					At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy
					outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our
					event, you consent to the practices described in this policy.
				</p>
				<div className="flex flex-col gap-2 mt-4">
					<h3 className="text-primary font-bold font-montserrat">Licensing Policy</h3>
					<h5 className="font-montserrat font-bold">Here are terms of our Standard License:</h5>
				</div>
				<div className="flex gap-4 mt-4">
					<Image width={20} height={20} src="/images/common/check.svg" className="w-4 h-4" alt="Check icon" />
					<p className="text-sm font-montserrat leading-[20px]">
						The Standard License grants you a non-exclusive right to navigate and register for our event
					</p>
				</div>
				<div className="flex gap-4 mt-4">
					<Image width={20} height={20} src="/images/common/check.svg" className="w-4 h-4" alt="Check icon" />
					<p className="text-sm font-montserrat leading-[20px]">
						You are licensed to use the item available at any free source sites, for your project developement
					</p>
				</div>
				<PrimaryButton className="mx-auto px-4 py-2">Read More</PrimaryButton>
			</div>
			<Image width={275} height={450} src="/images/home/privacyIcon.png" className="h-auto w-full mt-12" alt="Privacy icon" />
		</div>
	);
}
