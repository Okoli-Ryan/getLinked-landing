import Image from "next/image";
import React from "react";

export default function Radial({ className }: { className: string }) {
	return <Image src="/images/common/radial.svg" width={390} height={442} alt="radial blur" className={`absolute  ${className}`} />;
}
