import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import PageTitle from './PageTitle';
import { v4 as uuidv4 } from 'uuid';
import PageWrapper from './PageWrapper';

export default function Blog() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/posts', {
			method: 'GET',
		})
			.then(data => data.json())
			.then(posts => setPosts(posts))
			.catch(e => console.error(e.message));
	}, []);

	return (
		<PageWrapper>
			<PageTitle title='Blog' desc='Blogs that are loved by the community. Updated every hour.' />
			<div className='mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{posts.map(items => (
					<BlogPost items={items} key={uuidv4()} />
				))}
			</div>
		</PageWrapper>
	);
}
