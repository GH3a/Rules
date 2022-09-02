let body = JSON.parse($request.body); 
body.user_type = paid
body = JSON.stringify(body);
$done({body}); 
