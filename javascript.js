
let img = document.querySelectorAll('img');
let azul = document.querySelectorAll('.azul');
let ver = document.querySelectorAll('.vermelho');

let tempo = 3000
let n = 1
let c = 0

setInterval("carrossel(n)", tempo)
function carrossel(n){

	img[n].src = "./imgs/ex" + (Math.floor(Math.random()*(7+1 - 1)+1)) + ".jpg"	 
}

setInterval("cor(c)", tempo)
function cor(c){
	
	console.log(c)
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

setInterval("soma()", tempo)
function soma(){
	c++
	if (c >= 2){
		c = 0
	}
}

setInterval("random()", tempo)
function random(){
	n = Math.floor(Math.random()*(7+1 - 1)+1)
}

//console.log(Math.floor(Math.random()*(7+1 - 1)+1))

