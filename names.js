var origN = ['Blue Snow Pup'];
var newN = ['Ethan'];
var classesToReplace = ['da-name','da-username'];
var KD8LVT_RENAMELOOP;

function KD8LVT_ENABLECLIENTRENAME() {
	KD8LVT_RENAMELOOP = setInterval(function() {
		for (var k=0;k<classesToReplace.length;k++) {
			var elem = document.getElementsByClassName(classesToReplace[k]);
			for (var l=0;l<elem.length;l++) {
				var newDoc = elem[l].innerHTML;
				for (var i=0;i<newDoc.length;i++) {
					for (var j=0;j<origN.length;i++) {
						if (newN[j] != null) elem[l].innerHTML.replace(origN[j],newN[j]);
					}
				}
			}
		}
	},100);
}
 
function KD8LVT_DISABLECLIENTRENAME() {
	clearInterval(KD8LVT_RENAMELOOP);
	console.log("Disabled rename loop.");
}
