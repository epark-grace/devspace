import React from 'react';
import styled from '@emotion/styled';
type Style = {
	css: {
		display?: string;
		position?: string;
		left?: string;
		right?: string;
		top?: string;
		bottom?: string;
		transform?: string;
		color?: string;
		backgroundColor?: string;
		width?: string;
		height?: string;
		fontSize?: string;
		border?: string;
		borderRadius?: string;
		borderColor?: string;
		fontFamily?: string;
		fontWeight?: number | string;
	};
	text: string;
	//variant: 'text' | 'contained' | 'outlined';
};

export const Button = (props: Style) => {
	//const variant = props.variant;
	const css = props.css;
	const text = props.text;
	return <Styled {...css}>{text}</Styled>;
};

const Styled = styled.button`
	display: ${(props) => props.display};
	position: ${(props) => props.position};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	transform: ${(props) => props.transform};
	background: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	border: ${(props) => props.border};
	border-radius: ${(props) => props.borderRadius};
	border-color: ${(props) => props.borderColor};
	font-family: ${(props) => props.fontFamily};
	font-weight: ${(props) => props.fontWeight};
	text-align: center;
`;
