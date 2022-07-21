import Layout from '../component/common/Layout/Layout';
import Develop from '../component/develop/Develop.page';
import { useRouter } from 'next/router';
import React from 'react';

const Pages = () => {
	const router = useRouter();
	const query = router.query.id;

	console.log(router.query.id);
	let component;

	switch (query) {
		case 'develop':
			component = <Develop />; // 1.

			break;

		case 'designer':
			return <Layout>TEST~~~</Layout>; // 2. component 변수를 두가지 방식으로 사용할 수 있습니다.
		default:
			break;
	}

	return (
		<>
			<Layout>{component}</Layout>;
		</>
	);
};

export default Pages;
