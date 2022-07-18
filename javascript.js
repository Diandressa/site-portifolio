
let img = document.querySelectorAll('img');
let azul = document.querySelectorAll('.azul');
let ver = document.querySelectorAll('.vermelho');

let tempo = 3000
let n = 1

setInterval("carrossel(n)", tempo)
function carrossel(n){
	
	img[n].src = "./imgs/ex" + (n+2) + ".jpg"
	console.log(n)	 
}

setInterval("cor(n)", tempo)
function cor(n){
	n = n-1
	azul[n].classList.replace('azul', 'vermelho')
	ver[n].classList.replace('vermelho', 'azul')
}

setInterval("soma()", tempo)
function soma(){
	n++
	console.log(n)
}


