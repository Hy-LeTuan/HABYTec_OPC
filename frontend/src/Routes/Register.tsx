import Section from "../Components/Section";
import FormInputField from "../Components/FormInputField";
import { FormError, FormErrorStatus, FormInput } from "../constants/types";
import {
	safeguardFromWrongEmailFormat,
	safeguardFromSpecialChars,
} from "../utils/safeguard";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { ChangeEvent, useState } from "react";

function Register() {
	const [errorMessage, setErrorMessage] = useState<FormError>({
		email: "",
		username: "",
		password: "",
		confirm_password: "",
	});
	const [isError, setIsError] = useState<FormErrorStatus>({
		email: false,
		username: false,
		password: false,
		confirm_password: false,
	});

	// user login input
	const [userRegisterInput, setUserRegisterInput] = useState<FormInput>({
		email: "",
		username: "",
		password: "",
		confirm_password: "",
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

	const onUserRegisterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const fieldName: string = e.currentTarget.name;
		const value: string = e.currentTarget.value;

		if (fieldName == "email") {
			if (safeguardFromWrongEmailFormat(value)) {
				notifyError("email", true, "Wrong email format");
			} else {
				notifyError("email", false, "");
			}
		} else if (fieldName == "username") {
			if (safeguardFromSpecialChars(value)) {
				notifyError(
					"username",
					true,
					"Username cannot contain special characters"
				);
			} else {
				notifyError("username", false, "");
			}
		}

		setUserRegisterInput({
			...userRegisterInput,
			[fieldName]: value,
		});
	};

	return (
		<>
			<Section color={"radial"} className="h-dvh">
				<div className="w-full pt-10 relative">
					<Link to={"/"} className="absolute left-16">
						<img
							className="w-10 h-10"
							src="/src/assets/icons/habytec_logo_white.svg"
							alt="white habytec logo"
						/>
					</Link>
					<div className="px-20 py-10 w-[780px] mx-auto border-white/50 border-2 bg-white/5 rounded-lg shadow-md shadow-white/5">
						<div className="w-full text-center flex flex-col gap-8 justify-center items-center">
							<h1 className="text-white font-medium text-4xl tracking-widest">
								SIGN UP
							</h1>
							<div className="w-full flex flex-col justify-center items-center gap-4">
								<FormInputField
									name={"email"}
									type={"email"}
									label={"Your email"}
									placeholder={"Enter your email"}
									errorMessage={errorMessage["email"]}
									isError={isError["email"]}
									onChangeFunction={onUserRegisterInputChange}
									value={userRegisterInput["email"]}
									className={""}
								/>
								<FormInputField
									name={"username"}
									type={"text"}
									label={"Your username"}
									placeholder={"Enter your username"}
									errorMessage={errorMessage["username"]}
									isError={isError["username"]}
									onChangeFunction={onUserRegisterInputChange}
									value={userRegisterInput["username"]}
									className={""}
								/>
								<FormInputField
									name={"password"}
									type={"password"}
									label={"Your password"}
									placeholder={"Enter your password"}
									errorMessage={errorMessage["password"]}
									isError={isError["password"]}
									onChangeFunction={onUserRegisterInputChange}
									value={userRegisterInput["password"]}
									className={""}
								/>
								<FormInputField
									name={"confirm_password"}
									type={"password"}
									label={"Confirm your password"}
									placeholder={"Enter your password again"}
									errorMessage={
										errorMessage["confirm_password"]
									}
									isError={isError["confirm_password"]}
									onChangeFunction={onUserRegisterInputChange}
									value={
										userRegisterInput["confirm_password"]
									}
									className={""}
								/>
							</div>
							<Button
								className={
									"transition-colors duration-300 hover:bg-indigo-900 w-full rounded-lg bg-accent shadow-black/10 shadow-md py-3"
								}>
								<h3 className="text-white text-xl font-medium">
									Sign In
								</h3>
							</Button>
							<div className="w-full text-center text-base">
								<p>
									<span className="text-neutral-400">
										Already have an account? &gt;{" "}
									</span>
									<Link
										to={"/login"}
										className="text-accent font-medium">
										Login here
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

export default Register;
