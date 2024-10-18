import { Field, Input, Label, Description } from "@headlessui/react";
import { ChangeEvent } from "react";

type FormInputFieldArgs = {
	name: string;
	type: string;
	label: string;
	placeholder: string;
	errorMessage: string;
	isError: boolean;
	onChangeFunction: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	className: string | null;
};

function FormInputField({
	name,
	type,
	label,
	placeholder,
	errorMessage,
	isError,
	onChangeFunction,
	value = "",
	className = null,
}: FormInputFieldArgs) {
	return (
		<Field
			className={`flex flex-col items-start gap-2 w-full ${className}`}>
			<Label>
				<span className="text-sm text-neutral-400">{label}</span>
			</Label>
			<Input
				className={`font-body text-base text-white transition-all block py-3 px-3 w-full bg-white/0 border-[0.5px] rounded-lg focus:outline-none data-[focus]:!bg-white/0 ${
					isError
						? "border-alert data-[hover]:!bg-red-400/10"
						: "!border-white/80 data-[focus]:!border-blue-400 data-[hover]:!bg-gray-400/10"
				}`}
				name={name}
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={(e) => onChangeFunction(e)}
			/>
			{isError && (
				<Description>
					<p className="text-sm text-alert">{errorMessage}</p>
				</Description>
			)}
		</Field>
	);
}

export default FormInputField;
