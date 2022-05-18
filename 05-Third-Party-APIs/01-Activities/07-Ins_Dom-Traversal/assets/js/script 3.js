// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
$('#top').children().css('color', 'yellow');
console.log($('#top').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(0).addClass('boxy');
//#top is the Id name in html
//.children is asking for the children of #top
//.ep(0) is selecting the very first child
//addClass is assigning the the class = 'boxy' to that first child that we selected earlier 
//eq(0) meaning picking the first direct child of the top id and add a blass boxy in there

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>'));
//adding nother li to the ul

// Uncomment the following line to style the list items
// $('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
