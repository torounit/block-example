'use strict';

import { __, setLocaleData } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/editor';
import { PanelBody, ToggleControl, SelectControl  } from '@wordpress/components';
import edit from './edit'

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/map', {
	title: 'Map',
	description: 'GoogleMap',
	icon: 'location',
	category: 'example',
	attributes: {
		keyword: {
			type: 'string',
			default: '原宿駅'
		},
	},
	edit,
	save ( { className, attributes, isSelected } ) {
		let { keyword } = attributes;
		return (
			<iframe src={`https://maps.google.co.jp/maps?output=embed&q=${keyword}`} />

		);
	}
} );
