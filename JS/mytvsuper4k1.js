let body = $request.body;
body.user_type = 'paid';
$done({body});
