function bindButtons(){
  $("#createButton").click(setUserCookie);
  $("#displayButton").click(alertUserCookie);
  $("#deleteButton").click(deleteUserCookie);
}

function deleteUserCookie(){
  console.warn("Delete cookie not implemented yet.");
}

function alertUserCookie(){
  
  alert(document.cookie);
}

function setUserCookie(){
  document.cookie="user=someone";
}

function hideUnusedDivs(){
  $("#clicksMessage").hide();
  $("#tabTime").hide();
}

function doTheThing(){
  bindButtons();
  hideUnusedDivs();
  
  console.log("I did the thing!");
}

$(document).ready(doTheThing);
