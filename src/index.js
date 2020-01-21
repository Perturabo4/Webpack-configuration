import * as $ from 'jquery';
import Post from '@models/Post';
// import file from './assets/file';
import car from './assets/car.jpg';
import csv from './assets/test2.csv';
// import xml from './assets/data.xml';
import './styles/styles.css';

const post = new Post('Webpack', car) ; 

$('pre').addClass('code').html(post.toString());
console.log(csv);

// console.log('json2: ', file);

// console.log('XML: ', xml);