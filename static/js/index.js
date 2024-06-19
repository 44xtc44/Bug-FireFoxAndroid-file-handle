//check if this browser supports various APIs we need
var us = "Unsupported APIs:";

if(!window.Blob){us += "\n - Blob";}
if(!window.File){us += "\n - File";}
if(!window.FileList){us += "\n - FileList";}
if(!window.FileReader){us += "\n - FileReader";}
if(!window.URL){us += "\n - URL";}

if(us != "Unsupported APIs:"){alert(us);}

function loadFiles(evnt) {
  document.getElementById("list").innerHTML = ""; //clear previously loaded files
  var files = evnt.target.files; //files is an array of File objects. List some properties
  console.log("# of files selected: ",files.length);

  if (files.length == 0) {
    return;
  }
  let fileURL = window.URL.createObjectURL(files[0]);
  let v = document.createElement('audio');
  v.src = fileURL;
  v.controls = true;
  list.appendChild(v);
}

document.getElementById("files").addEventListener("change", loadFiles, false);
