import styled from '@emotion/styled';

export const StyledHeader = styled.header`
	width: 100%;
	height: 4rem;
	position: absolute;
	display: flex;
	background: rgb(7, 0, 105);
	border: 1px solid;
	top: 0;
	z-index: 2;
	flex-wrap: nowrap;
	justify-content: space-between;
`;

// 헤더를 absolute로 띄우고,그 아래로 카테고리 컴포넌트가 밑에 깔려야
// 스크롤을 내려도 카테고리 컴포넌트의 윗부분에 빈 공간이 없습니다

export const HeaderBox = styled.div`
	min-width: 20%;
	max-height: 2.5rem;
	position: relative;
	margin-top: 0.75rem;
	border: 1px solid #fff;
`;
