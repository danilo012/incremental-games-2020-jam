import {App} from "./App";
import * as ko from 'knockout';
import * as $ from 'jquery';
import 'foundation-sites';

import './index.scss';


declare global {
    interface Window {
        App: App;
    }
}

/**
 * Start the application when all html elements are loaded.
 */
$(function () {
    App.start();

    $().foundation(); //this should init the tabs but it doesnt

    // Expose the App class to the window (and the console)
    if (process.env.DEBUG && typeof window !== undefined) {

        console.log('Exposing App to console');
        window.App = App;
    }


    ko.applyBindings(App.game, document.getElementById('body'));

    console.log("Launched");
});


