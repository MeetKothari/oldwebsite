Contact Info: meet_kothari@student.uml.edu
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This write-up contains some of my sources (most of them are embedded in the code itself) and an in-depth look at what features work, partially work, and don't work at all.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

• (4) letter tiles in the player’s “hand” are selected randomly from a data structure with the properdistribution of the letters (code!)
- fully, takes from JSON and randomizes via function

• (4) letter tiles can be dragged-and-dropped onto target Scrabble squares
- fully, utilizes jquery 

• (4) program identifies which letter tile is dropped onto which Scrabble square
- fully, i use an array to slice class names and a dict to store values

• (4) board includes at least two bonus squares
- fully, uses triple letter score and double letter score

• (4) score is tallied correctly, including consideration of bonus square multipliers
- fully, variable named total keeps track, has global scope

• (3) any number of words can be played until the player wishes to quit or depletes all tiles
- half, i do not account for how many tiles are left

• (3) the board is cleared after each round so that a new word can be played
- fully, board clears when you submit word

• (3) after playing a word, only the number of letter tiles needed to bring the player’s “hand” back to 7 tiles are selected
- not at all, ran out of time 

• (3) score is kept for multiple words until the user restart a new game (implement next vs. restart)
- fully, total contains it

• (2) Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them anywhere else, they will be bounced back to the “rack”.
- fully, always bounce back if not in the right droppable area

• (2) Once the tile is placed on the Scrabble board, it can be moved back to the “rack”.
- half, can be moved back but score does not reflect it 

• (2) Except for the first letter, all sub-subsequent letters must be placed directly next to or below another letter with no space. Else, they will bounce back to the “rack”.
- fully

• (2) user can always restart the game.
- fully, restart functionality is present 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Sources used:


- https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css */
- helped me learn how to manipulate the tile rack

- https://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html
- helped me figure out how to put the tiles on the rack

- https://stackoverflow.com/questions/14626849/trying-to-make-letters-draggable-to-make-a-word
- for the drag and drop

- https://stackoverflow.com/questions/26555606/jquery-drag-and-drop-colour-div-to-change-background-of-another
- to change draggable color

