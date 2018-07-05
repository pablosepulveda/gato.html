var fabricaDeGatos = function (patas, colorPelaje) {
this.patas = patas = 4;
this.colorPelaje = "#FF7800"

this.hablar = function () {
		alert("quiero lasagna");
	}
}


// felix el gato
var felix = new fabricaDeGatos (2, "#000");
felix.hablar = function () {
	alert ("soy felix")
}

felix.hablar ();


var garfield = new fabricaDeGatos (4, "F37C22");

garfield.hablar ();

console.log (garfield)