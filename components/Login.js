import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = ({ providers }) => {
	return (
		<div className='flex flex-col items-center space-y-20 pt-48'>
			<Image
				src='https://rb.gy/ogau5a'
				width={150}
				height={150}
				objectFit='contain'
			/>

			<div>
				{Object.values(providers).map(provider => (
					<div key={provider.name}>
						{/* https://devdojo.com/tailwindcss/buttons#_ */}
						<button
							className='relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'
							onClick={() =>
								signIn(provider.id, { callbackUrl: '/' })
							}
						>
							<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</span>
							<span className='absolute flex items-center justify-center text-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease'>
								Sign in with {provider.name}
							</span>
							<span className='relative invisible'>
								Sign in with {provider.name}
							</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Login;
