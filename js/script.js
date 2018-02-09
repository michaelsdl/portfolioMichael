function escrever() { //escreve "Olá Bem-vindo" na primeira linha
	var str;
	var msg = [];
	var tag = document.getElementsByTagName("p");
	msg[0] = "Olá Bem-Vindo(a)";
	str= msg[0];
	char1 = str.split('').reverse();
	var typer = setInterval(function() {
	    if (!char1.length) return clearInterval(typer);
	    next = char1.pop();
	    tag[0].innerHTML += next;
	}, 90);
	setTimeout( function(){escrever2(str, msg, tag)}, 1500);	
}
function escrever2(str, msg, tag){ //escreve "ao meu" na segunda linha
	msg[1] = "ao meu";
	str= msg[1];
 	char2 = str.split('').reverse();
	var typer = setInterval(function() {
	    if (!char2.length) return clearInterval(typer);
	    next = char2.pop();
	    tag[1].innerHTML += next; 
	}, 90);
	setTimeout( function(){escrever3(str, msg, tag)}, 800);
}
function escrever3(str, msg, tag){ //escreve "WebSite" na terceira linha
	msg[2] = "WebSite";
	str= msg[2];
	char3 = str.split('').reverse();
	var typer2 = setInterval(function() {
	    if (!char3.length) return clearInterval(typer2);
	    next = char3.pop();
	    tag[2].innerHTML += next;
	}, 90);		
}
function closeMenu(){
	var radioButton = document.querySelector("#rdMenu");
	radioButton.checked = false;
}
/*mostrar/esconder páginas*/
function abrirPg(pgNum){
	switch(pgNum) {
	    case 4:
	        var pgProjetos = document.querySelector(".container4");
			pgProjetos.style.display = "block";
			document.querySelector(".container3").style.display = "none";
			document.querySelector(".container2").style.display = "none";
			document.querySelector(".container").style.display = "none";
			closeMenu();
	        break;
	    case 3:
	        var pgContato = document.querySelector(".container3");
			pgContato.style.display = "block";
			document.querySelector(".container4").style.display = "none";
			document.querySelector(".container2").style.display = "none";
			document.querySelector(".container").style.display = "none";
			closeMenu();
	        break;
	    case 2:
	        var pgSobre = document.querySelector(".container2");
			pgSobre.style.display = "block";
			document.querySelector(".container3").style.display = "none";
			document.querySelector(".container4").style.display = "none";
			document.querySelector(".container").style.display = "none";
			closeMenu();
	        break;
	    default:
	        var pgHome = document.querySelector(".container");
			pgHome.style.display = "block";
			document.querySelector(".container3").style.display = "none";
			document.querySelector(".container2").style.display = "none";
			document.querySelector(".container4").style.display = "none";
			closeMenu();
	        break;
	} 
}
escrever();