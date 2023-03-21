let body = JSON.parse($response.body); 
body.displayName = "Eatsleepeat";
body.binaries.displayName = "Eatsleepeat";
body.creator.displayName = "Eatsleepeat";
body.emailAddress = "eatsleepeat@eat.com";
body = JSON.stringify(body);
$done({body});
