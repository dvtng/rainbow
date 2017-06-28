/* eslint-disable */

var React = window.React;
var ReactDOM = window.ReactDOM;
var stories = window.stories;

var rootEl = document.getElementById('root');

function error(message) {
    rootEl.textContent = message;
}

function renderStory() {
    var storyName = window.location.hash.length > 1
        ? window.location.hash.substr(1)
        : 'default';
    var Component = stories[storyName];

    if (Component == null) {
        error('Story "' + storyName + '" was not found. Did you export it?');
        return;
    } else {
        var element = typeof Component === 'function'
            ? React.createElement(Component)
            : Component;

        ReactDOM.render(element, rootEl);
    }
}

window.addEventListener('hashchange', function() {
    ReactDOM.unmountComponentAtNode(rootEl);
    renderStory();
});

renderStory();
