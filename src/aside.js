'use strict';

import { __, setLocaleData } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/editor';
import { PanelBody, ToggleControl, SelectControl  } from '@wordpress/components';

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/aside', {
	title: 'Aside',
	description: 'aside contents',
	icon: 'universal-access-alt',
	category: 'example',
	attributes: {
		hoge: {
			type: 'boolean',
			default: false
		},
		foo: {
			type: 'string',
			default: 'none',
		},
	},
	edit ( { className, attributes, setAttributes, isSelected } ) {
		let { foo, hoge } = attributes;
		return [
			<InspectorControls>
				<PanelBody title="パネルのタイトル">
					<ToggleControl
						label={ 'Hoge' }
						checked={ hoge }
						onChange={ () => setAttributes( { hoge: !hoge } ) }
					/>
					<SelectControl
						label={ __( 'Foo' ) }
						value={ undefined !== foo ? foo : 'none' }
						// `undefined` is required for the foo attribute to be unset.
						onChange={ ( value ) => setAttributes( { foo: ( 'none' !== value ) ? value : undefined } ) }
						options={ [
							{ value: 'buz', label: 'buz' },
							{ value: 'bar', label: 'bar' },
							{ value: 'buzz', label: 'buzz' },
						] }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className={ className }>
				<InnerBlocks/>
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
