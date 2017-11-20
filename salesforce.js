$(document).ready (function() {
	// need to go up higher in the DOM.  Not grabbing correct HTML obj right now.  All vals are undefined
	var cid = document.getElementsByClassName("efhpFieldValue");


	// var cid = cid[1].innerHTML;
	// var cid = cid.replace(/\s/g, "");
	alert("cid test: " + cid);
	// getEnterpriseID(parseInt(cid));
});



function getEnterpriseID (num) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://preview-pangea.dotomi.com/api/v1/affiliate/company-list", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var data = JSON.parse(xhr.responseText);
	    var index = data.findIndex(function(item, i){
	    	return item.advertiser_id === num;
	    });
	    var enterpriseID = data[index].enterprise_id;
	    chrome.storage.sync.set({
			"enterpriseID": enterpriseID
		});
	  }
	}
	xhr.send();
}