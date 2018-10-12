'use strict';
import { __, setLocaleData } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/basic', {
	title: 'Example',
	icon: 'universal-access-alt',
	category: 'example',
	edit () {
		return <div>Basic example with JSX! (editor)</div>;
	},
	save () {
		return <div>Basic example with JSX! (front)</div>;
	},
} );
