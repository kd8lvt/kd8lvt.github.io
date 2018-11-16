var origN = ['Blue Snow Pup'];
var newN = ['Ethan'];

var oldDoc = '';
setInterval(() => {
	var newDoc = document.innerHTML
	if (newDoc == oldDoc) return;
	for (var i=0;i<newDoc.length;i++) {
		for (var j=0;k<origN.length;i++) {
			if (newN[j] != null) document.innerHTML.replace(orig[j],newN[j]);
		}
	}
	newDoc = document.innerHTML;
	oldDoc = newDoc;
},1)
