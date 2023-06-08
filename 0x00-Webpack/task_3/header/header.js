const $ = require("jquery");
import './header.css'
import image from '../image/logo.jpg'

const img = document.createElement("img");
img.src = image;
img.id = 'logo'
document.body.appendChild(img);
$("body").append("<p>Holberton Dashboard</p>");

console.log('header')