var requestURL = 'https://github.com/ArgotePazRamiro/Repositorio/blob/master/Llajtatour/json/recomendados.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var contenidomostrar = request.response;
    datos(contenidomostrar);
}

function datos(jsonObj){
    var contenido = jsonObj['recomendados'];
    
    if(contenido[0].Lugar == 'Los Molinos'){
        var myartculo = document.createElement('h1')
        var titulociudad = document.createElement('h2');
        var historiaciudad = document.createElement('p');

        titulociudad.textContent = contenido[0].titulo;
        historiaciudad.textContent = contenido[0].historia;

        myartculo.appendChild(titulociudad);
        myartculo.appendChild(historiaciudad);
    }
}