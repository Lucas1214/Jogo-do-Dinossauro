 var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");



let pontuacao = -1;
let maximopontuacao = 0;



function jump() {


if(dino.classList != "animate"){
  dino.classList.add("animate");
}
setTimeout(function() {
  dino.classList.remove("animate");
},500);

  
}
var checkFim = setInterval(function(){ 
 var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  
 var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
	
	if(cactusLeft<40 && cactusLeft>0 && dinoTop >=130){
	 cactus.style.animation = "none";
	 cactus.style.display = "none";
	  alert("perdeu Jovem!");
	  
	}
  
},10);

