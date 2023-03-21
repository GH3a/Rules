let body = $response.body; 
let body = body.replace(/"displayName\".+\"externalResourceType\"/g, "\"displayName\": \"Eatsleepeat\",         \"externalResourceType\"");
$done({body});
