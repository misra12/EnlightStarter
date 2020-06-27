var name = "SHREYA MISRA";
var i = 0;
function typeName(){
  if(i<name.length){
  var nameHeader = document.getElementById("nametag");
  console.log(nameHeader);
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
  i++;
  setTimeout(typeName,200);
  }
}

window.onload = typeName;