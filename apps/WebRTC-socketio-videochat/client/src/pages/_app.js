import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@/styles/theme';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={darkTheme}>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

export default MyApp;
