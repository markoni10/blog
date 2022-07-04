import React from 'react';
import Message from './Message';

function Dashboard({ token, handleLogin }) {
	if (!token) {
		return (
			<main>
				{handleLogin}
				<Message type='success' message='You need to login first.' />
			</main>
		);
	}

	return <h1>Dashboard</h1>;
}

export default Dashboard;
