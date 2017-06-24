$(document).ready(function(){

  function loadData() {
      var $body = $('body');
      var $wikiElem = $('#wikipedia-links');
      var $nytHeaderElem = $('#nytimes-header');
      var $nytElem = $('#nytimes-articles');
      var $greeting = $('#greeting');

      // clear out old data before new request
      $wikiElem.text("");
      $nytElem.text("");
      // load streetview
      var streetStr = $("#street").val();
      var cityStr = $("#city").val();
      var address = streetStr + ", " + cityStr;

      $greeting.text('So you wanto to live at '+ address + "?");
                        //Deberia funcionar:
                        //https://maps.googleapis.com/maps/api/streetview?size=600x300&location=24 willie mays plaza, san francisco, ca&key=AIzaSyDpNKawxZsx5OBc_vGKjMA4Ny3FlBZomQM
                        //https://maps.googleapis.com/maps/api/streetview?size=600x300&location=24%20willie%20mays%20plaza,%20san%20francisco,%20ca&key=AIzaSyDpNKawxZsx5OBc_vGKjMA4Ny3FlBZomQM
      streetViewURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address + '&key=AIzaSyDpNKawxZsx5OBc_vGKjMA4Ny3FlBZomQM';
      //anexar al cuerpo la imagen devuelta por googleapis
      $body.append('<img class="bgimg" src="'+streetViewURL+'">');

      //asignar api nytimes concatenar la variable "ciudad" y  concatenar  la llave de la API

      var nytimesURL = 'https://api.nyAtimes.com/svc/search/v2/articlesearch.json?q='+cityStr+'&api-key=30f3bcd3905d40a596982ef54001764c'



      //SOLICITAR JSON---------------------
      $.getJSON(nytimesURL , function( data ){

        //mostrat texto "Articulos", concatenar variable cityStr
        $nytHeaderElem.text('Articulos'+cityStr);

        //asignar dentro el response:object, y dentro de este el docs Array(N), N siendo en numero de articulos devueltos
        articles = data.response.docs;


        //iterar en cada articulo,
        $.each(articles, function(index, article) {
          //anexar item de lista, concatenar un lick con el url, el headline y un snippet

          $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>' + '<p>'+article.snippet+'</p>'+'</li>');
        });
        //An alternative construct to the error callback option, the .fail() method replaces the deprecated .error() method.
      }).fail("error", function error() {
        alert( "ALgo salio mal" );
      });//Fin de JSON request

      return false;
  };

  $('#form-container').submit(loadData);

});
