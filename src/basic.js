'use strict';
import { __, setLocaleData } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/basic', {
	title: 'Example',
	icon: 'universal-access-alt',
	category: 'example',
	styles: [
		{ name: 'default', label: __( 'Rounded' ), isDefault: true },
		{ name: 'outline', label: __( 'Outline' ) },
		{ name: 'squared', label: __( 'Squared' ) },
	],
	edit ( { className, attributes, setAttributes, isSelected } ) {
		return (
			<div className={ className }>Basic example with JSX! (editor)</div>
		);
	},
	save ( { className, attributes, setAttributes, isSelected } ) {
		return <div className={ className }>Basic example with JSX! (front)</div>;
	},
} );
