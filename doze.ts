//Supported functions
// -- Doze : seconds
// -- DozeMS: miliseconds

export function doze(seconds: number) {
    return dozeInternal(seconds*1000);
}

export function dozeMS(mseconds: number) {
    return dozeInternal(mseconds);
}

function dozeInternal(msecs: number) {
    return new Promise(resolve => setTimeout(resolve, msecs));
}