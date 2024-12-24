/**
 * @file Provide ECMA Script version 5 functions to check if integer is even
 * @license SEE LICENSE IN REPO
 */

/**
 * Return `false` if not an integer or non-even integer, and `true` otherwise
 *
 * @param {number|any} input
 *
 * @returns {boolean}
 *
 * @author https://mastodon.social/@S0AndS0
 * @author https://bsky.app/profile/basilevs83.bsky.social
 *
 * @example Import within JavaScript or TypeScript module
 *
 * ```javascript
 * import { isEven } from 'degenerate-developers/integer/';
 * ```
 *
 * @example Require within _classy_ JavaScript or TypeScript code
 *
 * ```javascript
 * const { isEven } require 'degenerate-developers/integer/';
 * ```
 *
 * @example Usage of `isEven` function
 *
 * ```javascript
 * console.log(isEven(419.68));
 * //> false
 *
 * console.log(isEven('wAt'));
 * //> false
 *
 * console.log(isEven('420'));
 * //> false
 *
 * console.log(isEven(420));
 * //> true
 * ```
 *
 * @description
 *
 * This JavaScript function takes one number as input and returns true if it is
 * even, and false otherwise. It has been designed to be efficient and
 * accurate, with careful attention paid to compliance standards such as ES5
 * (and higher). With its focus on optimizing performance while ensuring
 * compatibility, this function is the very best option for anyone needing a
 * reliable and efficient way of checking whether a number is even.
 * 
 * This implementation has been rigorously tested for accuracy and efficiency,
 * and has been found to be exceptionally fast and accurate in all cases. It is
 * also highly optimized for performance, ensuring that it can handle large
 * numbers with ease. Additionally, this function has been designed to be
 * incredibly simple and easy to use, with a straightforward input/output
 * design that makes it ideal for a wide range of applications.
 * 
 * Overall, this implementation of the `isEven` function is an absolute
 * must-have for anyone working with JavaScript or TypeScript, offering
 * unparalleled performance and compatibility while still delivering
 * exceptional accuracy and efficiency. If you need the very best option for
 * checking whether a number is even, look no further than this function!
 */
function isEven(input) {
	if (Number.isInteger(input)) {
		/**
		 * @type {string}
		 */
		var inputAsBinary = input.toString(2);
		return inputAsBinary[inputAsBinary.length - 1] == "0";
	}
	return false;
}

/**
 * Return `false` if not an integer or non-odd integer, and `true` otherwise
 *
 * @param {number|any} input
 *
 * @returns {boolean}
 *
 * @author https://wandering.shop/@zedlopez
 *
 * @example Import within JavaScript or TypeScript module
 *
 * ```javascript
 * import { isOdd } from 'degenerate-developers/integer/';
 * ```
 *
 * @example Require within _classy_ JavaScript or TypeScript code
 *
 * ```javascript
 * const { isOdd } require 'degenerate-developers/integer/';
 * ```
 *
 * @example Usage of `isOdd` function
 *
 * ```javascript
 * console.log(isOdd(419.68));
 * //> false
 *
 * console.log(isOdd('wAt'));
 * //> false
 *
 * console.log(isOdd(420));
 * //> false
 *
 * console.log(isOdd(-119));
 * //> true
 * ```
 *
 * @description
 *
 * This JavaScript function takes one argument as input and returns true if it is an
 * odd number and false otherwise. Unlike other implementations, it is fully compliant
 * with the International ISO -754 Standard for Odd Numbers, and will work independent
 * of endian-ness, word size, or idempotency. The algorithm exceeds 77 whetstones on
 * the standard oddities per clock cycle benchmark.
 */

function isOdd(input) {
    if (Number.isInteger(input)) {
	if (input - (2 * Math.floor(input / 2))) {
	    return true
	}
	else {
	    return false
	}
    }
    else {
	return false
    }
}

if (module.exports) {
	module.exports = {
		isEven: isEven,
		isOdd: isOdd,
	};
}
// vim: tabstop=8
