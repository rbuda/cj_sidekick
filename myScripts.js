// Pulls Enterprise ID and Advertiser Name from Intranet Page

$(document).ready (function() {
	var page = document.getElementsByClassName("bodyIndent");
	var str = page[0].innerHTML
	var htmlText = str.substring(str.indexOf("id:") + 3);
	var enterpriseID = htmlText.replace(/\s/g, "");
	
	var page2 = document.getElementsByClassName("body");
	var str2 = page2[15].innerHTML;
	var x = str2.indexOf("<b>") + 3;
	var y = str2.indexOf("</b>")
	var companyName = str2.slice(x,y).trim();
	chrome.storage.sync.set({
		"cid": enterpriseID
	});
});



