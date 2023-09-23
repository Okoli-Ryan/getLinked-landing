"use client";
import React from "react";

import { ACCORDION_DATA } from "./AccordionSection.data";
import useAccordion from "./useAccordion";

export default function AccordionSection() {
	const { activeIndex, onChangeIndex } = useAccordion();

	return (
		<>
			{ACCORDION_DATA.map((item, index) => (
				<button onClick={() => onChangeIndex(index)} className="flex gap-2 flex-col border-b-[1px] border-primary w-full" key={index}>
					<div className="flex justify-between gap-4 items-end pb-2">
						<span className="text-left text-sm">{item.title}</span>
						<span className="text-primary text-xl">{activeIndex === index ? "-" : "+"}</span>
					</div>
					{activeIndex === index && <div className="text-white text-left text-sm">{item.answer}</div>}
				</button>
			))}
		</>
	);
}
