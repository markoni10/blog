import React, { useEffect, useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

function Message({ type, message }) {
	const [removed, setRemoved] = useState();

	useEffect(() => {
		const messageVisible = localStorage.getItem('messageRemoved');
		setRemoved(() => messageVisible);
	}, []);

	const handleClick = event => {
		localStorage.setItem('messageRemoved', true);
		setRemoved(() => true);
	};

	const getType = type => {
		switch (type) {
			case 'success':
				return 'bg-green-600';
			case 'danger':
				return 'bg-red-600';
			case 'info':
				return 'bg-yellow-600';
			default:
				return 'bg-blue-600';
		}
	};

	const backgroundColor = getType(type);

	return (
		!removed && (
			<section className={`max-w-sm mx-auto flex justify-between items-center text-white p-3 text-sm ${backgroundColor}`}>
				<p>{message}</p> <FiXCircle style={{ cursor: 'pointer' }} onClick={handleClick} />
			</section>
		)
	);
}

export default Message;
