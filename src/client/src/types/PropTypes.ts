import { ReactElement } from 'react';

export type BlogPostProps = {
	item: {
		title: string,
		excerpt: string,
		img: string
	}
}

export type InputProps = {
	id: string,
	type: string,
	label: string,
	iconLeft?: string | ReactElement,
	iconRight?: string | ReactElement,
}
