import {EventManager} from './EventManager.js';

let eventManager = new EventManager();

let gameStartEvent = (distance, name) => {
    console.log('plouf je suis le deuxième event', distance, name);
}

let gameSplitEvent = (distance, name) =>  {
    console.log('split method plouf.....', distance, name);
}

eventManager.attach('game.start', gameStartEvent, 0);
eventManager.attach('game.start', gameSplitEvent, 0);

eventManager.trigger('game.start', null, [50, 'test']);

// Attach event - ok

// Detach event - ok

// Trigger event - ok

// Execute event with parameters - ok

// Priority execute - ok