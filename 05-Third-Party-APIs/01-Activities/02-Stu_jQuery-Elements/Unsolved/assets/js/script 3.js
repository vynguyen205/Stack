// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var root = $('#root') // this is basically document.getElementById
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var author = $("<p>") 

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
author.text("~ Carol Dweck"); //the text method is the same as textContent in vanilla JS
// TODO: Add the class `plain` to the author element
author.addClass("plain");
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var quoteEl = $("<h1>")
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteEl.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.")
// TODO: Apply the class `fancy` to the quote element
quoteEl.attr("class", "fancy"); //or you can also do this quoteEl.addClass("fancy");
// TODO: Append the author element to the quote element
quoteEl.append(author) // you can append element or a new tag
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
root.append(quoteEl)