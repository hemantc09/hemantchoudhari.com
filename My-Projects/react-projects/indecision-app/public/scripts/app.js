'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

//only render subtitle  and p tag : if subtile exit = logical and
// render new p tag if option.length ? 0 'here are option' else 'option'

var app = {
    title: 'Indecision react app',
    subtitle: 'Put your life in your hands',
    options: ['one']
};
var user = {
    name: 'Hemant',
    age: 25,
    location: 'Los Angeles'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

//create app object title/subtile
//use title/subtile in template
// inside h1 below { 'jscode' } is the simple javascript

//if statement
//ternary operator
//logical and operator
function getLocation(location) {
    //user object has location then it will pass and print the location
    //else nothing
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' +1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
