'use strict';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'block-example/fa', {
	title: 'Font Awesome',
	icon: <FontAwesomeIcon icon={faFontAwesome} />,
	category: 'example',
	styles: [
		{ name: 'default', label: 'default', isDefault: true },
		{ name: 'style1', label: 'スタイル1' },
		{ name: 'style2', label: 'スタイル2' },
	],

	supports: {
		align: [ 'wide', 'full' ],
	},

	edit ( { className } ) {
		return <div className={ className }><FontAwesomeIcon icon={faFontAwesome}/> Basic example with Font Awesome! (editor)</div>;
	},
	save ( { className } ) {
		return <div className={ className }><FontAwesomeIcon icon={faFontAwesome}/> Basic example withFont Awesome!  (front)</div>;
	},
} );
