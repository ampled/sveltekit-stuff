/**
 * Same as splt_css_unit from svelte/internal, but lets you specify the default unit where the
 * original function only uses 'px'
 */
export default function splitCssUnit(value, unitIfNumber = 'px') {
    const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return split ? [parseFloat(split[1]), split[2] || unitIfNumber] : [value, unitIfNumber];
}
