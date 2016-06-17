/*var cons = ["glowstone","blaze","misc","axe","drill","wWaraxe","wsWaraxe","sWaraxe","siWaraxe","iWaraxe","idWaraxe","dWaraxe","dpWaraxe","iDrill","idDrill","dDrill","dpDrill","pDrill"]
$("#head").append('<script id="script">')
	for(i in cons) {
		
		console.log(cons[i])
		$("#script").append("$('#"+cons[i]+"').click(function(){$('#"+cons[i]+"con').slideToggle('fast');});")

	}
$("#head").append('</script>')*/
$(document).ready(function(){$('#glowstone').click(function(){$('#glowstonecon').slideToggle('fast');});$('#blaze').click(function(){$('#blazecon').slideToggle('fast');});$('#misc').click(function(){$('#misccon').slideToggle('fast');});$('#axe').click(function(){$('#axecon').slideToggle('fast');});$('#drill').click(function(){$('#drillcon').slideToggle('fast');});$('#wWaraxe').click(function(){$('#wWaraxecon').slideToggle('fast');});$('#wsWaraxe').click(function(){$('#wsWaraxecon').slideToggle('fast');});$('#sWaraxe').click(function(){$('#sWaraxecon').slideToggle('fast');});$('#siWaraxe').click(function(){$('#siWaraxecon').slideToggle('fast');});$('#iWaraxe').click(function(){$('#iWaraxecon').slideToggle('fast');});$('#idWaraxe').click(function(){$('#idWaraxecon').slideToggle('fast');});$('#dWaraxe').click(function(){$('#dWaraxecon').slideToggle('fast');});$('#dpWaraxe').click(function(){$('#dpWaraxecon').slideToggle('fast');});$('#iDrill').click(function(){$('#iDrillcon').slideToggle('fast');});$('#idDrill').click(function(){$('#idDrillcon').slideToggle('fast');});$('#dDrill').click(function(){$('#dDrillcon').slideToggle('fast');});$('#dpDrill').click(function(){$('#dpDrillcon').slideToggle('fast');});$('#pDrill').click(function(){$('#pDrillcon').slideToggle('fast');});})