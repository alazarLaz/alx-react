import '../css/main.css'
import image from '../image/logo.jpg'
const $ = require("jquery");
const _ = require("lodash");




const img = document.createElement("img");
img.src = image;
img.id = 'logo'
document.body.appendChild(img);
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append('<button>Click here to get started</button>');
$("body").append('<p id="count"></p>');
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
