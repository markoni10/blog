import React from 'react';

function BlogPost({ items }) {
	return (
		<article className='max-w-md mx-auto mt-4 shadow-md rounded-md duration-300 hover:shadow-xl cursor-pointer'>
			<a href='/'>
				<img
					src={items.img}
					loading='lazy'
					alt={items.title}
					className='flex items-center justify-center w-full h-48 rounded-t-md bg-gray-200 before:text-gray-300 before:font-bold before:text-2xl before:tracking-wide'
				/>
				<div className='flex items-center mt-2 pt-3 ml-4 mr-2'>
					<div className='flex-none w-10 h-10 rounded-full'>
						{/* <img
							src={items.authorLogo}
							className='flex items-center justify-center overflow-hidden bg-gray-300 before:text-gray-400 before:text-xs before:text-center before:opacity-0 w-full h-full rounded-full'
							alt={items.authorName}
						/> */}
					</div>
					<div className='ml-3'>
						{/* <span className='block text-gray-900'>{items.authorName}</span> */}
						<span className='block text-gray-400 text-sm'>{items.date_created}</span>
					</div>
				</div>
				<div className='pt-3 ml-4 mr-2 mb-3'>
					<h3 className='text-xl text-gray-900'>{items.title}</h3>
					<p className='text-gray-400 text-sm mt-1'>{items.excrept}</p>
				</div>
			</a>
		</article>
	);
}

export default BlogPost;
