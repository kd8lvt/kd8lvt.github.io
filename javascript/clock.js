var d = new Date
function clock() {
  var date = d.getHours() + ":" + d.getMinutes()
  document.getElementById('clock').innerHTML = date
}
function startClock() {
  var parent = document.getElementById("clockButtonDiv");
  var child = document.getElementById("clockButton");
  parent.removeChild(child);
  while (true) {
    clock()
  }
}
