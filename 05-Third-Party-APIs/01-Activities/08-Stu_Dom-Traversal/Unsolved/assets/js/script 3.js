// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children("ul").css('backgroundColor', 'white')
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().eq(3).children(0).eq(0).text("O")
//rootEl is refering to the #root id in html
//asking for its children, then selecting the child number 3, then asking for the first child of child number 3
//then put text O into that first child of child nuber 3