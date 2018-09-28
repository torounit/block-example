<?php

/**
 * Plugin name: Block Example
 * Version: 1.0.0
 */


if ( ! defined( 'GUTENBERG_DEVELOPMENT_MODE' ) ) {
	define( 'GUTENBERG_DEVELOPMENT_MODE', true );
}

add_action( 'init', function () {

	load_plugin_textdomain( 'block-example' );

	wp_enqueue_script( 'block-example-script', plugins_url( 'dist/main.js', __FILE__ ), [
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-editor',
		'wp-edit-post'
	] );

	wp_add_inline_script(
		'block-example-script',
		sprintf(
			'var block_example = { localeData: %s };',
			json_encode( gutenberg_get_jed_locale_data( 'block-example' ) )
		),
		'before'
	);

} );

add_filter( 'block_categories', function ( $categories ) {
	$categories[] = [
		'slug'  => 'example',
		'title' => __( 'Block Example', 'block-example' ),
	];

	return $categories;
} );