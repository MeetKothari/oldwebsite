/*
File: script.js
Date of Creation: 12/15/22
GUI Assignment: Implementing a Bit of Scrabble with Drag-and-Drop (with Extra Credits)
Meet Kothari, UMass Lowell Computer Science, meet_kothari@student.uml.edu
This web page is a part of my submission for HW5.
*/

// GLOBAL VARIABLES
let total  = 0; 
let stored = 0;

// JSON provided by the assignment, TA said ok to use
var pieces = {
    "pieces": [
        {"letter":"A", "value":1, "amount":9},
	    {"letter":"B", "value":3, "amount":2},
	    {"letter":"C", "value":3, "amount":2},
	    {"letter":"D", "value":2, "amount":4},
	    {"letter":"E", "value":1, "amount":12},
	    {"letter":"F", "value":4, "amount":2},
	    {"letter":"G", "value":2, "amount":3},
	    {"letter":"H", "value":4, "amount":2},
	    {"letter":"I", "value":1, "amount":9},
	    {"letter":"J", "value":8, "amount":1},
	    {"letter":"K", "value":5, "amount":1},
	    {"letter":"L", "value":1, "amount":4},
	    {"letter":"M", "value":3, "amount":2},
	    {"letter":"N", "value":1, "amount":5},
	    {"letter":"O", "value":1, "amount":8},
	    {"letter":"P", "value":3, "amount":2},
	    {"letter":"Q", "value":10, "amount":1},
	    {"letter":"R", "value":1, "amount":6},
	    {"letter":"S", "value":1, "amount":4},
	    {"letter":"T", "value":1, "amount":6},
	    {"letter":"U", "value":1, "amount":4},
	    {"letter":"V", "value":4, "amount":2},
	    {"letter":"W", "value":4, "amount":2},
	    {"letter":"X", "value":8, "amount":1},
	    {"letter":"Y", "value":4, "amount":2},
	    {"letter":"Z", "value":10, "amount":1}
    ],
    "creator":"Ramon Meza"
}
// Generate tiles upon page load
$(document).ready(function () { 
    generateTiles();
    draggableCreate();
    droppableCreate();
});

// Button functions!
function reset(){
    generateTiles();
    location.reload();
}

function submit(){
    let stored = total;
    $('#score').html(stored);
    generateTiles();
    draggableCreate();
    droppableCreate();

}

// tile generator function
function generateTiles() {
    let tiles = ""; 
    // reference: https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json
    // picks 7 numbers at random
    var tileVals = [];
    for (let i = 0; i < 7; i++) {
        var random = pieces.pieces[Math.floor(Math.random() * pieces.pieces.length)];
        // console.log(random);
        tileVals.push(random.letter); // push the letter element of the random.json into the array
        var letter_value = tileVals[i]; // set the letter value to be equal to the ith value of the letter from the for loop
        tiles += "<img id='tileNum" + i + "' class='board-piece" + letter_value + "' src='" + "images/Scrabble_Tile_" + letter_value + ".jpg" + "'></img>"; 
        //i++;
        // console.log(tiles);
    }

    $('#tiles').html(tiles); // push the tiles onto html

}


// make all of the tiles draggable
//https://stackoverflow.com/questions/24897480/jquery-how-do-i-make-sure-draggable-can-only-be-dragged-to-2-places
function draggableCreate(){
    $(function (){    
        $("#tileNum0").draggable ({ 
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) { $(this).css("background-color", ui.draggable.attr("id"));} // change the color of the tile when being dragged
        });
    });
    
    $(function (){    
        $("#tileNum1").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });
    });
    
    $(function (){    
        $("#tileNum2").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });

    $(function (){    
        $("#tileNum3").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });

    $(function (){    
        $("#tileNum4").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });

    $(function (){    
        $("#tileNum5").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });
    
    $(function (){    
        $("#tileNum6").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });
    
    $(function (){    
        $("#tileNum7").draggable ({
            revert : function(event, ui) {
                $(this).data("uiDraggable").originalPosition = {
                    top : 0,
                    left : 0
                };
                // return boolean
                return !event;
                // that evaluate like this:
                // return event !== false ? false : true;
            },
            cursor: "move",
            drop: 
            function( event, ui ) {
                $(this).css("background-color", ui.draggable.attr("id"));
            }
        });

    });
}

// handles the droppable areas (board tiles)
function droppableCreate(){
    $(function() {
        // create dict with key value pairs to represent the letters and their values
        // letter -> in-game score
        const letterVals = {
            "A":1, 
	    "B":3, 
	    "C":3, 
	    "D":2, 
	    "E":1, 
	    "F":4, 
            "G":2, 
            "H":4, 
            "I":1, 
            "J":8, 
            "K":5, 
            "L":1, 
            "M":3, 
            "N":1, 
            "O":1, 
            "P":3, 
            "Q":10, 
            "R":1, 
            "S":1, 
            "T":1, 
            "U":1, 
            "V":4, 
            "W":4, 
            "X":8, 
            "Y":4, 
            "Z":10, 
            };
            
            $(".dz").droppable({ // allow the tiles to accept
                hoverClass: 'active',
                drop: function( event, ui ) {
                    // console.log('drop');
                    $(this).addClass('dropped');
                    var id = Array.from(ui.draggable.attr("class")); // take the class, slice the string and put each letter into an array
                    let letterDropped = id[11]; // get the 12th index of the word, contains the letter name
                    // console.log(typeof(letterDropped));
                    let score = "";
                    let key = letterVals[letterDropped]; // use the dict to find the corresponding val
                    // console.log(key);
                    score += key;
                    let scoreInt = parseInt(score); // score in form of int
                    // let total = "";
                    total += scoreInt; // update global variable
                    console.log(total);
                    //$('#score').html(total);
                },
                
                over: function( event, ui ) {
                    // over droppable        
                    //console.log('over');
                    ui.helper
                    .addClass("ui-over")
                    .addClass($(this).attr('id'));
                },
                
                out: function( event, ui ) {
                    // not over droppable
                    //console.log('out');
                    // reset
                    ui.helper
                    .removeClass("ui-over")
                    .removeClass("container1")
                    .removeClass("container2");
                }
            });

            $(".doubdz").droppable({ // allow the tiles to accept (double letter)
                hoverClass: 'active',
                drop: function( event, ui ) {
                    // console.log('drop');
                    $(this).addClass('dropped');
                    var id = Array.from(ui.draggable.attr("class")); // take the class, slice the string and put each letter into an array
                    let letterDropped = id[11]; // get the 12th index of the word, contains the letter name
                    // console.log(typeof(letterDropped));
                    let score = "";
                    let key = letterVals[letterDropped]; // use the dict to find the corresponding val
                    // console.log(key);
                    let dkey = key * 2; // apply multiplier
                    score += dkey;
                    let scoreInt = parseInt(score); // score in form of int
                    // let total = "";
                    total += scoreInt; // update global variable
                    console.log(total);
                    //$('#score').html(total);
                },
                
                over: function( event, ui ) {
                    // over droppable        
                    //console.log('over');
                    ui.helper
                    .addClass("ui-over")
                    .addClass($(this).attr('id'));
                },
                
                out: function( event, ui ) {
                    // not over droppable
                    //console.log('out');
                    // reset
                    ui.helper
                    .removeClass("ui-over")
                    .removeClass("container1")
                    .removeClass("container2");
                }
            });

            $(".tripdz").droppable({ // allow the tiles to accept (double letter)
                hoverClass: 'active',
                drop: function( event, ui ) {
                    // console.log('drop');
                    $(this).addClass('dropped');
                    var id = Array.from(ui.draggable.attr("class")); // take the class, slice the string and put each letter into an array
                    let letterDropped = id[11]; // get the 12th index of the word, contains the letter name
                    // console.log(typeof(letterDropped));
                    let score = "";
                    let key = letterVals[letterDropped]; // use the dict to find the corresponding val
                    // console.log(key);
                    let tkey = key * 3; // apply multiplier
                    score += tkey;
                    let scoreInt = parseInt(score); // score in form of int
                    // let total = "";
                    total += scoreInt; // update global variable
                    console.log(total);
                    //$('#score').html(total);
                },
                
                over: function( event, ui ) {
                    // over droppable        
                    //console.log('over');
                    ui.helper
                    .addClass("ui-over")
                    .addClass($(this).attr('id'));
                },
                
                out: function( event, ui ) {
                    // not over droppable
                    //console.log('out');
                    // reset
                    ui.helper
                    .removeClass("ui-over")
                    .removeClass("container1")
                    .removeClass("container2");
                }
            });
        console.log(total);
    });
}


  




