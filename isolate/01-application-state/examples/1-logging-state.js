'use strict';

/* Logging State

  To understand application development, you need to understand state
  State changes over time as users interact with it

  You can understand and debug your apps by storing a record of all
  - state changes (how did application state change at each step?)

  This is called "logging"

  Clear logs are like a debugger for the big-picture of your project
  the debugger lets you step through each individual step of your application
    - Implementation
    this very specific view helps to fix specific bugs
    but can make it hard to understand the big picture of your application
  logging changes to important data in your will help you to see the big picture
    - Behavior
    seeing how the application progresses over longer period of times
    with the clutter of extra variables removed for clarity

*/

// --- initialize the application ---

// this variable stores useful data for the user
//  it is the application state
const state = {
  favorite: -1,
  words: []
};
// this variable stores useful data for developers
//  it is a log of all user interactions and state changes
//  logs like this one are incredibly helpful for debugging
const stateLog = [
  deepClone(state)
];


// --- add random strings to state ---

// this variable is used by the program to manage control flow
//  it is part of program state
//  it is not part of application state
const range = Math.ceil(Math.random() * 10);

for (let i = 0; i < range; i++) {
  // this variable stores the random string
  //  the data it stores may become part of application state
  const randomWord = Math.random().toString(36).substring(7);
  alert(`entering random string: "${randomWord}"`);
  // add nextInput to program state
  state.words.push(randomWord);
  // log the state change
  stateLog.push(deepClone(state));

};


// --- randomly select a saved word ---

// the following variables will not become part of application state
// they are part of program state, but not application state

// renderedWords stores part of state rendered to a string
const renderedWords = state.words.reduce((msg, next, index) => {
  return `${msg}\n${index}. ${next}`;
}, '');
// stores a full rendered message
const message = `these are the random strings: ${renderedWords}`;
alert(message);
// stores the random array index
const favoriteIndex = Math.ceil(Math.random() * (range - 1));
alert(`favorite index: ${favoriteIndex}`);

// use that word to update state.favorite
state.favorite = favoriteIndex;
// access the selected word from state.words
const favoriteWord = state.words[state.favorite];
// log state change
stateLog.push(deepClone(state));

alert(`favorite word:\n ${state.favorite}. ${favoriteWord}`);


// print the stateLog:
//  all state changes
console.log(stateLog);
