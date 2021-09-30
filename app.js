var carta1={
	nome: "Doutor Estranho",
	imagem:"https://img.elo7.com.br/product/zoom/2AD93B1/placa-decorativa-quadro-filme-doutor-estranho-v638-filme.jpg",
	atributos:{
		ataque:7,
		defesa:8,
		Destruição:4,
		magia:10	}
};


var carta2={
	nome: "Homem de Ferro",
	imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/02/homem-de-ferro-tony-divulgacao.jpg",
	atributos:{
		ataque:7,
		defesa:6,
		Destruição:7,
		magia:0

	}
};


var superTrunfo={
	nome: "Hulk",
	imagem:"https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/11/images-18-1.jpg",
	atributos:{ 
		ataque:10,
	 	defesa:10,
	  	Destruição:10,
	   	magia:0
	}
};


var cartaMaquina;
var cartaJogador;
var cartas=[carta1,carta2,superTrunfo];



function sortearCarta(){
	var numeroCartaMaquina=parseInt(Math.random()*3);
	cartaMaquina = cartas[numeroCartaMaquina];

	var numeroCartaJogador=parseInt(Math.random()*3);
	
		//Achar o erro
	while (numeroCartaMaquina == numeroCartaJogador) {
	numeroCartaJogador = parseInt(Math.random()*3);	
}
	cartaJogador = cartas[numeroCartaJogador];
	console.log(cartaJogador);	

	document.getElementById("btnSortear").disabled = true;
	document.getElementById("btnJogar").disabled = false;
	exibirCartaJogador()
}

function exibirCartaJogador(){
	var divCartaJogador=document.getElementById("carta-jogador")
	divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
	var moldura='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
	var tagHTML="<div id='opcoes' class='carta-status'>"

	var opcoesTxt =""

	for (var atributo in cartaJogador.atributos) {
    opcoesTxt +=
      "<input type='radio' class='inputRadio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
	var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

	divCartaJogador.innerHTML= moldura + nome + tagHTML+ opcoesTxt + "</div>"
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar(){
	var atributoSelecionado = obtemAtributoSelecionado();

	var divResultado = document.getElementById("resultado")
	
	if (cartaJogador.atributos[atributoSelecionado]>cartaMaquina.atributos[atributoSelecionado]) {
		//elementoResultado.innerHTML=vencedor
		htmlResultado="<p class='resultado-final'>Parabens você venceu!</p>"
	}
	else if(cartaJogador.atributos[atributoSelecionado]<cartaMaquina.atributos[atributoSelecionado]){
		//elementoResultado.innerHTML=perdedor
		htmlResultado="<p class='resultado-final'>Que pena, você perdeu.</p>"
	}
	else{
		//elementoResultado.innerHTML=empate	
		htmlResultado="<p class='resultado-final'>Parece que deu empate... Mais sorte da próxima vez!</p>"
		
	}

	divResultado.innerHTML=htmlResultado;
	document.getElementById("btnJogar").disable =true;	

	exibirCartaMaquina()
}

function exibirCartaMaquina(){
	var divCartaMaquina=document.getElementById("carta-maquina")
	divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
	var moldura='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
	var tagHTML="<div id='opcoes' class='carta-status'>"

	var opcoesTxt =""

	for (var atributo in cartaMaquina.atributos) {
    opcoesTxt +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
	var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

	divCartaMaquina.innerHTML= moldura + nome + tagHTML+ opcoesTxt + "</div>"
}
