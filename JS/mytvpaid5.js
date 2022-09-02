let url = $request.url;
let headers = $request.headers;
let body = $request.body;

bodyc = body.replace(/free/,"paid");
$done({
	url: url,
	headers: headers,
	body: bodyc
});
