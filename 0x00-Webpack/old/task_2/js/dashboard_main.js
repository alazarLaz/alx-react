
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import image from '../assets/logo.jpg'


const img = document.createElement("img");
img.src = image;
document.body.appendChild(img);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));