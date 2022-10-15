let body = JSON.parse($response.body); 
let body.data.currentTime = timenow;
body.data.testCompleteTime = timenow;
body = JSON.stringify(body);
$done({body});
