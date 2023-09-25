import React from 'react';

import AlternateCard from '@/components/AlternateCard';

import AccordionSection from './AccordionSection';

export default function FAQ() {
	return (
		<div id="faq">
			<AlternateCard className="container md:flex-row-reverse" image="/images/home/accordion-illustration.png">
				<h3 className="text-xl font-bold text-center md:text-left md:text-3xl">
					Frequently Ask <br />
					<span className="text-primary">Question</span>
				</h3>
				<div className="flex flex-col gap-8">
					<p className="text-sm text-center md:text-left md:text-base">
						We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
					</p>
					<AccordionSection />
				</div>
			</AlternateCard>
			<div className="divider"></div>
		</div>
	);
}
