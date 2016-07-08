function changeUrl(url){
	var originalScript = document.getElementById("scriptId");
	originalScript.parentNode.removeChild(originalScript);
	var newScript = document.createElement("script");
	newScript.setAttribute('src', url);
	newScript.setAttribute('id', "scriptId");			
	loadNewScript(url);
}

function loadNewScript(scriptName){
	var headObj = document.getElementsByTagName("head")[0];
	var newScript = document.createElement("script");
	newScript.type = "text/javascript";
	newScript.src = scriptName;
	newScript.id = "scriptId";
	headObj.appendChild(newScript);
}

function changeSrc(url){
	changeUrl(url);
}
