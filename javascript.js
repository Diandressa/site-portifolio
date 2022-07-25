
let img = document.querySelectorAll('img');
let azul = document.querySelectorAll('.azul');
let ver = document.querySelectorAll('.vermelho');

let tempo = 3000
let n = 1
let c = 0

const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(){
	const navSmall = document.querySelector('.nav-small-dev');
	navSmall.classList.toggle('ativar')
}

btnMobile.addEventListener('click', toggleMenu)


function carrossel(n){

	img[n].src = "./imgs/ex" + (Math.floor(Math.random()*(7)+1)) + ".jpg"
		 
}
setInterval("carrossel(n)", tempo)


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
setInterval("cor(c)", tempo)


function soma(){
	c++
	if (c >= 2){
		c = 0
	}
}
setInterval("soma()", tempo)


function random(){
	n = Math.floor(Math.random()*(7)+1)
}
setInterval("random()", tempo)

//console.log(Math.floor(Math.random()*(7)+1))

