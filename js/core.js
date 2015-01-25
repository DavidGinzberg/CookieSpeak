function alertUserCookie(){
  document.cookie="user=someone";
  alert(document.cookie);
}

function doTheThing(){
  alertUserCookie();
  
  console.log("I did the thing!");
}

$(document).ready(doTheThing);
