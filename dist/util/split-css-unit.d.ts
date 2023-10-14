/**
 * Same as splt_css_unit from svelte/internal, but lets you specify the default unit where the
 * original function only uses 'px'
 */
export default function splitCssUnit(value: number | string, unitIfNumber?: string): [number, string];
