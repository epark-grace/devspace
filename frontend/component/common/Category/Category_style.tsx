import styled from '@emotion/styled';

export const Nav = styled.nav`
	position: fixed;
	background: linear-gradient(rgb(7, 0, 105) 10%, rgb(255, 199, 199));
	border: 1px solid;
	width: calc((100vw - 1280px) / 2);
	height: 100vh;
	& {
		ul {
			margin-top: 5rem;
			color: #fff;
			list-style: none;

			li {
				margin: 1rem 0.5rem;
			}
		}
	}
`;
