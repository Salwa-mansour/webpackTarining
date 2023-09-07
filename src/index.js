import generateJoke from "./generateJoke";  
import './styles/main.scss';
import clock1 from './images/clock.svg';

const clock1Img = document.getElementById('laughImg');

clock1Img.data=clock1;


const jokeBtn =document.getElementById('jokeBtn');
jokeBtn.addEventListener("click",generateJoke)

generateJoke()