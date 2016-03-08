function clock() {
  document.getElementById('clock').innerHTML = Date()
}
function startClock() {
  var parent = document.getElementById("clockButtonDiv");
  var child = document.getElementById("clockButton");
  parent.removeChild(child);
  while true {
    clock()
  }
}
