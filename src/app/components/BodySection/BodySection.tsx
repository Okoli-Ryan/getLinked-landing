import React from "react";

import AlternateCard from "@/components/AlternateCard";
import PrimaryButton from "@/components/PrimaryButton";
import ThinkingIllustration from "@images/home/accordion-illustration.png";
import ChartIllustration from "@images/home/chart-illustration.png";
import CheckboxIllustration from "@images/home/checkbox-illustration.png";
import TheBigIdea from "@images/home/the-big-idea.png";

import AccordionSection from "./AccordionSection";
import Partners from "./Partners";
import Privacy from "./Privacy";
import Rewards from "./Rewards";
import Timeline from "./Timeline";

export default function BodySection() {
	return (
		<div className="flex gap-4 flex-col items-center border-b-[1px] border-[#FFFFFF2E]">
			<AlternateCard image={TheBigIdea} className="container">
				<h3 className="text-xl font-bold text-center">
					Introduction to getlinked <br />
					<span className="text-primary">tech Hackathon 1.0</span>
				</h3>
				<p className="text-montserrat text-center text-sm">
					Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing
					the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
				</p>
			</AlternateCard>
			<div className="divider"></div>
			<AlternateCard className="container" image={CheckboxIllustration}>
				<h3 className="text-xl font-bold text-center">
					Rules and <br />
					<span className="text-primary">Guidelines</span>
				</h3>
				<p className="text-montserrat text-center text-sm">
					Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing
					the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
				</p>
			</AlternateCard>
			<div className="divider"></div>

			<AlternateCard className="container" image={ChartIllustration}>
				<h3 className="text-xl font-bold text-center">
					Judging Criteria <br />
					<span className="text-primary">Key attributes</span>
				</h3>
				<div className="text-center flex flex-col gap-4">
					<p className="text-sm">
						<span className="text-pink">Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether
						it addresses a real-world problem in a novel way or introduces innovative features.
					</p>
					<p className="text-sm">
						<span className="text-pink">Functionailty: </span>Assess how well the solution works. Does it perform its intended functions effectively
						and without major issues? Judges would consider the completeness and robustness of the solution.
					</p>
					<p className="text-sm">
						<span className="text-pink">Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it
						address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or
						environmental benefits.
					</p>
					<p className="text-sm">
						<span className="text-pink">Technical Complexity: </span>Evaluate the technical sophistication of the solution. Judges would consider
						the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
					</p>
					<p className="text-sm">
						<span className="text-pink">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered to the rules and guidelines of
						the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
					</p>
				</div>
				<PrimaryButton className="mt-8 mx-auto px-6  py-3">Read More</PrimaryButton>
			</AlternateCard>
			<div className="divider"></div>

			<AlternateCard className="container" image={ThinkingIllustration}>
				<h3 className="text-xl font-bold text-center">
					Frequently Ask <br />
					<span className="text-primary">Question</span>
				</h3>
				<div className="flex flex-col gap-8">
					<p className="text-sm text-center">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
					<AccordionSection />
				</div>
			</AlternateCard>
			<div className="divider"></div>
			<Timeline />
			<div className="divider"></div>
			<Rewards />
			<div className="divider"></div>
			<Partners />
			<div className="divider"></div>
			<Privacy />
			<div className="divider"></div>
		</div>
	);
}
