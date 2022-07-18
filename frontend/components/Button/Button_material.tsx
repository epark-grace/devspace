import React from 'react';
import Button from '@mui/material/Button';
type S = {
	sx: {
		'value'?: string;
		'color'?: string;
		'backgroundColor'?: string;
		'width'?: string;
		'height'?: string;
		'fontSize'?: string;
		'border'?: string;
		'borderRadius'?: string;
		'borderColor'?: string;
		'&:hover'?: {
			background?: string;
			color?: string;
			borderColor?: string;
		};
		'fontFamily'?: string;
	};
	variant: 'text' | 'contained' | 'outlined';
	text: string;
};

export const _Button = (props: S) => {
	const variant = props.variant;
	const sx = props.sx;
	const text = props.text;
	return (
		<Button variant={variant} sx={sx} disableElevation>
			{text}
		</Button>
	);
};
