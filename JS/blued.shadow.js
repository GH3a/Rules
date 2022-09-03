let body = JSON.parse($response.body); 
for (i in body.data) {
  body.data[i].is_open_shadow = 1;
}
body = JSON.stringify(body);
$done({body}); 
