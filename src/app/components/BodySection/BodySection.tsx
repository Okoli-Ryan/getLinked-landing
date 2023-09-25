import AlternateCard from "@/components/AlternateCard";
import PrimaryButton from "@/components/PrimaryButton";
import Radial from "@/components/Radial";

export default function BodySection() {
	return (
		<>
			<Radial className="w-full -left-[30%] h-auto top-0 " />
			<Radial className="w-full h-auto -right-[60%] top-20" />
			<div className="flex gap-4 flex-col items-center">
				<AlternateCard image="/images/home/the-big-idea.png" className="container">
					<h3 className="text-xl font-bold text-center md:text-left md:text-3xl">
						Introduction to getlinked <br />
						<span className="text-primary">tech Hackathon 1.0</span>
					</h3>
					<p className="text-montserrat text-center md:text-left text-sm md:text-base">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a
						coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving
						real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re
						all about!
					</p>
				</AlternateCard>
				<div className="divider"></div>
				<AlternateCard className="container md:flex-row-reverse" image="/images/home/checkbox-illustration.png">
					<Radial className="w-full -left-[30%] h-auto top-0 " />
					<Radial className="w-full h-auto -right-[60%] top-20" />
					<h3 className="text-xl font-bold text-center md:text-left md:text-3xl z-30">
						Rules and <br />
						<span className="text-primary">Guidelines</span>
					</h3>
					<p className="text-montserrat text-center md:text-left text-sm md:text-base z-30">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a
						coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving
						real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re
						all about!
					</p>
				</AlternateCard>
				<div className="divider"></div>
				<AlternateCard className="container" image="/images/home/chart-illustration.png">
					<Radial className="w-full -left-[30%] h-auto top-0 " />
					<Radial className="w-full h-auto -right-[60%] top-20" />
					<h3 className="text-xl font-bold text-center md:text-left md:text-3xl z-30">
						Judging Criteria <br />
						<span className="text-primary">Key attributes</span>
					</h3>
					<div className="text-center md:text-left flex flex-col gap-4 z-30">
						<p className="text-sm md:text-base">
							<span className="text-pink font-montserrat font-bold">Innovation and Creativity: </span>Evaluate the uniqueness and creativity of
							the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
						</p>
						<p className="text-sm md:text-base">
							<span className="text-pink font-montserrat font-bold">Functionailty: </span>Assess how well the solution works. Does it perform its
							intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
						</p>
						<p className="text-sm md:text-base">
							<span className="text-pink font-montserrat font-bold">Impact and Relevance: </span>Determine the potential impact of the solution in
							the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential
							social, economic, or environmental benefits.
						</p>
						<p className="text-sm md:text-base">
							<span className="text-pink font-montserrat font-bold">Technical Complexity: </span>Evaluate the technical sophistication of the
							solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of
							the solution.
						</p>
						<p className="text-sm md:text-base">
							<span className="text-pink font-montserrat font-bold">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered
							to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other
							competition-specific requirements.
						</p>
					</div>
					<PrimaryButton className="mt-8 mx-auto px-6  py-3 md:mx-0 z-30">Read More</PrimaryButton>
				</AlternateCard>
				<div className="divider"></div>
			</div>
			<div className="divider"></div>
		</>
	);
}
