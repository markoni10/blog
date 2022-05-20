import React from 'react';
import Input from './Input';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import PageWrapper from './PageWrapper';
import PageTitle from './PageTitle';

function Login() {
	return (
		<PageWrapper>
			<PageTitle title='Login' />
			<article>
				<div className='max-w-sm my-10 mx-auto p-4 xs:p-10 flex flex-col gap-4 xs:border-2 border-gray-100 rounded-md'>
					<header>
						<h1 className='font-bold text-2xl'>Please log in to continue</h1>
						<span>
							or get an{' '}
							<a className='text-blue-600' href='/signup'>
								account
							</a>
							.
						</span>
					</header>
					<form autoComplete='off' className='flex flex-col gap-4'>
						<Input type='text' label='Email' id='email' icon={<FiMail style={{ color: 'gray', fontSize: '1.25rem' }} />} />
						<Input type='password' label='Password' id='password' icon={<FiLock style={{ color: 'gray', fontSize: '1.25rem' }} />} />
						<button className='p-3 mt-6 text-white duration-100 bg-blue-600 rounded-md shadow-md focus:shadow-none ring-offset-2 ring-blue-600 focus:ring-2 hover:bg-blue-700 font-bold text-md uppercase tracking-wide'>
							Submit
						</button>
					</form>
				</div>
			</article>
		</PageWrapper>
	);
}

export default Login;
