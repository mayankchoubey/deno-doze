/**
 * Asynchronously sleep for given seconds.
 * @param {number} seconds - The seconds for which to sleep asynchronously.
 * @returns {Promise}
 * @example
 * await doze(1);
 */
export function doze(seconds: number) {
    return dozeInternal(seconds*1000);
}

/**
 * Asynchronously sleep for given milliseconds.
 * @param {number} milliseconds - The milliseconds for which to sleep asynchronously.
 * @returns {Promise}
 * @example
 * await dozeMS(100);
 */
export function dozeMS(mseconds: number) {
    return dozeInternal(mseconds);
}

/**
 * Asynchronously sleep for given milliseconds.
 * @private
 * @param {number} milliseconds - The milliseconds for which to sleep asynchronously.
 * @returns {Promise}
 * @example
 * await dozeInternal(100);
 */
function dozeInternal(msecs: number) {
    return new Promise(resolve => setTimeout(resolve, msecs));
}