import { FC, SVGProps } from 'react';
import styled from '@emotion/styled';
import { Icons } from './Icons';

export type AvailableIcons = keyof typeof Icons;

export type Props = {
	/**  Icon name */
	name: AvailableIcons;
	/** Width and height  */
	size?: number;
} & SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({ name, size = 24, ...rest }) => {
	const Icon = styled(Icons[name])`
		fill: '#000000';
	`;
	const sizeInRem = `${size}rem`;
	const sizes = { width: sizeInRem, height: sizeInRem };

	return <Icon role='img' aria-label={name} {...sizes} {...rest} />;
};
