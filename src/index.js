import generateJoke from "./generateJoke";  
import './styles/main.scss';
import clock1 from './images/clock.svg';
console.log(clock1)

const clock1Img = document.getElementById('laughImg');

clock1Img.data=clock1;
console.log(generateJoke())
console.log('hjkhk')