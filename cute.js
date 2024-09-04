document.getElementById("btnYes").onclick = function () {
  showResponse("You said YES! ❤️");
};

document.getElementById("btnNo").onclick = function () {
  showResponse("Oh no, maybe next time! 😢");
};

function showResponse(message) {
  document.getElementById("responseMessage").textContent = message;
  document.getElementById("response").classList.remove("hidden");
}
