var vetorTeste = new Array();
var tamanhoListaResultado = 0;
var texto = "<ul data-role='listview'>";


function searchIMDB() {
    
    var inputSearch = document.getElementById("campo").value;
    $.getJSON("http://www.omdbapi.com/?s=" + inputSearch, function (dados) {
        $.each(dados.Search, function(i, busca) {
            
            texto += "<a href='#pageADC'onClick='exibirInfoItemClicado(" + tamanhoListaResultado + ");'>";
            texto += "<li id='" + i + "' name='" + busca.Title + "' >" + busca.Title;
            texto += "</li></a>";
            
            tamanhoListaResultado = tamanhoListaResultado + 1;
            
            vetorTeste[i] = new Array(busca.Title, busca.Type, busca.Poster, busca.Year);
            
            console.log(vetorTeste[i]);
                     
        });
        texto += "</ul>";
        $("#resultado").html(texto);
    });
    
}

function exibirInfoItemClicado(tamanho) {
    
    var nomeSelecionado = vetorTeste[tamanho][0];
    var tipoSelecionado = vetorTeste[tamanho][1];
    var posterSelecionado = "<img src='" + vetorTeste[tamanho][2] + "'>";
    var anoSelecionado = vetorTeste[tamanho][3];
    
    $("#nomeItemClicado").html(nomeSelecionado);
    $("#tipoItemClicado").html(tipoSelecionado);
    $("#idPoster").html(posterSelecionado);
    $("#idYear").html(anoSelecionado);
    
}

function camera(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
    });
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
};

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('google');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

