import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<header className="bg-primary py-4 px-16 flex flex-row justify-between items-center w-full">
			<div className="flex flex-row justify-center items-center gap-3">
				<Link to={"/"}>
					<img
						className="w-10 h-10"
						src="/src/assets/icons/habytec_logo_white.svg"
						alt="white habytec logo"
					/>
				</Link>
				<Link to={"/"} className="text-white font-medium text-base">
					Habytec
				</Link>
			</div>
			<div className="flex flex-row justify-center items-center gap-6">
				<h3 className="text-neutral-400 font-medium text-base hover:text-white transition-colors">
					<Link to={"/login"}>LOGIN</Link>
				</h3>
				<Link
					to={"/register"}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					className="flex flex-row justify-center items-center gap-2 bg-accent px-6 py-1 rounded-lg">
					<h3 className="text-base text-white font-medium">
						SIGN UP
					</h3>
					<div
						className={`overflow-hidden ${
							isHover ? "animate-dash" : "w-0"
						}`}>
						<FaArrowRightLong color={"#fff"} className="w-3" />
					</div>
				</Link>
			</div>
		</header>
	);
}

export default Header;
