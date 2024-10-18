import { ReactNode } from "react";

type SectionArgument = {
	color: string;
	className: string;
	children: ReactNode;
};

function Section({ color, className, children }: SectionArgument) {
	let background: string = "";

	switch (color) {
		case "radial":
			background = "bg-main-radial-gradient";
			break;
		case "primary":
			background = "bg-primary";
			break;
		case "secondary":
			background = "bg-secondary";
	}

	return (
		<section className={`${background} ${className}`}>{children}</section>
	);
}

export default Section;
