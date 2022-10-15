let body = JSON.parse($response.body); 
let timenow = body.data.currentTime;
body.data.testCompleteTime = timenow;
body = JSON.stringify(body);
$done({body});
