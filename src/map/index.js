'use strict';

import { __, setLocaleData } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/editor';
import { PanelBody, ToggleControl, SelectControl  } from '@wordpress/components';

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/map', {
	title: 'Map',
	description: 'GoogleMap',
	icon: 'location',
	category: 'example',
	attributes: {
		query: {
			type: 'string',
			default: ''
		},
	},
	edit ( { className, attributes, setAttributes, isSelected } ) {
		let { foo, hoge } = attributes;
		return [
			<InspectorControls>
				<PanelBody title="パネルのタイトル">
				</PanelBody>
			</InspectorControls>,
			<div className={ className }>
				<iframe src="https://maps.google.co.jp/maps?output=embed&q=原宿駅"></iframe>
			</div>
		];
	},

	save ( { className, attributes, isSelected } ) {
		let { foo, hoge } = attributes;
		return (
			<aside className={ `${className ? className : ''} ${hoge ? 'hoge' : ''} ${foo}` }>
				<InnerBlocks.Content/>
			</aside>
		);
	}
} );
