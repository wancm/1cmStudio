import { Main } from './js/game'

window.onload = function () {
    var main = new Main();
    main.onLoad();
    main.start();
}