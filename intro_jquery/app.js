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

articleItems = $(".article-item").children("ul").remove();// your code goes here!
