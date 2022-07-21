import React from 'react';
import { StyledModal, ModalWrap } from './Modal_style';
function ModalPost({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<ModalWrap>
			<StyledModal>
				<input type='text' />
				<button onClick={() => setOpen(false)}>x</button>
			</StyledModal>
		</ModalWrap>
	);
}

export default ModalPost;
