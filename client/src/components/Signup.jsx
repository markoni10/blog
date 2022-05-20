import React from 'react';
import Input from './Input';
import { FiMail, FiLock, FiUnlock, FiUser, FiEye } from 'react-icons/fi';
import PageWrapper from './PageWrapper';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';

function Signup() {
	const inputStyle = {
		color: 'gray',
		fontSize: '1.25rem',
	};

	return (
		<PageWrapper>
			<PageTitle title='Signup' />
			<article>
				<div className='max-w-sm my-10 mx-auto p-4 xs:p-10 flex flex-col gap-4 xs:border-2 border-gray-100 rounded-md'>
					<header>
						<h1 className='font-bold text-2xl'>Create an account</h1>
						<span>
							or log in{' '}
							<Link className='text-blue-600' to='/login'>
								here
							</Link>
							.
						</span>
					</header>
					<form autoComplete='off' className='flex flex-col gap-4'>
						<Input type='text' label='Username' id='username' iconLeft={<FiUser style={inputStyle} />} />
						<Input type='text' label='Email' id='email' iconLeft={<FiMail style={inputStyle} />} />
						<PasswordInput
							label='Password'
							id='password'
							iconLeft={<FiUnlock style={inputStyle} />}
							iconRight={<FiEye style={{ cursor: 'pointer', ...inputStyle }} />}
						/>
						<PasswordInput
							label='Repeat Password'
							id='repeat-password'
							iconLeft={<FiLock style={inputStyle} />}
							iconRight={<FiEye style={{ cursor: 'pointer', ...inputStyle }} />}
						/>
						<button
							disabled
							className='p-3 mt-6 text-white duration-100 bg-blue-600 rounded-md shadow-md focus:shadow-none ring-offset-2 ring-blue-600 focus:ring-2 hover:bg-blue-700 font-bold text-md uppercase tracking-wide disabled:hover:bg-blue-400 disabled:bg-blue-400'>
							Submit
						</button>
					</form>
				</div>
			</article>
		</PageWrapper>
	);
}

export default Signup;
