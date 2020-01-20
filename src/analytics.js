function createAnalytics() {
    let counter = 0;

    let isDestoroyed = false;

    const listenet = () => counter ++;

    document.addEventListener('click', listenet);

    return {
        destroy() {
            document.removeEventListener('click', listenet);
            isDestoroyed = true;
        },
        getClicks() {
            return isDestoroyed ? 'Analytics is destroyed': counter;
        }
    }
}

window.analytics = createAnalytics();