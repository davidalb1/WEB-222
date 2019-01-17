//David Albuquerque Lima
//110244175

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function () {
	makeRequest(1);
}


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
		
		//concatenate page
	var url = "https://reqres.in/api/users?page=" + pageNum;
	
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var info = document.querySelector('#data');

			//clear tbody
			info.innerHTML = "";

			var i =0;

			for(i=0; i < jsData.data.length; i++) {
				var tr = document.createElement("tr");

				var td_UserId = document.createElement("td");

				var td_FirstName = document.createElement("td");

				var td_LastName = document.createElement("td");

				var td_img = document.createElement("td");

				var img_Avatar = document.createElement("img");

				var info_UserId = document.createTextNode(jsData.data[i].id);
				td_UserId.appendChild(info_UserId);

				tr.appendChild(td_UserId);

				var info_first = document.createTextNode(jsData.data[i].first_name);
				td_FirstName.appendChild(info_first);

				tr.appendChild(td_FirstName);

				var info_lastName = document.createTextNode(jsData.data[i].last_name);
				td_LastName.appendChild(info_lastName);

				tr.appendChild(td_LastName);

				img_Avatar.setAttribute("src", jsData.data[i].avatar);
				img_Avatar.setAttribute("alt", "not loading!");

				td_img.appendChild(img_Avatar);

				tr.appendChild(td_img);

				document.getElementById("data").appendChild(tr);

			}


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	