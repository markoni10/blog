import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import PageTitle from './PageTitle';
import { v4 as uuidv4 } from 'uuid';

export default function Blog() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/posts', {
			method: 'GET',
		})
			.then(data => data.json())
			.then(posts => setPosts(posts))
			.catch(e => console.error(e.message));
	}, []);

	return (
		<main className='my-10 mx-auto p-4 max-w-screen-xl lg:px-8 grid gap-5'>
			<PageTitle title='Blog' desc='Blogs that are loved by the community. Updated every hour.' />
			<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{posts.map(items => (
					<BlogPost items={items} key={uuidv4()} />
				))}
			</div>
		</main>
	);
}
