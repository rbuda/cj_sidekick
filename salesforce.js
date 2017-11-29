// $(document).ready (function() {
// 	var cid = document.getElementById("#highlight_panel_5001C00000hz27G > div.efhpContainer > table > tbody > tr > td.efhpLeftContent > div:nth-child(3) > span > div");

// 	alert("cid test: " + cid);
// });


// function getEnterpriseID (num) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "https://preview-pangea.dotomi.com/api/v1/affiliate/company-list", true);
// 	xhr.onreadystatechange = function() {
// 	  if (xhr.readyState == 4) {
// 	    var data = JSON.parse(xhr.responseText);
// 	    var index = data.findIndex(function(item, i){
// 	    	return item.advertiser_id === num;
// 	    });
// 	    var enterpriseID = data[index].enterprise_id;
// 	    chrome.storage.sync.set({
// 			"enterpriseID": enterpriseID
// 		});
// 	  }
// 	}
// 	xhr.send();
// }