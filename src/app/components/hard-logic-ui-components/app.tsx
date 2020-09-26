import React from 'react';

interface HardUILogicAppProps {
	title: string;
}

export const HardUILogicApp = ({ title }: HardUILogicAppProps) => {
	return (
		<>
			<h1>{title}</h1>
		</>
	)
};