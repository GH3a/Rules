let body = JSON.parse($response.body); 
body.channels["show_with_subscription"] = "true";
body.channels["is_4k"] = "true";
body = JSON.stringify(body);
$done({body}); 
