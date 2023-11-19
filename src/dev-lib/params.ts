const options: Options = {
	field: { min: 0, max: 100 },
	nested: {
		expand: true,
		field: { min: 0, max: 100 }
	}
};

export type FieldOptions = {
	min?: number;
	max?: number;
	step?: number;
	unit?: string;
	choices?: any;
	custom?: boolean;
	expand?: boolean;
};

export type Options = {
	[field: string]: FieldOptions | { [nestedField: string]: FieldOptions };
};
