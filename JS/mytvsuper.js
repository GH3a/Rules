let body = JSON.parse($response.body); 
for (i in body.channels) {
  body.channels[i].show_with_subscription = "true";
  body.channels[i].is_4k = "true";
  body = JSON.stringify(body);
}
$done({body}); 
