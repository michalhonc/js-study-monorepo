import React from 'react';
import Head from 'next/head';
import css from '@/styles/Home.module.scss';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={css.main}>
        Homepage
			</main>

			<footer>
			</footer>
		</div>
	);
}
