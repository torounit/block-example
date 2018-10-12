'use strict';
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, Panel, PanelRow, ToggleControl } = wp.components;

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
		}
	},
	edit ( { className, attributes, setAttributes, isSelected } ) {
		console.log( attributes );
		return [
			<InspectorControls>
				<PanelBody title="パネルのタイトル">
					<ToggleControl
						label={ wp.i18n.__( 'Hoge' ) }
						checked={ attributes.hoge }
						onChange={ () => setAttributes( { hoge: !attributes.hoge } ) }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className={ className }>
				<InnerBlocks/>
			</div>
		];
	},

	save ( { className,attributes,  isSelected  } ) {
		return (
			<aside className={ `${className} ` + (attributes.hoge ? 'hoge' : '') }>
				<InnerBlocks.Content/>
			</aside>
		);
	}
} );
