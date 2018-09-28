'use strict';

const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

setLocaleData( window.block_example.localeData, 'block-example' );

registerBlockType( 'block-example/editable', {
	title: 'Editable',
	icon: 'universal-access-alt',
	category: 'example',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: ( props ) => {
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName="p"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		return <RichText.Content tagName="p" value={ props.attributes.content }/>;
	},
} );
