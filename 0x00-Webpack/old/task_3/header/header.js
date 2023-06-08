import $ from 'jquery';
import image from '../assets/logo.jpg'
import './header.css'

const img = document.createElement("img");
img.src = image;
document.body.appendChild(img);
$('body').append('<p>Holberton Dashboard</p>');

console.log('Init header')