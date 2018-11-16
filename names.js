var origN = ['Blue Snow Pup'];
var newN = ['Ethan'];
var classesToReplace = ['scrollerWrap-21JEkd','chat-3bRxxu'];
var KD8LVT_RENAMELOOP;

function KD8LVT_ENABLECLIENTRENAME() {
	KD8LVT_RENAMELOOP = setInterval(function() {
		for (var k=0;k<classesToReplace.length;k++) {
			var elem = document.getElementsByClassName(classesToReplace[k])[0];
			var newDoc = elem.innerHTML;
			for (var i=0;i<newDoc.length;i++) {
				for (var j=0;j<origN.length;i++) {
					if (newN[j] != null) elem.innerHTML.replace(origN[j],newN[j]);
				}
			}
		}
	},100);
}
 
function KD8LVT_DISABLECLIENTRENAME() {
	cancelInterval(KD8LVT_RENAMELOOP);
	console.log("Disabled rename loop.");
}
