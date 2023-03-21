let body = $response.body; 
let body.replace(/"displayName\".+\"externalResourceType\"/g, "\"displayName\": \"Eatsleepeat\",         \"externalResourceType\"");
let body = $response.body.replace(/budingkkk@126.com/g, "eatsleepeat@eat.com");
$done({body});
