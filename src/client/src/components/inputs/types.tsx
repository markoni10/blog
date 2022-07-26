import { ReactElement } from 'react';

export type InputProps = {
	id: string,
	type: string,
	label: string,
	iconLeft?: string | ReactElement,
	iconRight?: string | ReactElement,
}