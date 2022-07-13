import { useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BlogContext } from '../contexts/BlogContext';

import BlogPost from './BlogPost';
import PageTitle from './PageTitle';
import PageWrapper from './PageWrapper';


export default function Blog() {
	const { fetchBlogs } = useContext(BlogContext);
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		if(!posts.length){
			fetchBlogs()
				.then(posts => setPosts(posts));
		}
	}, [fetchBlogs, posts]);

	return (
		<PageWrapper>
			<PageTitle title='Blog' desc='Blogs that are loved by the community. Updated every hour.' />
			<div className='mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{posts.map(items => (
					<BlogPost 
						items={items} 
						key={uuidv4()}
					/>
				))}
			</div>
		</PageWrapper>
	);
}
