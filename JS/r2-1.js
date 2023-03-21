let body = $response.body; 
let body.replace(/"displayName\".+\"externalResourceType\"/g, "\"displayName\": \"Eatsleepeat\",         \"externalResourceType\"");
$done({body});
