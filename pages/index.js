import Head from 'next/head';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Twitter</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
				<Sidebar />
				{/* Feed */}
				{/* Widgets */}

				{/* Modal */}
			</main>
		</div>
	);
}
