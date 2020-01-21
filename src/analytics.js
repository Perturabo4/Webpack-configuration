function createAnalytics() {
    let counter = 0;

    let destoroyed = false;

    const listenet = () => counter ++;

    document.addEventListener('click', listenet);

    return {
        destroy() {
            document.removeEventListener('click', listenet);
            destoroyed = true;
        },
        getClicks() {
            return destoroyed ? 'Analytics is destroyed. Total clicks: ' + counter : counter;
        }
    }
}

window.analytics = createAnalytics();