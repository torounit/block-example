import { __, setLocaleData } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/editor';

import { Component, renderToString, Fragment } from '@wordpress/element';
import {
	Button,
	Placeholder,
	Spinner,
	SandBox,
	IconButton,
	Toolbar,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

setLocaleData( window.block_example.localeData, 'block-example' );

export default class Edit extends Component {
	constructor () {
		super( ...arguments );

		this.setKeyword = this.setKeyword.bind( this );
		this.switchBackToKeywordInput = this.switchBackToKeywordInput.bind( this );

		this.state = {
			editingKeyword: false,
			keyword: this.props.attributes.keyword,
		};
	}

	switchBackToKeywordInput () {
		this.setState( { editingKeyword: true } );
	}

	setKeyword ( event ) {
		if ( event ) {
			event.preventDefault();
		}
		const { keyword } = this.state;
		const { setAttributes } = this.props;
		this.setState( { editingKeyword: false } );
		setAttributes( { keyword } );
	}

	render () {
		const { keyword, editingKeyword } = this.state;
		const { fetching, setAttributes, isSelected, className } = this.props;
		const cannotEmbed = false;
		const controls = (
			<Fragment>
				<BlockControls>
					<Toolbar>
						{ (
							<IconButton
								className="components-toolbar__control"
								label={ __( 'Edit KeyWord' ) }
								icon="edit"
								onClick={ this.switchBackToKeywordInput }
							/>
						) }
					</Toolbar>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Media Settings' ) } className="blocks-responsive">
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);

		// translators: %s: type of embed e.g: "YouTube", "Twitter", etc. "Embed" is used when no specific type exists
		const label = __( 'Map keywords' );

		if ( editingKeyword || !keyword ) {
			return (
				<Placeholder icon='location' label={ label } className="wp-block-embed">
					<form onSubmit={ this.setKeyword }>
						<input
							type="text"
							value={ keyword || '' }
							className="components-placeholder__input"
							aria-label={ label }
							placeholder={ __( 'Enter keyword to search here…' ) }
							onChange={ ( event ) => this.setState( { keyword: event.target.value } ) }/>
						<Button
							isLarge
							type="submit">
							{ __( 'Embed' ) }
						</Button>
						{ cannotEmbed &&
						<p className="components-placeholder__error">{ __( 'Sorry, we could not embed that content.' ) }</p> }
					</form>
				</Placeholder>
			);
		}

		return (
			<div>
				{ controls }
				{
					<iframe src={ `https://maps.google.co.jp/maps?output=embed&q=${keyword}` }/>
				}
			</div>
		);
	}
}