'use strict';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'block-example/basic', {
	title: 'Example',
	icon: 'universal-access-alt',
	category: 'example',
	styles: [
		{ name: 'default', label: 'default', isDefault: true },
		{ name: 'style1', label: 'スタイル1' },
		{ name: 'style2', label: 'スタイル2' },
	],

	supports: {
		align: [ 'wide', 'full' ],
	},

	edit ( { className } ) {
		return <div className={ className }>Basic example with JSX! (editor)</div>;
	},
	save ( { className } ) {
		return <div className={ className }>Basic example with JSX! (front)</div>;
	},
} );
