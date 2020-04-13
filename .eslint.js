const path = require('path');

module.exports = {
	extends: [
		'airbnb',
		'react-app',
		'prettier',
		'prettier/react'
	],
	plugins: [
		'prettier',
		'import'
	],
	parser: 'babel-eslint',
	rules: {
		'linebreak-style': 0,
		'prefer-const': 0,
		'spaced-comment': 0,
		'padded-blocks': 0,
		'import/imports-first': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0,
		'comma-dangle': 0,
		'no-shadow': 0,
		'arrow-body-style': 0,
		'quote-props': 0,
		'no-unused-vars': 1,
		'consistent-return': 0,
		'max-len': 0,
		'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
		'no-underscore-dangle': 'off',
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
		'jsx-a11y/label-has-associated-control': 'off',
		'react/prefer-stateless-function': ['off'],
		'react/jsx-filename-extension': ['off'],
		'react/forbid-prop-types': ['off'],
		'react/no-danger': 0,
		'react/prop-types': 0,
		'no-throw-literal': 'error',
		'no-bitwise': ['off'],
		'dot-notation': ['off'],
		'prettier/prettier': ['error'],
		'flowtype/define-flow-type': 1,
		'camelcase': ['off'],
		'jsx-a11y/label-has-for': ['off'],
		'no-nested-ternary': 'off',
		'react/no-this-in-sfc': 'off',
		'no-param-reassign': 'off',
	}
};