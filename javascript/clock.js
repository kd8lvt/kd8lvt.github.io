var d = new Date
function sleep(ms){
  setTimeout(continueExecution, ms) //wait ten seconds before continuing
}
function continueExecution() {
    clock()
    sleep(1000)
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
  continueExecution()
}
