var d = new Date
function waitFor(predicate, successCallback) {
    setTimeout(function () {
        var result = predicate();
        if (result !== undefined)
            successCallback(result);
        else
            waitFor(predicate, successCallback);
    }, 100);
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
    var d = new Date()
    var curDate = null
    do { var curDate = new Date() }
    waitFor(curDate-d > 1000)
    clock()
  }
}
