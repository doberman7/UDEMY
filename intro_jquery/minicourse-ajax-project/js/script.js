var $s=$("street").val();
console.log($s);
var $c=$("city").val();
console.log($c);

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

    streetViewURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address + '';
    $body.append('<p>streetViewURL</p>')
    $body.append('<img class="bgimg" src="streetViewURL">')

      // YOUR CODE GOES HERE!
    return false;
};
//apuntar formulario
$('#form-container').submit(loadData);
