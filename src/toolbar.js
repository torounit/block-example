const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
	RichText,
	BlockControls,
	AlignmentToolbar,
} = wp.editor;

registerBlockType( 'block-example/hello-world-step-04', {
	title: 'Hello World (Step 4)',

	icon: 'universal-access-alt',

	category: 'example',

	attributes: {
		content: {
			source: 'html',
			selector: 'p',
		},
		alignment: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		const { content, alignment } = attributes;

		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
		}

		function onChangeAlignment( newAlignment ) {
			setAttributes( { alignment: newAlignment } );
		}

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
				<RichText
					key="editable"
					tagName="p"
					className={ className }
					style={ { textAlign: alignment } }
					onChange={ onChangeContent }
					value={ content }
				/>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const { content, alignment } = attributes;

		return (
			<RichText.Content
				className={ className }
				style={ { textAlign: alignment } }
				value={ content }
				tagName="p"
			/>
		);
	},
} );