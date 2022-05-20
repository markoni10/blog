import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import PageTitle from './PageTitle';
import { v4 as uuidv4 } from 'uuid';
import PageWrapper from './PageWrapper';

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

	const emptyPosts = [
		{
			id: 1,
			title: 'Post 1',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
		{
			id: 2,
			title: 'Post 2',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
		{
			id: 3,
			title: 'Post 3',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
		{
			id: 4,
			title: 'Post 4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
		{
			id: 5,
			title: 'Post 5',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
		{
			id: 6,
			title: 'Post 6',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam nostrum neque saepe dicta fuga?',
			authorName: 'John Doe',
		},
	];

	return (
		<PageWrapper>
			<PageTitle title='Blog' desc='Blogs that are loved by the community. Updated every hour.' />
			<div className='mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{(posts.length ? posts : emptyPosts).map(items => (
					<BlogPost items={items} key={uuidv4()} />
				))}
			</div>
		</PageWrapper>
	);
}
