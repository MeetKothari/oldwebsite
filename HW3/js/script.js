/*
File: script.js
Date of Creation: 10/23/22
GUI Assignment: Creating an Interactive Dynamic Table

Meet Kothari, UMass Lowell Computer Science, meet_kothari@student.uml.edu

This is the accompanying js for my html page. It has a function that validates user input and then performs
table generation if given valid input.

*/

function createTable(){
  
  var minY = Number(document.getElementById('miny').value); // load values for the form
  var maxY = Number(document.getElementById('maxy').value); // upon console.log(), my input kept coming as text
  var minX = Number(document.getElementById('minx').value); // so i changed the form of the value
  var maxX = Number(document.getElementById('maxx').value);

  var rowPlaceholder = minY; // placeholders for incrementing without changing the original value
  var colPlaceholder = minX; 

  var firstRow = true; // A friend reccomended this trick for dealing with the blank space issue 
  var firstCol = true; // Halle

  // Begin function with simple if-else loop to validate inputs

  document.getElementById('error').innerHTML = ""; // reset the validator field on subsequent button clicks 

  if (typeof(minY) !== "number"){
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    console.log(typeof(minY));
  }
  
  else if (typeof(maxY) !== "number"){
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    console.log(typeof(maxY));
  }

  else if (typeof(minX) !== "number"){
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    console.log(typeof(minX));
  }

  else if (typeof(maxX) !== "number"){
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    console.log(typeof(maxX));
  }

  else if (minY < -50 || minY > 50 || minY == "" || minY == null){ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
    console.log(minY);
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    return false;
  }
  
  else if (maxY < -50 || maxY > 50 || maxY == "" || maxY == null){
    console.log(maxY);
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    return false;
  }
  
  else if (minX < -50 || minX > 50|| minX == "" || minX == null){
    console.log(minX);
    document.getElementById('error').innerHTML = "Please enter a valid input(s). Your incorrect input(s) have been highlighted in red.";
    return false;
  }
  
  else if (maxX < -50 || maxX > 50 || maxX == "" || maxX == null){
    console.log(maxX);
    document.getElementById('error').innerHTML = "Please enter a valid input. Your incorrect input(s) have been highlighted in red.";
    return false;
  }

  else if (minY > maxY){
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
