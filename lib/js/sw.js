(() => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/buurthuiskeijenburg/service-worker.js');
	}
})();
