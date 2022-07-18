import Modal from './Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button/Button';
import styled from '@emotion/styled';

export default {
	title: 'Components/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
	<Modal {...args}>
		<Button
			css={{
				color: '#222',
				fontWeight: 900,
				border: 'none',
				position: 'absolute',
				right: '5%',
				top: '0%',
				fontSize: '32px',
			}}
			text={'x'}
		/>
		<H1>로그인해주세요</H1>
	</Modal>
);

export const Basic = Template.bind({});
Basic.args = {
	css: {
		width: '15rem',
		height: '18rem',
		background: '#eee',
	},
	wrap: { background: '#00000075' },
};

const H1 = styled.h1`
	margin-top: 5%;
`;

const Template2: ComponentStory<typeof Modal> = (args) => (
	<Modal {...args}>
		<Button
			css={{
				color: '#222',
				fontWeight: 900,
				border: 'none',
				position: 'absolute',
				right: '5%',
				top: '0%',
				fontSize: '32px',
			}}
			text={'x'}
		/>
		<H1>직군 선택</H1>
		<Wrap>
			<Button
				css={{
					display: 'block',
					position: 'relative',
					color: '#222',
					backgroundColor: '#eee',
					width: '100%',
					height: '2rem',
					fontSize: '20px',
					border: '1px solid',
					borderColor: '#222',
					borderRadius: '25px',
					fontFamily: 'Roboto',
					fontWeight: 800,
				}}
				text={'개발'}
			/>
			<Button
				css={{
					display: 'block',
					position: 'relative',
					color: '#222',
					backgroundColor: '#eee',
					width: '100%',
					height: '2rem',
					fontSize: '20px',
					border: '1px solid',
					borderColor: '#222',
					borderRadius: '25px',
					fontFamily: 'Roboto',
					fontWeight: 800,
				}}
				text={'디자인'}
			/>
			<Button
				css={{
					display: 'block',
					position: 'relative',
					color: '#222',
					backgroundColor: '#eee',
					width: '100%',
					height: '2rem',
					fontSize: '20px',
					border: '1px solid',
					borderColor: '#222',
					borderRadius: '25px',
					fontFamily: 'Roboto',
					fontWeight: 800,
				}}
				text={'마켓팅'}
			/>
			<Button
				css={{
					display: 'block',
					position: 'relative',
					color: '#222',
					backgroundColor: '#eee',
					width: '100%',
					height: '2rem',
					fontSize: '20px',
					border: '1px solid',
					borderColor: '#222',
					borderRadius: '25px',
					fontFamily: 'Roboto',
					fontWeight: 800,
				}}
				text={'기획'}
			/>
			<Button
				css={{
					display: 'block',
					position: 'relative',
					color: '#222',
					backgroundColor: '#eee',
					width: '100%',
					height: '2rem',
					fontSize: '20px',
					border: '1px solid',
					borderColor: '#222',
					borderRadius: '25px',
					fontFamily: 'Roboto',
					fontWeight: 800,
				}}
				text={'기타'}
			/>
		</Wrap>
	</Modal>
);

export const Job = Template2.bind({});
Job.args = {
	css: {
		width: '15rem',
		background: '#eee',
	},
	wrap: { background: '#00000075' },
};

const Wrap = styled.div`
	width: 90%;
	margin: 10% auto 5%;
	> button {
		margin: 0 auto 10px;
	}
`;
