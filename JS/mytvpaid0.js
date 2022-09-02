let url = $request.url;
url = url.replace(/free/,"paid");
$done({url});
