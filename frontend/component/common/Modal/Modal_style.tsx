import styled from '@emotion/styled';

export const ModalWrap = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	z-index: 5;
	background: #000000ad;
`;

export const StyledModal = styled.div`
	position: fixed;
	width: 15rem;
	height: 10rem;
	background: #e5e5e5;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	p{
		position:relative;
	}
	}
`;
