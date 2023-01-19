let body = JSON.parse($response.body); 
for (i in body.data.campaigns) {
  body.data.campaigns[i].free_campaign = true;
}
body = JSON.stringify(body);
$done({body});
