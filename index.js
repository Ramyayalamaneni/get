let requestBodyEl = document.getElementById('requestBody');
let sendPostRequestBtnEl = document.getElementById('sendPostRequestBtn');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');

sendPostRequestBtnEl.onclick = function () {
	let url = 'https://gorest.co.in/public-api/users';
	let requestBodyValue = requestBodyEl.value;
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization:
				'Bearer 22db410147513752371b989f20aaf238eb320c79a7122240aa1a58690a81827b',
		},
		body: requestBodyValue,
	};

	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (jsonData) {
			let code = jsonData.code;
			let data = JSON.stringify(jsonData.data);
			requestStatusEl.textContent = code;
			httpResponseEl.textContent = data;
			console.log(data);
		});
};
