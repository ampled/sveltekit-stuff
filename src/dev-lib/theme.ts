import { browser } from '$app/environment';

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export function swapTheme() {
	if (browser) {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			return 'light';
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			return 'dark';
		}
	}
}
