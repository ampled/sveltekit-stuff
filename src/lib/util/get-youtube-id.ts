export default function getYoutubeId(url: string) {
	const regExp =
		/(?:[?&]v=|\/embed\/|\/shorts\/|\/1\/|\/v\/|https:\/\/(?:www\.)?youtu\.be\/)([^&\n?#]{11})/;
	const match = url?.match(regExp);
	if (match && match[1]?.length == 11) {
		return match[1];
	} else {
		return false;
	}
}
