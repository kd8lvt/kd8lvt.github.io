var d = new Date
function sleep(ms){
  setTimeout(continueExecution(), ms) //wait 'ms' seconds before continuing
}
function continueExecution() {
    clock()
}
function mainLoop(){
  i = 60
  while (i > 0) {
    sleep(1000)
    i = i-1
  }
  mainLoop()
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
