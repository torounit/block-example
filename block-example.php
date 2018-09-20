<?php

/**
 * Plugin name: Block Example
 * Version: 1.0.0
 */


add_action( 'init', function () {
	//wp_enqueue_script( 'block-example-script', plugins_url( 'dist/main.js', __FILE__ ) );

	wp_register_script(
		'block-example-script',
		plugins_url( 'dist/main.js', __FILE__ ) ,
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ],
		1
	);

	register_block_type( 'block-example/basic', [
		'script' => 'block-example-script',
	] );

	wp_add_inline_script(
		'block-example/basic',
		sprintf(
			'var block_example = { localeData: %s };',
			json_encode( gutenberg_get_jed_locale_data( 'block-example' ) )
		),
		'before'
	);
} );