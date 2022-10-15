let body = JSON.parse($response.body); 
let timenow = body.data.currentTime;
/*body.data.testCompleteTime = timenow;*/
body.data.testCompleteTime = "2022-10-15 22:41:54";
body = JSON.stringify(body);
$done({body});
