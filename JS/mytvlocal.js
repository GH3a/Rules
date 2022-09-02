let body = JSON.parse($response.body); 
body.content.region = 1;
body.content.is_europe = 0;
body = JSON.stringify(body);
$done({body});
