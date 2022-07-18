import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

//const Basic = (argu:Style)=> <_Button {...argu}>Button</_Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Template.story = {
	name: 'Default',
};

export const Basic = Template.bind({});
Basic.args = {
	css: {
		display: 'inline-block',
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'auto',
		bottom: 'auto',
		transform: 'none',
		color: '#444',
		backgroundColor: '#F1C40F',
		width: '4rem',
		height: '1.5rem',
		fontSize: '14px',
		border: 'none',
		fontFamily: 'Roboto',
		fontWeight: 800,
	},
	text: 'BUTTON',
};

export const Basic_round = Template.bind({});
Basic_round.args = {
	css: {
		display: 'inline-block',
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'auto',
		bottom: 'auto',
		transform: 'none',
		backgroundColor: '#E74C3C',
		color: '#fff',
		width: '4rem',
		height: '1.5rem',
		fontSize: '14px',
		border: 'none',
		borderRadius: '5px',
		fontFamily: 'Roboto',
		fontWeight: 800,
	},
	text: 'BUTTON',
};

export const Text = Template.bind({});
Text.args = {
	css: {
		display: 'inline-block',
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'auto',
		bottom: 'auto',
		transform: 'none',
		color: '#2ECC71',
		backgroundColor: '#fff',
		width: '4rem',
		height: '1.5rem',
		fontSize: '20px',
		border: 'none',
		fontFamily: 'Roboto',
		fontWeight: 800,
	},
	text: 'Text',
};

export const Outlined = Template.bind({});
Outlined.args = {
	css: {
		display: 'inline-block',
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'auto',
		bottom: 'auto',
		transform: 'none',
		color: '#369FFF',
		backgroundColor: '#fff',
		width: '4rem',
		height: '1.5rem',
		fontSize: '14px',
		border: '2px solid',
		borderColor: '#369FFF',
		borderRadius: '4px',
		fontFamily: 'Roboto',
		fontWeight: 800,
	},
	text: 'cancel',
};

export const Job = Template.bind({});
Job.args = {
	css: {
		display: 'inline-block',
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'auto',
		bottom: 'auto',
		transform: 'none',
		color: '#222',
		backgroundColor: '#eee',
		width: '10rem',
		height: '1.5rem',
		fontSize: '20px',
		border: 'none',
		borderColor: '#222',
		borderRadius: '25px',
		fontFamily: 'Roboto',
		fontWeight: 800,
	},
	text: '개발자',
};
