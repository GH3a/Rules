let url = $request.url;
let headers = $request.headers;
let body = $request.body;

for (i in body) {
  body['user_type'] = "paid";
}

$done({
	url: url,
	headers: headers,
	body: body
});
