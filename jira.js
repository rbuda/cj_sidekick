$(document).ready (function() {
	var url = window.location;
	var param = url.pathname;
	var ticketNumber = param.replace("/browse/","");
	var ticketsURL = "https://preview-pangea.dotomi.com/api/v1/affiliate/company-list";
	var companyArray = [];	
		$.ajax({
		    url: ticketsURL,
		    dataType: 'json',
		    success: function (data) {
		      $.each(data, function (i, companyArray) {         
		          var advertiser_name = companyArray.advertiser_name;
		          var cid = companyArray.advertiser_id;
		          var eid = companyArray.enterprise_id;
		          var ticketSelect = advertiser_name + ' (CID: ' + cid + ')'; 
		          console.log(advertiser_name);
		        })
		    }
		});

});