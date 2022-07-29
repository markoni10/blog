import { truncate } from 'lodash-es';

type BlogPostProps = {
	item: {
		title: string,
		excerpt: string,
		img: string
	}
}

function BlogPostListItem({item: {title, excerpt}}: BlogPostProps) {
	return (
		<article className='min-w-full max-w-md mx-auto mt-4 cursor-pointer'>
			<a href='/'>
				<h3 className='text-xl text-gray-900'>{title}</h3>
                <p>{truncate(excerpt)}</p>
			</a>
		</article>
	);
}

export default BlogPostListItem;
