import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'block-example/filters/separator',
	( settings, name ) => {
		if ( name !== 'core/separator' ) {
			return settings;
		}

		return {
			...settings,
			supports: {
				align: ['wide', 'full'],
			},
		};

	}
);