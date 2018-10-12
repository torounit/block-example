/**
 * Given a string, returns a new string with dash separators converedd to
 * camel-case equivalent. This is not as aggressive as `_.camelCase` in
 * converting to uppercase, where Lodash will convert letters following
 * numbers.
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel-cased string.
 */
function camelCaseDash ( string ) {
	return string.replace(
		/-([a-z])/g,
		( match, letter ) => letter.toUpperCase()
	);
}

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
		window: ['wp', camelCaseDash( name )],
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
	}
};