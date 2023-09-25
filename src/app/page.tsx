import Radial from "@/components/Radial";

import BodySection from "./components/BodySection";
import FAQ from "./components/Faq";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Privacy from "./components/Privacy";
import Rewards from "./components/Rewards";
import Timeline from "./components/Timeline";

export default function Home() {
	return (
		<div className="relative w-full">
			<HeroSection />
			<BodySection />
			<FAQ />
			<Timeline />
			<Rewards />
			<Partners />
			<Privacy />
		</div>
	);
}
