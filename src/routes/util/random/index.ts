function intBetween(min: number, max: number) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function floatBetween(min: number, max: number) {
	return Math.random() * (max - min + 1);
}

function coinFlip() {
	return Math.random() > 0.5;
}
