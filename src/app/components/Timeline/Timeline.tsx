import React from "react";

import { TIMELINE } from "./Timeline.data";

export default function Timeline() {
	return (
		<>
			<div className={`flex flex-col gap-8 py-12 container`} id="timeline">
				<h3 className="text-xl font-bold text-center md:text-3xl">Timeline</h3>
				<p className="text-sm text-center md:text-base">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
				<div className="flex flex-col gap-8 md:gap-0 md:mt-8">
					{TIMELINE.map((item, index) => (
						<div key={index} className="md:mt-16 mx-auto">
							{/* mobile */}
							<div className="flex gap-2 md:hidden">
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

							{/* desktop */}
							<div className={`hidden md:flex justify-center gap-x-12 gap-y-4 relative ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
								<div className="flex flex-col gap-2 pb-1 w-1/2 ">
									<h4 className={`text-primary text-sm font-bold font-montserrat max-w-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}>
										{item.title}
									</h4>
									<p className={`text-sm  font-montserrat max-w-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}>{item.body}</p>
								</div>
								<div className="relative flex self-center">
									<div className="h-24 w-[2px] bg-primary absolute left-[50%] -translate-x-[50%] -top-[450%]"></div>
									<div className="h-max w-max rounded-full  bg-secondaryBg flex justify-center items-center self-center">
										<span className="w-6 font-bold h-6 flex items-center justify-center text-center text-sm text-white font-montserrat">
											{index + 1}
										</span>
									</div>
								</div>
								<h4
									className={`text-primary text-sm font-bold font-montserrat w-1/2 max-w-2xl self-center ${
										index % 2 === 0 ? "text-left" : "text-right"
									}`}>
									November 18, 2023
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="divider"></div>
		</>
	);
}
