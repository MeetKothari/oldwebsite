/*

File: script.js
Date of Creation: 11/23/22
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table

Meet Kothari, UMass Lowell Computer Science, meet_kothari@student.uml.edu

This is the accompanying js for my html page. It uses the JQuery plugin outlined in the prompt to validate user input and then perform
table generation if given valid input.

*/

// Code from previous assignment
function createTable(){
  
  var minY = Number(document.getElementById('minY').value); // load values for the form
  var maxY = Number(document.getElementById('maxY').value); // upon console.log(), my input kept coming as text
  var minX = Number(document.getElementById('minX').value); // so i changed the form of the value
  var maxX = Number(document.getElementById('maxX').value);

  var rowPlaceholder = minY; // placeholders for incrementing without changing the original value
  var colPlaceholder = minX; 

  var firstRow = true; // A friend reccomended this trick for dealing with the blank space issue 
  var firstCol = true; // Halle

  // Begin function with simple if-else loop to validate inputs

  document.getElementById('error').innerHTML = ""; // reset the validator field on subsequent button clicks 

  if (minY > maxY){
    document.getElementById('error').innerHTML = "Please enter a valid input. Your minimum value cannot exceed your maximum value.";
    return false;
  }

  else if (minX > maxX){
    document.getElementById('error1').innerHTML = "Please enter a valid input. Your minimum value cannot exceed your maximum value.";
    return false;
  }
  
  else { // if valid, then allow the table to be created with the given values
    
    let tableStr = " "; // create an empty string, will fill this with the table values, 
                        // source (https://www.youtube.com/watch?v=5Oq6Eqy7Y_A&t=749s&ab_channel=Divotips)
                    
    tableStr += '<table>'; // use tableStr string to open table tag
  
    if (firstRow && firstCol){ tableStr = '<tr>' + '<td>' + 'X' + '</td>'; } // if first cell, put X and skip, else...
    for (rowPlaceholder; rowPlaceholder <= maxY; rowPlaceholder++) {  
      // source: https://stackoverflow.com/questions/70055512/input-to-table-in-javascript (for how to add rows and cols using js)
      tableStr += '<th>' + rowPlaceholder + '</th>'; // as rows are created, they should contain the value of wherever the current placeholder is
    } 
    for (let colIterator = minX; colIterator <= maxX; colIterator++) {
      // source: https://stackoverflow.com/questions/70055512/input-to-table-in-javascript (for how to add rows and cols using js)
      tableStr += '<tr>';
      tableStr += '<th>' + colPlaceholder + '</th>';
      
      for (let rowIterator = minY; rowIterator <= maxY; rowIterator++) { 
        let prod = (colIterator * rowIterator);
        tableStr += '<td>' + prod + '</td>'; 
      }
      
      tableStr += '</tr>'; // update the tableStr 
      colPlaceholder++; // increment the column
    }
  
    tableStr += '</table>'; // use tableStr string to close table tag
    
    $('#table').html(tableStr); // messaged the TA about this, also found a solution through StackOverflow
                            // https://stackoverflow.com/questions/38676037/js-table-value-update-onchange
                            // https://www.w3schools.com/jquery/html_html.asp

  } 
}


// Validation through JQuery, part 1 of Hw4
$().ready(function(){
    // template from example 2
    // https://jqueryvalidation.org/jQuery.validator.addMethod/

    /* jQuery.validator.addMethod("isGreater", function(value, element, params) { 
        return this.optional(element) || value = params[1] < params[0];
    }, jQuery.validator.format("Your minimum value cannot be greater than your maximum. Please enter a smaller number.")); */

    // validate form on keyup and submit
    $("#form").validate({
        
        rules: {
            minY: { 
                required: true, 
                number: true,
                range: [-50, 50], // https://jqueryvalidation.org/range-method/
                step: 1, //https://jqueryvalidation.org/step-method/
                // https://piazza.com/class/l7hvrjkbmr73c6/post/46 (grader requested to account for decimals)
            },
            maxY:{ 
                required: true, 
                number: true,
                range: [-50, 50], // https://jqueryvalidation.org/range-method/
                step: 1, //https://jqueryvalidation.org/step-method/
                // https://piazza.com/class/l7hvrjkbmr73c6/post/46 (grader requested to account for decimals)
                
            },
            minX:{ 
                required: true, 
                number: true,
                range: [-50, 50], // https://jqueryvalidation.org/range-method/
                step: 1 //https://jqueryvalidation.org/step-method/
                // https://piazza.com/class/l7hvrjkbmr73c6/post/46 (grader requested to account for decimals)
            },
            maxX:{ 
                required: true, 
                number: true,
                range: [-50, 50], // https://jqueryvalidation.org/range-method/
                step: 1 //https://jqueryvalidation.org/step-method/
                // https://piazza.com/class/l7hvrjkbmr73c6/post/46 (grader requested to account for decimals)
            }
        
        },

        
        messages: {
            minY: {
                required: "You need to input a value for this field.", 
                number: "The value has to be a number.",
                range: "Your value is not within the supported range (-50 to 50).",
                step: "Please enter a WHOLE number between -50 and 50 (it can't be a decimal).",
            },
            maxY: {
                required: "You need to input a value for this field.", 
                number: "The value has to be a number.",
                range: "Your value is not within the supported range (-50 to 50).",
                step: "Please enter a WHOLE number between -50 and 50 (it can't be a decimal).",
            },
            minX: {
                required: "You need to input a value for this field.", 
                number: "The value has to be a number.",
                range: "Your value is not within the supported range (-50 to 50).",
                step: "Please enter a WHOLE number between -50 and 50 (it can't be a decimal).",
            },
            maxX: {
                required: "You need to input a value for this field.", 
                number: "The value has to be a number.",
                range: "Your value is not within the supported range (-50 to 50).",
                step: "Please enter a WHOLE number between -50 and 50 (it can't be a decimal).",
            },
    
        },
        
        submitHandler: function(form){ createTable();}
    
    });
});


