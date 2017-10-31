import $ from 'jquery';

export default (text = 'Say Hello to my little friend: rat-ta-ta-ta-ta-ta') => {
    const element = document.createElement('div');

    let mathVal = 10;

    element.className = 'fa fa-hand-spock-o fa-1g';
    element.innerHTML = text;

    return {element, mathVal};
};

$(document).ready(function() {
    console.log('hey');
});