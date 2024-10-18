type FormError = {
	[fieldName: string]: string;
};

type FormErrorStatus = {
	[fieldName: string]: boolean;
};

type FormInput = {
	[fieldName: string]: string;
};

export type { FormError, FormErrorStatus, FormInput };
