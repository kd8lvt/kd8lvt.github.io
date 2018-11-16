var origN = ['Blue Snow Pup'];
var newN = ['Ethan'];

var oldDoc = '';
setInterval(function() {
	var newDoc = document.body.innerHTML
	if (oldDoc == newDoc) return;
	for (var i=0;i<newDoc.length;i++) {
		for (var j=0;j<origN.length;i++) {
			if (newN[j] != null) document.body.innerHTML.replace(orig[j],newN[j]);
		}
	}
	newDoc = document.body.innerHTML;
	oldDoc = newDoc;
},100);
 
