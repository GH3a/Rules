$request.url = $request.url.replace(/\?user_type=*/,'user_type=paid');

$done({$request});
