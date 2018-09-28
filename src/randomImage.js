const { __, setLocaleData } = wp.i18n;
const { registerBlockType , query } = wp.blocks;

const RandomImage = ( { category } ) => {
	const src = 'http://lorempixel.com/400/200/' + category;
	return <img src={ src } alt={ category }/>;
};

registerBlockType( 'block-example/random-image', {
	title: 'Random Image',
	icon: 'format-image',
	category: 'example',
	attributes: {
		category: {
			type: 'string',
			default: 'nature'
		}
	},
	edit: props => {
		const { attributes: { category }, setAttributes } = props;
		function setCategory( event ) {
			const selected = event.target.querySelector( 'option:checked' );
			setAttributes( { category: selected.value } );
			event.preventDefault();
		}

		return (
			<div className={ props.className }>
				<RandomImage category={ category } />
				<form onSubmit={ setCategory }>
					<select value={ category } onChange={ setCategory }>
						<option value="animals">Animals</option>
						<option value="arch">Architecture</option>
						<option value="nature">Nature</option>
						<option value="people">People</option>
						<option value="tech">Tech</option>
					</select>
				</form>
			</div>
		);
	},
	save: props => {
		const { attributes: { category } } = props;
		return (
			<div>
				<RandomImage category={ category } />
			</div>
		);
	}
} );