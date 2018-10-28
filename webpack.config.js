const entryPointNames = [
	'blocks',
	'components',
	'editor',
	'utils',
	'viewport',
	'edit-post',
	'core-blocks',
	'nux',
];

const gutenbergPackages = [
	'api-request',
	'blob',
	'core-data',
	'data',
	'date',
	'deprecated',
	'dom',
	'element',
	'keycodes',
	'plugins',
	'shortcode',
];

const wordPressPackages = [
	'a11y',
	'dom-ready',
	'hooks',
	'i18n',
	'is-shallow-equal',
];

const externals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	tinymce: 'tinymce',
	moment: 'moment',
	jquery: 'jQuery',
	lodash: 'lodash',
	'lodash-es': 'lodash'
};

[
	...entryPointNames,
	...gutenbergPackages,
	...wordPressPackages,
].forEach( ( name ) => {
	externals[`@wordpress/${ name }`] = {
		window: ['wp', name],
	};
} );

module.exports = {
	output: {
		library: ['wp', '[name]'],
		libraryTarget: 'window',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	devtool: 'source-map',
	externals,
	resolve: {
		extensions: ['.js', '.jsx']
	},
	performance: { hints: false }
};