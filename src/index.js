import * as $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Post from '@models/Post';
// import file from './assets/file';
import car from './assets/car.jpg';
import './babel.js';
import csv from './assets/test2.csv';
// import xml from './assets/data.xml';
import './styles/styles.css';
import './styles/less.less';
import './styles/sass.scss';

const post = new Post('Webpack', car) ; 

$('pre').addClass('code').html(post.toString());
console.log(csv);


const App = () => {
    return (
        <div className="container">
            <h1>Content</h1>
            <hr/>
            <div className="logo"></div>

            <hr/>
            <pre></pre>

            <hr/>
            <div className="box">
                <h2>LESS</h2>
            </div>

            <div className="cart">
                <h2>SASS</h2>
            </div>
        </div>
        )
}
ReactDOM.render(<App />, document.getElementById('root'));
// console.log('json2: ', file);

// console.log('XML: ', xml);