import styled from '@emotion/styled';
import React from 'react';

type Props = {
	children?: React.ReactNode;
	wrap?: { background?: string };
	css?: {
		width?: string;
		height?: string;
		background?: string;
	};
};

function Modal({ children, wrap, css }: Props) {
	console.log({ children, wrap, css });
	return (
		<Wrap {...wrap}>
			<StyledModal {...css}>{children}</StyledModal>
		</Wrap>
	);
}

export default Modal;

const Wrap = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	background: ${(props) => props.background};
	width: 100vw;
	height: 100vh;
`;
const StyledModal = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background: ${(props) => props.background};
`;
