var enterpriseID;

$(document).ready (function() {
	var url = window.location;
	var param = url.pathname;
	var ticketNumber = param.replace("/browse/","");
	getCID(ticketNumber);
});

function getCID (num1) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://preview-pangea.dotomi.com/api/v1/cj-qa/tickets", true);
	xhr.onreadystatechange = function() { 
		if (xhr.readyState == 4) {
			if (xhr.responseURL.includes("login")) {
				alert("Please login to preview-pangea for NeBana to get an Enterprise ID from JIRA");
				window.open("http://preview-pangea.dotomi.com/login");
			};
			var data1 = JSON.parse(xhr.responseText);
			var index1 = data1.findIndex(function(item, i){
				return item.ticket_number === num1;
			});
			var cid = parseInt(data1[index1].cid);
			getEnterpriseID(cid);
		}
	};
	xhr.send();
};

function getEnterpriseID (num2) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://preview-pangea.dotomi.com/api/v1/affiliate/company-list", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
		var data2 = JSON.parse(xhr.responseText);
		var index2 = data2.findIndex(function(item, i){
			return item.advertiser_id === num2;
		});
		var enterpriseID = data2[index2].enterprise_id;
		var advName = data2[index2].advertiser_name;
		chrome.storage.sync.set({
			"cid": enterpriseID
		});
	  }
	};
	xhr.send();
};