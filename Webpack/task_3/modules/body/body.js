import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#start-btn').on('click', _.debounce(updateCounter, 500));
