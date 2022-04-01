const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 550) {
		header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = '';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


const nome = document.querySelector("[data-nomeCompleto]");
const email = document.querySelector("[data-email]");
const comentario = document.querySelector("[data-comentario]");
const botaoEnviar = document.querySelector("[data-enviar]");

botaoEnviar.addEventListener('click', () => {


})
let Comentarios = fetch("https://localhost:5001/api/ComentarioUsuarios")
	.then((Response) => { return  Response.json() }).then((data) => {
		
	
	})

	