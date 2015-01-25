function alertUserCookie(){
  
  alert(document.cookie);
}

function setUserCookie(){
  document.cookie="user=someone";
}

function doTheThing(){
  setUserCookie();
  alertUserCookie();
  
  console.log("I did the thing!");
}

$(document).ready(doTheThing);
