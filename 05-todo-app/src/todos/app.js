import html from './app.html?raw'

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //Cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();



}