let body = JSON.parse($response.body); 
let body = body.data.email = "eatsleepeat@eat.com";
body = JSON.stringify(body);
$done({body});
