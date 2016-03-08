var d = new Date
function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
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
