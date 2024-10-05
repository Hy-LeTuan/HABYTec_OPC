import Section from "../Components/Section";
import FormInputField from "../Components/FormInputField";
import { FormError, FormErrorStatus, FormInput } from "../constants/types";
import { safeguardFromWrongEmailFormat } from "../utils/safeguard";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FaFacebook } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

function Login() {
	const [errorMessage, setErrorMessage] = useState<FormError>({
		email: "",
		password: "",
	});
	const [isError, setIsError] = useState<FormErrorStatus>({
		email: false,
		password: false,
	});

	// user login input
	const [userLoginInput, setUserLoginInput] = useState<FormInput>({
		email: "",
		password: "",
	});

	const notifyError = (
		field: string,
		status: boolean,
		message: string = ""
	) => {
		setErrorMessage({
			...errorMessage,
			[field]: message,
		});

		setIsError({
			...isError,
			[field]: status,
		});
	};

	const onUserLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const fieldName: string = e.currentTarget.name;
		const value: string = e.currentTarget.value;

		if (fieldName == "email") {
			if (safeguardFromWrongEmailFormat(value)) {
				notifyError("email", true, "Wrong email format");
			} else {
				notifyError("email", false, "");
			}
		}

		setUserLoginInput({
			...userLoginInput,
			[fieldName]: value,
		});
	};

	return (
		<>
			<Section color={"radial"} className="h-dvh">
				<div className="pt-8 flex flex-row justify-start items-center px-16">
					<Link to={"/"}>
						<img
							className="w-10 h-10"
							src="/src/assets/icons/habytec_logo_white.svg"
							alt="white habytec logo"
						/>
					</Link>
				</div>
				<div className="w-full">
					<div className="px-20 py-10 w-[780px] mx-auto border-white/50 border-2 bg-white/5 rounded-lg shadow-md shadow-white/5">
						<div className="w-full text-center flex flex-col gap-6 justify-center items-center">
							<h1 className="text-white font-medium text-4xl tracking-widest">
								SIGN IN
							</h1>
							<div className="w-full flex flex-col justify-center items-center gap-4">
								<FormInputField
									name={"email"}
									type={"email"}
									label={"Your Email"}
									placeholder={"Enter your email"}
									errorMessage={errorMessage["email"]}
									isError={isError["email"]}
									onChangeFunction={onUserLoginInputChange}
									value={userLoginInput["email"]}
									className={""}
								/>
								<FormInputField
									name={"password"}
									type={"password"}
									label={"Your Password"}
									placeholder={"Enter your password"}
									errorMessage={errorMessage["password"]}
									isError={isError["password"]}
									onChangeFunction={onUserLoginInputChange}
									value={userLoginInput["password"]}
									className={""}
								/>
							</div>
							<div className="w-full text-left text-base text-white">
								<Link to={"/forget-password"}>
									Forget your password?
								</Link>
							</div>
							<Button
								className={
									"transition-colors duration-300 hover:bg-indigo-900 w-full rounded-lg bg-accent shadow-black/10 shadow-md py-3"
								}>
								<h3 className="text-white text-xl font-medium">
									Sign In
								</h3>
							</Button>
							<div className="w-full text-center text-base text-neutral-400">
								<p>- Or sign in with -</p>
							</div>
							<div className="flex flex-row justify-between w-full items-center">
								<Button
									className={
										"transition-colors flex flex-row justify-center items-center gap-3 px-5 py-2 rounded-md border-white border-[0.5px] hover:bg-white/5"
									}>
									<FaFacebook
										color="#0866FF"
										className="w-6 h-6"
									/>
									<h4 className="text-white text-base">
										Facebook
									</h4>
								</Button>
								<Button
									className={
										"w-40 transition-colors flex flex-row justify-center items-center gap-3 px-5 py-2 rounded-md border-white border-[0.5px] hover:bg-white/5"
									}>
									<img
										src="/src/assets/icons/google_logo.svg"
										alt="Google icon"
										className="w-6 h-6"
									/>
									<h4 className="text-white text-base">
										Google
									</h4>
								</Button>
								<Button
									className={
										"w-40 transition-colors flex flex-row justify-center items-center gap-3 px-5 py-2 rounded-md border-white border-[0.5px] hover:bg-white/5"
									}>
									<img
										src="/src/assets/icons/apple_logo.svg"
										alt="Google icon"
										className="w-6 h-6"
									/>
									<h4 className="text-white text-base">
										Apple
									</h4>
								</Button>
							</div>
							<div className="w-full text-center text-base">
								<p>
									<span className="text-neutral-400">
										Don't have an account? &gt;{" "}
									</span>
									<Link
										to={"/forget-password"}
										className="text-accent font-medium">
										Register here
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}

export default Login;
