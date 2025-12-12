/**
 * Tailwind CSS Class Name Helpers
 * Utilities for merging and conditionally applying Tailwind classes
 */

/**
 * Merge Tailwind classes intelligently
 * Filters out falsy values and joins classes with space
 * @param {...string|boolean|undefined} classes - Classes to merge
 * @returns {string} Merged class string
 */
export const mergeClasses = ( ...classes ) => {
  return classes.filter( Boolean ).join( ' ' );
};

/**
 * Conditionally apply classes based on condition
 * @param {string} classes - Classes to apply
 * @param {boolean} condition - Condition to check
 * @returns {string} Classes if condition is true, empty string otherwise
 */
export const classIf = ( classes, condition ) => {
  return condition ? classes : '';
};

/**
 * Create responsive classes for different breakpoints
 * @param {Object} breakpoints - Object with breakpoint keys and class values
 * @returns {string} Merged responsive classes
 */
export const responsiveClasses = ( breakpoints ) => {
  const classes = [];
  
  if ( breakpoints.mobile ) classes.push( breakpoints.mobile );
  if ( breakpoints.tablet ) classes.push( `md:${ breakpoints.tablet }` );
  if ( breakpoints.desktop ) classes.push( `lg:${ breakpoints.desktop }` );
  if ( breakpoints.wide ) classes.push( `xl:${ breakpoints.wide }` );
  
  return mergeClasses( ...classes );
};

/**
 * Apply conditional Tailwind hover/focus states
 * @param {string} baseClasses - Base Tailwind classes
 * @param {string} hoverClasses - Classes to apply on hover
 * @param {string} focusClasses - Classes to apply on focus
 * @returns {string} Merged classes with states
 */
export const interactiveClasses = ( baseClasses, hoverClasses = '', focusClasses = '' ) => {
  const classes = [ baseClasses ];
  if ( hoverClasses ) classes.push( `hover:${ hoverClasses }` );
  if ( focusClasses ) classes.push( `focus:${ focusClasses }` );
  return mergeClasses( ...classes );
};

/**
 * Create variant class selector (e.g., primary, secondary)
 * @param {string} variant - Variant name
 * @param {Object} variants - Object mapping variant names to classes
 * @returns {string} Classes for the variant
 */
export const variantClasses = ( variant, variants ) => {
  return variants[ variant ] || variants.default || '';
};

/**
 * Scope classes with block namespace prefix
 * @param {string} blockName - Block name (e.g., 'hero-banner')
 * @param {string} classes - Classes to scope
 * @returns {string} Classes with moraqmen prefix
 */
export const scopeClasses = ( blockName, classes ) => {
  const prefix = `moraqmen-${ blockName }`;
  return `${ prefix } ${ classes }`;
};
