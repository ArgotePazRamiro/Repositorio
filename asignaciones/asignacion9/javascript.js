var recomendados = document.getElementById('reco');
var requestURL = 'https://argotepazramiro.github.io/Repositorio/asignaciones/asignacion9/recomendados.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var recomendados = request.response;
    populateHeader(recomendados);
}
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Lugar'];
    recomendados.appendChild(myH1);

    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['Municipio'];
    recomendados.appendChild(myH2);

    var myPara = document.createElement('p');
    myPara.textContent = 'Descripcion: ' + jsonObj['Descripcion'];
    recomendados.appendChild(myPara);
}