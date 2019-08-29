var OpenPopUp = document.getElementById("open-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    closePopup = document.getElementById("close-popup");
var requestURL = 'https://github.com/ArgotePazRamiro/Repositorio/blob/master/Llajtatour/json/recomendados.json';
var request = new XMLHttpRequest();
var information = document.querySelector('section');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function showplace(jsonObj, a) {
    var lugares = jsonObj['recomendados'];
    for (var i = 0; i < lugares.length; i++) {

        if (lugares[i].Lugar == a) {
            var myArticle = document.createElement('article');
            var myH1 = document.createElement('h1');
            var myH2 = document.createElement('h2');
            var myPara = document.createElement('p');

            myH1.textContent = lugares[i].Lugar;
            myH2.textContent = lugares[i].Municipio;
            myPara.textContent = lugares[i].Descripcion;

            myArticle.appendChild(myH1);
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara);

            information.appendChild(myArticle);
        }
    }

}
openpopup1.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Los Molinos');
});
openpopup2.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Laguna Corani');
});
openpopup3.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Puente del Libertador en Mizque');
});
openpopup4.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'La Fuente del Amor');
});
openpopup5.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Cavernas del Repechón');
});
openpopup6.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'La Angostura');
});
openpopup7.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Convento de San José');
});
openpopup8.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'El Tipnis');
});
openpopup9.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Misicuni');
});
openpopup10.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Yunga Pampa');
});
openpopup11.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Parque Ecoturístico San Isidro');
});
openpopup12.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'El Cristo de la Concordia');
});
openpopup13.addEventListener('click', function () {
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Parque Nacional Tunari');
});

closepopup.addEventListener('click', function () {
    document.querySelector('section').innerHTML = '';
    overlay.classList.remove('active')
});