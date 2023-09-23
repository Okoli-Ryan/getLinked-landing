import React, { useState } from "react";

export default function useAccordion() {
	const [activeIndex, setActiveIndex] = useState(-1);

	function onChangeIndex(index: number) {
		let newIndex = index;

		newIndex = newIndex === activeIndex ? -1 : index;

		setActiveIndex(newIndex);
	}

	return { activeIndex, onChangeIndex };
}
