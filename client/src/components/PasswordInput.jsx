import React, { useState } from 'react';
import { FiEyeOff } from 'react-icons/fi';

function PasswordInput({ id, label, iconLeft, iconRight }) {
	const [visible, setVisible] = useState(false);
	const [value, setValue] = useState('');

	const handleVisibility = () => {
		setVisible(!visible);
	};

	const handleInput = e => {
		e.preventDefault();

		setValue(() => e.target.value);
	};

	return (
		<div>
			<label htmlFor={id} className='block py-3 text-sm font-bold tracking-wide text-gray-500'>
				{label}
			</label>
			<div className='flex items-center p-2 px-4 border border-gray-300 rounded-md'>
				{iconLeft}
				<input
					onChange={handleInput}
					value={value}
					type={visible ? 'text' : 'password'}
					id={id}
					className='w-full p-1 ml-2 text-gray-500 outline-none focus-visible:outline-none bg-transparent'
				/>
				<span onClick={handleVisibility}>{visible ? iconRight : <FiEyeOff style={{ cursor: 'pointer', color: 'gray', fontSize: '1.25rem' }} />}</span>
			</div>
		</div>
	);
}

export default PasswordInput;
