// agregar  href = #1 , en html, linea 18
// <li class="nav-item"><a>Item #1</a></li>
$('.nav-item a').first().attr("href","#1");

/*
For this quiz, change the font-size of all the article-items to 20px!
You must use jQuery's css() method!
*/

// Start with this variable!

var articleItems;
articleItems = $(".article-item").css("font-size","20px");/// your code goes here!

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!
The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val
    val = $(this).val();
    $(".articles h1").text(val);
});

/*
For this quiz, remove the <ul> from the first article item!
You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").children("ul").remove();
/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

$("<div id='family2'> <h1>family2</h1> </div>").insertAfter("#family1");
$("#family2").append("<div id='bruce'> <h2>bruce</h2> </div>")
$("#bruce").append("<div id='madison'> <h3>madison</h3> </div>")
$("#bruce").append("<div id='hunter'> <h3>hunter</h3> </div>")

/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
var parLength, tex;
$("p").each(function(){
  parLength = $(this).text().length;
  tex = $(this).text();
  console.log("size es " + parLength)
  $(this).append(parLength);
  //console.log("el text es " + tex);
});
