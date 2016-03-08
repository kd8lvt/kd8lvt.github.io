var d = new Date
function sleep(el) {
  setTimeout(function() { foobar_cont(el); }, 5000);
}
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
    sleep(1000)
  }
}
