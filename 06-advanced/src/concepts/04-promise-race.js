
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    const renderValue = (value) => {
        element.innerHTML = value;
    }


}


const slowPromise = () => new Promise(resolve => {
setTimeout(())
})


