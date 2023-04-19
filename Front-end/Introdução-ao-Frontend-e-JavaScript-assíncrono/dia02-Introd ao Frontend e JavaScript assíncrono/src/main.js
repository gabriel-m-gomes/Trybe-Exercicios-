import "./style.css";
import Swal from 'sweetalert2';

const btn = document.getElementById("btn");
const nameHero = document.querySelector('h2');
const token = '3568574396721505';
const img = document.querySelector("img")
const heros = 1000;
const url = `https://www.superheroapi.com/api.php/${token}`;

const randomId = () => Math.floor(Math.random() * heros);
img.src = ""
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomId();

  fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      nameHero.innerHTML = data.name;
    }).catch((error) => Swal.fire({
      title: `Héroi não encontrado`,
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool'
    }));
  })
  

  
  


