var origN = ['Blue Snow Pup'];
var newN = ['Ethan'];
var classesToReplace = ['scrollerWrap-21JEkd','chat-3bRxxu'];

function KD8LVT_ENABLECLIENTRENAME() {
	setInterval(function() {
		for (var k=0;k<classesToReplace.length;k++) {
			var elem = document.getElementByClassName(classesToReplace[k]);
			var newDoc = elem.innerHTML;
			for (var i=0;i<newDoc.length;i++) {
				for (var j=0;j<origN.length;i++) {
					if (newN[j] != null) elem.innerHTML.replace(origN[j],newN[j]);
				}
			}
		}
	},100);
}
 
