import Header from "../Components/Header";
import Section from "../Components/Section";

function Root() {
	return (
		<>
			<Header />
			<Section color={"radial"} className="">
				<h1 className="text-black">Hello, world</h1>
			</Section>
		</>
	);
}

export default Root;
