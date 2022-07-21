import React from 'react';
import Head from 'next/head';
import Header from '../Head/Header';
import { StyledLayout, Inner } from './Layout_style';
import Footer from '../Footer/Footer';
import Categoty from '../Category/Categoty';
import Aside from '../Aside/Aside';

type childType = {
	children: React.ReactNode;
};

function Layout({ children }: childType) {
	return (
		<StyledLayout>
			<Head>
				<title>devspace</title>
				<meta name='SNS' content='개발 커뮤니티 devspace' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<Categoty />
				<Inner>{children}</Inner>
				<Aside />
			</main>
			<></>
			<Footer />
		</StyledLayout>
	);
}

export default Layout;
