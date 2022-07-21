import React from 'react';
import Link from 'next/link';
import { Nav } from './Category_style';

function Categoty() {
	return (
		<Nav>
			<ul>
				<li>
					<Link href='/'>
						<a>(임시)메인으로</a>
					</Link>
				</li>
				<li>
					<Link href='/develop'>
						<a>개발자</a>
					</Link>
				</li>
				<li>
					<Link href='/designer'>
						<a>디자이너</a>
					</Link>
				</li>
				<li>
					<Link href='#'>기획자</Link>
				</li>
				<li>
					<Link href='#'>마케팅</Link>
				</li>
			</ul>
		</Nav>
	);
}

export default Categoty;
