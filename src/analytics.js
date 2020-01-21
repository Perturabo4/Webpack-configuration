import * as $ from 'jquery';

function createAnalytics() {
    let counter = 0;

    let destoroyed = false;

    const listenet = () => counter ++;

    $(document).on('click', listenet);

    return {
        destroy() {
            $(document).off('click', listenet);
            destoroyed = true;
        },
        getClicks() {
            return destoroyed ? 'Analytics is destroyed. Total clicks: ' + counter : counter;
        }
    }
}

window.analytics = createAnalytics();