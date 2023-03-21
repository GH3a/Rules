let body = JSON.parse($response.body); 
body.data.displayName = "Eatsleepeat";
body.data.binaries.displayName = "Eatsleepeat";
body.data.creator.displayName = "Eatsleepeat";
body.data.emailAddress = "eatsleepeat@eat.com";
body = JSON.stringify(body);
$done({body});
