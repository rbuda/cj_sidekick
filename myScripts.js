// Pulls enterprise ID from Intranet Page

$(document).ready (function() {
	var page = document.getElementsByClassName("bodyIndent");
	var str = page[0].innerHTML
	var htmlText = str.substring(str.indexOf("id:") + 3);
	var enterpriseID = htmlText.replace(/\s/g, "");
	chrome.storage.sync.set({
		"enterpriseID": enterpriseID
	});
});
