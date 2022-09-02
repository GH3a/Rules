let body = JSON.parse($response.body); 

body.is_4k = 1;

body = JSON.stringify(body);
$done({body}); 
