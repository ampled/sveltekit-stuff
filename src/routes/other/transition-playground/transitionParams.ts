// import type { BlurParams } from 'svelte/transition';
// import type { BlurParams } from 'svelte/transition';
import type * as t from 'svelte/transition';
import * as e from 'svelte/easing';
import type { RotateParams, ScaleXYParams } from '$lib';
import type { Options } from '$dlib/params';

type ParamObject<T = any> = {
	title: string;
	options: Options;
	params: T | any;
};

type StringEasing<T> = Omit<T, 'easing'> & { easing: keyof typeof e };

const baseOptions: Options = {
	easing: { choices: Object.keys(e) },
	duration: { min: 0, max: 10000, step: 100 },
	opacity: { min: 0, max: 1, step: 0.1 }
};

const baseParams = {
	delay: 0,
	duration: 400
};

const blurParams: StringEasing<t.BlurParams> = {
	...baseParams,
	easing: 'cubicInOut',
	amount: 5,
	opacity: 0
};

export const blur: ParamObject<StringEasing<t.BlurParams>> = {
	title: 'BlurParams',
	options: { ...baseOptions },
	params: blurParams
};

const fadeParams: StringEasing<t.FadeParams> = {
	...baseParams,
	easing: 'linear'
};

export const fade: ParamObject<StringEasing<t.FadeParams>> = {
	title: 'FadeParams',
	options: { ...baseOptions },
	params: fadeParams
};

const flyParams: StringEasing<t.FlyParams> = {
	...baseParams,
	easing: 'cubicOut',
	x: 0,
	y: 0,
	opacity: 0
};

export const fly: ParamObject<StringEasing<t.FlyParams>> = {
	title: 'FlyParams',
	options: { ...baseOptions },
	params: flyParams
};

const slideParams: StringEasing<t.SlideParams> = {
	...baseParams,
	easing: 'cubicOut',
	axis: 'y'
};

export const slide: ParamObject<StringEasing<t.SlideParams>> = {
	title: 'SlideParams',
	options: { ...baseOptions },
	params: slideParams
};

const scaleParams: StringEasing<t.ScaleParams> = {
	...baseParams,
	easing: 'cubicOut',
	start: 0,
	opacity: 0
};

export const scale: ParamObject<StringEasing<t.ScaleParams>> = {
	title: 'ScaleParams',
	options: { ...baseOptions },
	params: scaleParams
};

const rotateParams: StringEasing<RotateParams> = {
	...baseParams,
	easing: 'backOut',
	rotation: 45,
	x: 0,
	y: 0,
	opacity: 0
};

export const rotate: ParamObject<StringEasing<RotateParams>> = {
	title: 'RotateParams',
	options: { ...baseOptions, rotation: { step: 10, min: 1, max: 1080 } },
	params: rotateParams
};

const scaleXYParams: StringEasing<ScaleXYParams> = {
	...baseParams,
	easing: 'backOut',
	x: 0,
	y: 0,
	opacity: 0
};

export const scaleXY: ParamObject<StringEasing<ScaleXYParams>> = {
	title: 'ScaleXYParams',
	options: { ...baseOptions },
	params: scaleXYParams
};
