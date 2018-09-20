'use strict';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType( 'block-example/basic', {
	title: 'example',
	icon: 'universal-access-alt',
	category: 'layout',
	edit() {
		return <div style={ blockStyle }>Basic example with JSX! (editor)</div>;
	},
	save() {
		return <div style={ blockStyle }>Basic example with JSX! (front)</div>;
	},
} );
