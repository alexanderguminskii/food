"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          cards = require('./modules/cards'),
          forms = require('./modules/forms'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          slider = require('./modules/slider'),
          calculator = require('./modules/calculator');

    tabs();
    cards();
    forms();
    modal();
    timer();
    slider();
    calculator();
});