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
    $body.append("<p>"+streetViewURL+"</p>");
    $body.append('<img class="bgimg" src="'+streetViewURL+'">')

      // YOUR CODE GOES HERE!
    return false;
};
//apuntar formulario
$('#form-container').submit(loadData);
