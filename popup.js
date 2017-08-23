var k4arr = [];
window.onload = function() {
  document.getElementById("save").onclick = function() {
    var oid = document.getElementById("saveLine").value;
    var cid = document.getElementById("saveLine2").value;

    chrome.storage.sync.set({
      "oid": oid,
      "cid": cid,
    },
      function() {
        document.getElementById("saveLine").value="";
        document.getElementById("saveLine2").value="";
    });
  };

  // var box = document.getElementById("ischeckedyorn");
  // box.onchange = function() {
  //   if (box.checked) {
  //     alert("checked");
  //   } else {
  //     alert("not checked")
  //   };
  // };

  chrome.storage.sync.get("oid", function(data) {
    document.getElementById("orderIDDisplay").append(data.oid);
  });
  chrome.storage.sync.get("cid", function(data) {
    document.getElementById("entIDDisplay").append(data.cid);
  });
  chrome.storage.sync.get("enterpriseID", function(data) {
    document.getElementById("saveLine2").value=data.enterpriseID;
  });

  document.getElementById("launch").onclick = function() {
      chrome.storage.sync.get("oid", function(data) {
        buildK4Arr("orderID", data.oid)
      });
      chrome.storage.sync.get("cid", function(data) {
        buildK4Arr("enterpriseID", data.cid)
      });  
      var e = document.getElementById("timePeriodBox");
      var value = e.options[e.selectedIndex].value;
      buildK4Arr("time", value);
  };

  document.getElementById("arrowIcon").onclick = function() {
      chrome.storage.sync.get("oid", function(data) {
        buildK4Arr("orderID", data.oid)
      });
      chrome.storage.sync.get("cid", function(data) {
        buildK4Arr("enterpriseID", data.cid)
      });  
      var e = document.getElementById("timePeriodBox");
      var value = e.options[e.selectedIndex].value;
      buildK4Arr("time", value);
  };
}

function buildK4Arr(key, value) {
  k4arr[key] = value;
  if (k4arr.orderID != null && k4arr.enterpriseID != null && k4arr.time != null) {
     openKibana(k4arr);
  } else {
    console.log("keep going");
  };
};

function openKibana(arr) {
  if (arr != null && arr.enterpriseID.length > 0) {
    window.open("http://kibana.int.cj.com/?#/dashboard/CIE_MATT_MARA__dkcie?_a=(columns:!(_source),filters:!((meta:(disabled:!f,index:%5Bactivity-%5DYYYY-MM-DD,key:coreview.query.coupon,negate:!t,value:null),query:(match:(coreview.query.coupon:(query:null,type:phrase)))),(meta:(disabled:!f,index:%5Bactivity-%5DYYYY-MM-DD,key:coreview.enterprise_id,negate:!t,value:'1'),query:(match:(coreview.enterprise_id:(query:'1',type:phrase)))),(meta:(disabled:!f,index:%5Bactivity-%5DYYYY-MM-DD,key:coreview.enterprise_id,negate:!f,value:'"+arr.enterpriseID+"'),query:(match:(coreview.enterprise_id:(query:'"+arr.enterpriseID+"',type:phrase))))),index:%5Bactivity-%5DYYYY-MM-DD,interval:auto,panels:!((col:1,columns:!(coreview.event_time_utc,coreview.last_click_time,coreview.query.oid,coreview.request_url,coreview.query_string,coreview.referring_url,coreview.client_ip_address),id:dkcieSrch,row:10,size_x:12,size_y:4,sort:!(coreview.event_time_utc,desc),type:search),(col:8,id:VIEWS__dkcie,row:1,size_x:5,size_y:3,type:visualization),(col:8,id:VIEWS_IN_AP__dkcie,row:4,size_x:5,size_y:3,type:visualization),(col:1,id:HITS__dkcie,row:1,size_x:4,size_y:2,type:visualization),(col:1,id:DK4_01-apbad_error_code,row:3,size_x:4,size_y:2,type:visualization),(col:5,id:DK_01-ENTERPRISE_ID,row:1,size_x:3,size_y:4,type:visualization),(col:1,id:DK4_coupon-code,row:5,size_x:7,size_y:3,type:visualization),(col:1,id:Action_ID___dkc,row:8,size_x:7,size_y:2,type:visualization),(col:8,id:Device_is_Mobile_Desktop_Other___dkc,row:7,size_x:5,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'NOT%20coreview.user_agent:%20%22Master%20TMS%20bot%22%20AND%20coreview.query.oid:%20%22"+arr.orderID+"%22%20AND%20coreview.query.type:%20%22%22')),sort:!(coreview.event_time_utc,desc),title:CIE_MATT_MARA__dkcie)&_g=(refreshInterval:(display:Off,pause:!f,section:0,value:0),time:(from:now-"+arr.time+",mode:quick,to:now))");
  } else {
    window.open("http://kibana.int.cj.com/?#/dashboard/CIE_MATT_MARA__dkcie?_a=(columns:!(_source),filters:!((meta:(disabled:!f,index:%5Bactivity-%5DYYYY-MM-DD,key:coreview.query.coupon,negate:!t,value:null),query:(match:(coreview.query.coupon:(query:null,type:phrase)))),(meta:(disabled:!f,index:%5Bactivity-%5DYYYY-MM-DD,key:coreview.enterprise_id,negate:!t,value:'1'),query:(match:(coreview.enterprise_id:(query:'1',type:phrase))))),index:%5Bactivity-%5DYYYY-MM-DD,interval:auto,panels:!((col:1,columns:!(coreview.event_time_utc,coreview.last_click_time,coreview.query.oid,coreview.request_url,coreview.query_string,coreview.referring_url,coreview.client_ip_address),id:dkcieSrch,row:10,size_x:12,size_y:4,sort:!(coreview.event_time_utc,desc),type:search),(col:8,id:VIEWS__dkcie,row:1,size_x:5,size_y:3,type:visualization),(col:8,id:VIEWS_IN_AP__dkcie,row:4,size_x:5,size_y:3,type:visualization),(col:1,id:HITS__dkcie,row:1,size_x:4,size_y:2,type:visualization),(col:1,id:DK4_01-apbad_error_code,row:3,size_x:4,size_y:2,type:visualization),(col:5,id:DK_01-ENTERPRISE_ID,row:1,size_x:3,size_y:4,type:visualization),(col:1,id:DK4_coupon-code,row:5,size_x:7,size_y:3,type:visualization),(col:1,id:Action_ID___dkc,row:8,size_x:7,size_y:2,type:visualization),(col:8,id:Device_is_Mobile_Desktop_Other___dkc,row:7,size_x:5,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'NOT%20coreview.user_agent:%20%22Master%20TMS%20bot%22%20AND%20coreview.query.oid:%20%22"+arr.orderID+"%22%20AND%20coreview.query.type:%20%22%22')),sort:!(coreview.event_time_utc,desc),title:CIE_MATT_MARA__dkcie)&_g=(refreshInterval:(display:Off,pause:!f,section:0,value:0),time:(from:now-"+arr.time+",mode:quick,to:now))");
  }
};

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];

    var url = tab.url;

    console.assert(typeof url == "string", 'tab.url should be a string');

    callback(url);
  });

}

function getImageUrl(searchTerm, callback, errorCallback) {

  var searchUrl = "https://ajax.googleapis.com/ajax/services/search/images" +
    "?v=1.0&q=" + encodeURIComponent(searchTerm);
  var x = new XMLHttpRequest();
  x.open("GET", searchUrl);

  x.responseType = "json";
  x.onload = function() {

    var response = x.response;
    if (!response || !response.responseData || !response.responseData.results ||
        response.responseData.results.length === 0) {
      errorCallback("No response from Google Image search!");
      return;
    }
    var firstResult = response.responseData.results[0];

    var imageUrl = firstResult.tbUrl;
    var width = parseInt(firstResult.tbWidth);
    var height = parseInt(firstResult.tbHeight);
    console.assert(
        typeof imageUrl == "string" && !isNaN(width) && !isNaN(height),
        "Unexpected respose from the Google Image Search API!");
    callback(imageUrl, width, height);
  };
  x.onerror = function() {
    errorCallback("Network error.");
  };
  x.send();
}

function renderStatus(statusText) {
  document.getElementById("status").textContent = statusText;
}

document.addEventListener("DOMContentLoaded", function() {
  getCurrentTabUrl(function(url) {
    renderStatus("Performing Google Image search for " + url);

    getImageUrl(url, function(imageUrl, width, height) {

      renderStatus("Search term: " + url + "\n" +
          "Google image search result: " + imageUrl);
      var imageResult = document.getElementById("image-result");

      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    }, function(errorMessage) {
      renderStatus("Cannot display image. " + errorMessage);
    });
  });
});
