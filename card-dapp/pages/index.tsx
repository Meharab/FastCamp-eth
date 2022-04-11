import Head from 'next/head';
import { styled } from '../stitches.config';
import Nav from '../components/Nav';
import Container from '../components/Container';

export default function Home() {
	return (
		<>
			<Head>
				<title>Business Card</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<Nav />
				<h1>ERC-20 Business Card</h1>
				<Container />
			</Main>
		</>
	);
}

const Main = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	margin: 'auto',
	justifyContent: 'center',
	'& h1': {
		marginTop: '2rem',
		fontWeight: 'lighter',
		fontSize: '1.5rem',
	},
});
