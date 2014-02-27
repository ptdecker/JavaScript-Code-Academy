// Calculate some Fibonacci numbers to demonstrate 'for'
// loops, arrays, and 'if' statements.

/* To run this in JSFiddle, set HTML to:

<div id="console-log"></div>

CSS to:

{
.console-line
    font-family: monospace;
    margin: 2px;
}

And uncomment:

var consoleLine = "<p class=\"console-line\"></p>";
 
console = {
    log: function (text) {
        $("#console-log").append($(consoleLine).html(text));
    }
};

*/

var numberToDisplay = prompt("How many numbers do you want?");

var fibs = [];

if (numberToDisplay > 0) {
    fibs.push(0);
    if (numberToDisplay > 1) {
        fibs.push(1);
        for (var i = 2; i < numberToDisplay; i++) {
            fibs.push(fibs[i - 2] + fibs[i - 1]);
        }
    }
}

console.log(fibs); 
