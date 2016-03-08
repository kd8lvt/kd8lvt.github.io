var d = new Date
function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}
function clock() {
  var date = d.getHours() + ":" + d.getMinutes()
  console.log("DEBUG: "+date)
  document.getElementById('clock').innerHTML = date
}
function startClock() {
  var parent = document.getElementById("clockButtonDiv");
  var child = document.getElementById("clockButton");
  parent.removeChild(child);
  while (true){  
    pauseBrowser(1000)
    clock()
  }
}
