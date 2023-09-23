import React from "react";

import { TIMELINE } from "./Timeline.data";

export default function Timeline() {
	return (
		<div className={`flex flex-col gap-8 py-12 container`}>
			<h3 className="text-xl font-bold text-center">Timeline</h3>
			<p className="text-sm text-center">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
			<div className="flex flex-col gap-8">
				{TIMELINE.map((item, index) => (
					<div className="flex gap-2" key={index}>
						<div className="flex flex-col gap-2 items-center">
							<div className="h-full w-[2px] bg-primary"></div>
							<div className="h-max w-max rounded-full  bg-secondaryBg flex justify-center items-center ">
								<span className="w-6 font-bold h-6 flex items-center justify-center text-center text-sm text-white font-montserrat">
									{index + 1}
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-2 pb-1">
							<h4 className="text-primary text-sm font-bold font-montserrat">{item.title}</h4>
							<p className="text-sm  font-montserrat">{item.body}</p>
							<h4 className="text-primary text-sm font-bold font-montserrat">November 18, 2023</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
