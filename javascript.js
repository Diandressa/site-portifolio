
let img = document.querySelectorAll('img');
let azul = document.querySelectorAll('.azul');
let ver = document.querySelectorAll('.vermelho');

let tempo = 3000
let n = 1
let c = 0

const voltar = document.querySelector('#voltar')

const menuItems = document.querySelectorAll('.menu a');

voltar.addEventListener('click', voltarTop)

function voltarTop(){
	window.scroll(0, 0)
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
	event.preventDefault();

	const element = event.target;
	//event.target qual target exatamente foi clicado do evento

	//getAtrribute pegar o valor do href
	const id = element.getAttribute('href');

	//passar o id para uma variável
	const to = document.querySelector(id).offsetTop;

	//offsetTop - função que diz qual o topo daquele id

	//window.scroll(x, y) - passar a coordenada do scroll
	//window.scroll(0, to)

	//passar a coordenada dentro do scroll como objeto
	window.scroll({
		top: to,
		behavior: "smooth",
		//comportamento suave
	});
}


const btnMobile = document.querySelector('#hamburguer');

function toggleMenu(event){
	if(event.type === 'touchstart'){
		event.preventDefault()
	}
	const navSmall = document.querySelector('.nav-small-dev');
	navSmall.classList.toggle('ativar')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function carrossel(n){

	img[n].src = "./imgs/ex" + (Math.floor(Math.random()*(7)+1)) + ".jpg"
		 
}
setInterval("carrossel(n)", tempo);


function cor(c){
	
	//console.log(c)
	if (c == 0){
		//azul[c].classList.replace('azul', 'vermelho')
		azul[c].classList.toggle('azul')
		azul[c].classList.toggle('vermelho')

		ver[c].classList.toggle('vermelho')
		ver[c].classList.toggle('azul')

	} else {
		azul[c].classList.toggle('azul')
		azul[c].classList.toggle('vermelho')

		ver[c].classList.toggle('vermelho')
		ver[c].classList.toggle('azul')
	}
	
}
setInterval("cor(c)", tempo);


function soma(){
	c++
	if (c >= 2){
		c = 0
	}
}
setInterval("soma()", tempo);


function random(){
	n = Math.floor(Math.random()*(7)+1)
}
setInterval("random()", tempo);

//console.log(Math.floor(Math.random()*(7)+1))

