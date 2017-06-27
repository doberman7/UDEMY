//https://mega.nz/register#!ZM1RAaqT!BSzzHj5D-EWUsvZkMTeb4zurUGORVfNzOLXqFpcpmH4

function loadData() {


    /*
    The $ that shows up in variable names, like $body for example, is just a character like any other. In this case, it refers to the fact that the variable referenced by $body is a jQuery collection, not a DOM node.
    */
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');


    // load nytimes
    // obviously, replace all the "X"s with your own API key
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=30f3bcd3905d40a596982ef54001764c';
    $.getJSON(nytimesUrl, function(data){

        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
            '</li>');
        };

    }).error(function(e){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });


    // load wikipedia data
    //Fuente1: https://discussions.udacity.com/t/cannot-load-wikipedia-api/18995
    //Fuente2: https://discussions.udacity.com/t/wikipedia-api-search-link/215830/5
    //Funete3: https://en.wikipedia.org/w/api.php
    $.ajax({
      /*IMPORTANTE: necesario es action=opensearch, protocolo de busqueda abierta, fuente: https://en.wikipedia.org/w/api.php?action=help&modules=opensearch*/
      url: 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + streetStr + '&format=json&callback=wikiCallback',
      dataType: 'jsonp',
      
      success: function(data) {

      $("#wikipedia-links").text('Wiki article about '+address);

      var urls = data[3];//array with Url froms the response
      var articles = data[1];//array with Articles titles froms the response

      $.each(articles,function(index, article){
        //On the wikiElem append the a link the corresponding URL, only the article title is shown in the text
        $wikiElem.append('<li><a href="'+urls[index]+'">'+article+ '</a></li>');
      });
      //Solucion del ejercicio
      // for (var i = 0; i < articles.length; i++) {
      //     var article = articles[i];
      //     var url = 'http://en.wikipedia.org/wiki/' + address;
      //     //console.log(url);
      //     $wikiElem.append('<li><a href="'+url+'">'+
      //         article+ '</a></li>');
      //     };
      },
      error: function (e) {
        $wikiHeaderElem.text('Cannot get article');
      }
    });
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
