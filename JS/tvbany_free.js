let body = JSON.parse($response.body); 
body.data.campaigns.free_campaign = true;
body = JSON.stringify(body);
$done({body});
