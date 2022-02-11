//ES5

var form = document.querySelector("#songs-form");
var list = document.querySelector("#songs-list");
var container = document.querySelector(".container");


form.addEventListener("submit", function (e) {

  removeAll()
  var maxNo = parseInt(document.querySelector("#number").value);
  //setting maximum limit as 1000
  if (maxNo === "" ||maxNo ===0||maxNo<0) {
    
    showAlert("Field can not be Empty/Zero/Negative", "error");

  }
   else if (maxNo>1000)
  {
    showAlert("Out of range", "error");
  } 
  else
  {
    if (maxNo >= 0) {
 
      var songArray = addSongs(maxNo);
      var song = songArray.toString();
      var newchar = '';
      var finalsong = song.split(',').join(newchar);
      
      var row = document.createElement("tr");
      row.innerHTML = `<td>${finalsong}</td>`;
      list.appendChild(row);
     
      showAlert("Song created successfully", "success");
     
    } 
    else 
    {
      showAlert("Please enter valid number", "error");
    }
  }

  clearFields();
  e.preventDefault();
});

// Function to add sonsgs
function addSongs(maxNo) {

  var songsArray = [];
  var newline = '<br />';
  var songLine1 = " Glasses of juice on the table." + newline;
  var songLine2 = " Glasses of juice." + newline;
  var songLine3 = " Take one down, pass it around."+ newline;

  for (var i = maxNo; i >= 0; i--)
  {
    if (i === 0) 
    {
        songsArray.push(" No more Glasses of juice on the table.");
    } 
    else 
    {
      if (i === 1)
       {
        songsArray.push(i + " Bottle of juice on the table."+newline+i+" Bottle of juice on the table."+newline+i+" Bottle of juice."+newline+songLine3);
       }
       else 
       {
        songsArray.push(i + songLine1 + i+ songLine1 + i+songLine2+ songLine3) ;
        
       }
    }
  }
  return songsArray;
}

function clearFields() {
  document.querySelector("#number").value = "";
}

function removeAll(){
  document.getElementById("songs-list").innerHTML = "";
}

function showAlert(message, className) {

  var div = document.createElement("div");
  div.innerText = message;
  div.className = className;
  div.id = "box";
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector("#box").remove();
  }, 3000);
}
