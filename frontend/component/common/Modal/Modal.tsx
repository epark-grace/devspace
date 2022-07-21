import React from 'react';
import { StyledModal, ModalWrap } from './Modal_style';

type Props = {
	children?: React.ReactNode;
};

//function Modal({ children }: { children: React.ReactNode }) {
function Modal({ children }: Props) {
	return (
		<ModalWrap>
			<StyledModal>{children}</StyledModal>
		</ModalWrap>
	);
}

export default Modal;
