var cons = ["glowstone","blaze","misc","axe","drill","wWaraxe","wsWaraxe","sWaraxe","siWaraxe","iWaraxe","idWaraxe","dWaraxe","dpWaraxe","iDrill","idDrill","dDrill","dpDrill","pDrill"]
script = '<script id="script">$(document).ready(function(){'
	for(i in cons) {
		
		console.log(cons[i])
		script = script + "$('#"+cons[i]+"').click(function(){$('#"+cons[i]+"con').slideToggle('fast');});"

	}
script = script+'})</script>'
$(document).ready(function(){$("html").append(script)});