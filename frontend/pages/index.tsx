import type { NextPage } from 'next';
import Layout from '../component/common/Layout/Layout';
import Main from '../component/main/Main.page';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Main />
			</Layout>
		</>
	);
};

export default Home;
