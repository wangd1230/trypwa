if ('serviceWorker' in navigator) {
	try	{
		navigator.serviceWorker.register('sw.js');
		console.log('SW registered');
	} catch (error) {
		console.log('SW registered')
	}
}