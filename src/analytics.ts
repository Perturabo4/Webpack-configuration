import * as $ from 'jquery';

function createAnalytics(): object {
    let counter = 0;

    let destoroyed: boolean = false;

    const listenet = (): number => counter ++;

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

window['analytics'] = createAnalytics();