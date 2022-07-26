interface PageTitleProps {
	title: string,
	desc?: string
}

function PageTitle({ title, desc }: PageTitleProps) {
	return (
		<div className='text-left'>
			<h1 className='text-7xl text-gray-800 font-semibold'>{title}</h1>
			<p className='mt-3 text-xl text-gray-500'>{desc}</p>
		</div>
	);
}

export default PageTitle;
