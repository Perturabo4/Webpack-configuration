import Post from './Post';
import file from './assets/file';
import car from './assets/car.jpg';
import './styles/styles.css';

const post = new Post('Webpack', car);


console.log(post.toString());

console.log('json2: ', file);