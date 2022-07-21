import React from 'react';
import { AsideBox, AsideWrap, StyledAside } from './Aside_style';

function Aside() {
	return (
		<StyledAside>
			<AsideWrap>
				<AsideBox>실시간 댓글</AsideBox>
				<AsideBox>실시간 좋아요</AsideBox>
			</AsideWrap>
		</StyledAside>
	);
}

export default Aside;
