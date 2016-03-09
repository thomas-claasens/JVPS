/**
 * Postagezone model events
 */

// 'use strict';

// import {EventEmitter} from 'events';
// var Postagezone = require('./postagezone.model');
// var PostagezoneEvents = new EventEmitter();

// // Set max event listeners (0 == unlimited)
// PostagezoneEvents.setMaxListeners(0);

// // Model events
// var events = {
//   'save': 'save',
//   'remove': 'remove'
// };

// // Register the event emitter to the model events
// for (var e in events) {
//   var event = events[e];
//   Postagezone.schema.post(e, emitEvent(event));
// }

// function emitEvent(event) {
//   return function(doc) {
//     PostagezoneEvents.emit(event + ':' + doc._id, doc);
//     PostagezoneEvents.emit(event, doc);
//   }
// }

// export default PostagezoneEvents;
